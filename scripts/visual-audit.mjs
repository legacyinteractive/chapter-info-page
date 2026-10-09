import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';

const baseUrl = process.env.CHAPTER_PREVIEW_URL || 'http://127.0.0.1:4173/';
const outDir = path.resolve('artifacts/chapter-visual-qa');
fs.mkdirSync(outDir, { recursive: true });
const sizes = [
  { name:'desktop', width:1440, height:900 },
  { name:'laptop', width:1280, height:800 },
  { name:'ipad', width:820, height:1180 },
  { name:'phone', width:390, height:844 },
  { name:'small-phone', width:360, height:780 }
];
const failures = [];
const observations = [];
const browser = await chromium.launch({headless:true});
try {
  for (const size of sizes) {
    const page = await browser.newPage({viewport:{width:size.width,height:size.height},deviceScaleFactor:1,acceptDownloads:true});
    try {
      const response = await page.goto(baseUrl,{waitUntil:'domcontentloaded',timeout:30000});
      if (!response || response.status() >= 400) throw new Error('Site did not return a successful response');
      await page.evaluate(() => Promise.race([
        document.fonts.ready,
        new Promise(resolve => setTimeout(resolve, 3500))
      ]));
      await page.locator('.history-photo img').scrollIntoViewIfNeeded();
      await page.waitForFunction(() => {const img=document.querySelector('.history-photo img');return img?.complete && img.naturalWidth>0;},null,{timeout:7000});
      await page.locator('.footer--prestige').scrollIntoViewIfNeeded();
      await page.waitForTimeout(300);
      const metrics = await page.evaluate(() => {
        const w = document.documentElement.clientWidth;
        const scrollWidth = document.documentElement.scrollWidth;
        const footer = document.querySelector('.footer--prestige');
        const crest = document.querySelector('.header .brand-logo img');
        const group = document.querySelector('.history-photo img');
        const clipping = [...document.querySelectorAll('.footer--prestige .prestige-grid > *, .footer--prestige .prestige-bottom > *, .header .brand-name')].filter(el => {
          const style = getComputedStyle(el);
          return style.overflowX !== 'visible' && el.scrollWidth > el.clientWidth + 3;
        }).map(el => el.className || el.tagName);
        return {
          clientWidth:w,
          scrollWidth,
          clipping,
          footerWidth:Math.round(footer?.getBoundingClientRect().width||0),
          crestLoaded:Boolean(crest?.complete && crest.naturalWidth),
          groupLoaded:Boolean(group?.complete && group.naturalWidth),
          footerPresent:Boolean(footer?.textContent?.includes('Wolvesey Chapter')),
          chapterVisible:Boolean(document.querySelector('h1')?.textContent?.includes('Wolvesey'))
        };
      });
      if (metrics.clipping.length) failures.push(size.name+': clipped text containers '+metrics.clipping.join(', '));
      if (metrics.scrollWidth > metrics.clientWidth + 2) {
        failures.push(size.name+': horizontal overflow of '+(metrics.scrollWidth-metrics.clientWidth)+'px');
      }
      for (const [name,ok] of Object.entries({
        footerPresent:metrics.footerPresent,
        chapterVisible:metrics.chapterVisible,
        crestLoaded:metrics.crestLoaded,
        groupLoaded:metrics.groupLoaded
      })) if(!ok) failures.push(size.name+': '+name+' failed');
      if(size.width<=1120){
        const toggle=page.locator('.menu-toggle');
        if(!(await toggle.isVisible())) failures.push(size.name+': mobile navigation toggle hidden');
        else{
          await toggle.click();
          if(!(await page.locator('#site-nav').isVisible())) failures.push(size.name+': mobile menu did not open');
          await page.keyboard.press('Escape');
          if(await page.locator('#site-nav').isVisible()) failures.push(size.name+': mobile menu did not close with Escape');
        }
      }
      if(size.name==='desktop'){
        const formButton = page.locator('[data-enquire]').first();
        await formButton.click();
        const dialog=page.locator('#enquiry-dialog');
        if(!(await dialog.evaluate(el=>el.open))) failures.push('desktop: demo enquiry did not open');
        await page.locator('#enquiry-name').fill('Example Visitor');
        await page.locator('#enquiry-email').fill('visitor@example.invalid');
        await page.locator('#enquiry-message').fill('This is a test only.');
        await page.locator('#demo-enquiry button[type="submit"]').click();
        if(!(await page.locator('#form-status').isVisible())) failures.push('desktop: demo enquiry confirmation not shown');
        await page.keyboard.press('Escape');
        await page.waitForTimeout(100);
        if(await dialog.evaluate(el=>el.open)) failures.push('desktop: demo enquiry did not close');
        if(await page.locator('#enquiry-name').inputValue()) failures.push('desktop: demo enquiry did not clear entered values');
        await page.locator('[data-gallery="0"]').click();
        const galleryOpen=await page.locator('#gallery-dialog').evaluate(el=>el.open);
        if(!galleryOpen) failures.push('desktop: gallery lightbox failed to open');
        await page.keyboard.press('Escape');
        if(await page.locator('#gallery-dialog').evaluate(el=>el.open)) failures.push('desktop: gallery Escape did not close');
        const pdfEvent=page.waitForEvent('download',{timeout:7000});
        await page.locator('#footer-download').click();
        const pdf=await pdfEvent;
        if(!pdf.suggestedFilename().endsWith('.pdf')) failures.push('desktop: sample joining PDF download failed');
      }
      await page.screenshot({path:path.join(outDir,size.name+'-full.png'),fullPage:true,animations:'disabled'});
      await page.locator('.footer--prestige').screenshot({path:path.join(outDir,size.name+'-footer.png'),animations:'disabled'});
      observations.push({viewport:size.name,...metrics});
    } catch(error) {
      failures.push(size.name+': '+error.message);
    } finally {
      await page.close();
    }
  }
} finally {
  await browser.close();
}
fs.writeFileSync(path.join(outDir,'audit.json'),JSON.stringify({observations,failures},null,2)+'\n');
for(const observation of observations) console.log(observation.viewport+': width '+observation.clientWidth+', scroll '+observation.scrollWidth+', footer '+observation.footerWidth);
if(failures.length){
  for(const failure of failures) console.error('FAIL '+failure);
  process.exit(1);
}
console.log('Visual audit passed: five viewports, menus, image assets, gallery and sample PDF.');
