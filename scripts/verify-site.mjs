import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=fileURLToPath(new URL('../public/',import.meta.url));
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const failures=[];
function assert(pass,label){if(!pass)failures.push(label);}
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]);
assert(new Set(ids).size===ids.length,'duplicate HTML IDs');
for(const m of html.matchAll(/href="#([^"]+)"/g))assert(ids.includes(m[1]),'broken link #'+m[1]);
for(const m of html.matchAll(/<img\b[^>]*>/g)){
  const tag=m[0],src=tag.match(/\bsrc="([^"]*)"/)?.[1]||'';
  assert(tag.includes('alt='),'image missing alt');
  if(src.startsWith('/'))assert(fs.existsSync(path.join(root,src.slice(1))),'missing asset '+src);
}
for(const m of html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g))assert(/\brel="[^"]*noopener/.test(m[0]),'target=_blank without noopener');
assert(html.includes('name="robots" content="noindex, nofollow"'),'demo noindex removed');
assert(html.includes('Wolvesey Chapter')&&html.includes('Winchester Masonic Centre'),'Chapter identification missing');
assert(['JAN','MAR','OCT','DEC'].every(m=>html.includes('class="month" aria-label="'+({JAN:'January',MAR:'March',OCT:'October',DEC:'December'})[m]+'">'+m+'</span>')),'meeting months incorrect');
assert(html.includes('href="#main-content"')&&html.includes('id="main-content"'),'skip navigation missing');
assert(html.includes('id="demo-enquiry"')&&html.includes('e.preventDefault()'),'demo enquiry guard missing');
assert(html.includes('<footer class="footer" aria-label="Wolvesey Chapter website information">'),'semantic Chapter footer missing');
assert(html.includes('Royal Arch Freemasonry in Winchester'),'local SEO heading/title missing');
assert(html.includes('North Central Area')&&!html.includes('South Central Area'),'incorrect Chapter area');
assert(html.includes('family=Manrope:wght@400;500;600;700;800'),'Manrope font stylesheet missing');
assert(html.includes('--site-font:"Manrope"'),'global Manrope token missing');
assert(!/Georgia|Times New Roman|font-family:Inter/.test(html),'old fonts remain');
assert(html.includes('<address>Winchester Masonic Centre'),'Chapter location address missing');
assert(html.includes('January, March, October and December'),'meeting months in body/footer missing');
assert(html.includes('Gallery imagery is illustrative'),'image origin disclosure missing');
assert(html.includes('Names awaiting confirmation'),'placeholder officer names disclosure missing');
assert(!html.includes('Upcoming Meetings'),'unconfirmed upcoming events claim remains');
const openScripts=[...html.matchAll(/<script(?![^>]*src)[^>]*>([\s\S]*?)<\/script>/g)];
assert(openScripts.length===1,'unexpected inline script count');
if(openScripts.length===1){try{new Function(openScripts[0][1]);}catch(error){failures.push('JavaScript parse error: '+error.message);}}
if(failures.length){console.error('Chapter QA FAILED:\n'+failures.map(f=>' - '+f).join('\n'));process.exit(1);}
console.log('Chapter QA passed: IDs, anchors, images, links, demo protection, months and JavaScript.');
