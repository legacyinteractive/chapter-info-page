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
assert(['JAN','MAR','OCT','DEC'].every(m=>html.includes('class="month">—<small>'+m+'</small>')),'meeting months incorrect');
assert(html.includes('href="#main-content"')&&html.includes('id="main-content"'),'skip navigation missing');
assert(html.includes('id="demo-enquiry"')&&html.includes('e.preventDefault()'),'demo enquiry guard missing');
const openScripts=[...html.matchAll(/<script(?![^>]*src)[^>]*>([\s\S]*?)<\/script>/g)];
assert(openScripts.length===1,'unexpected inline script count');
if(openScripts.length===1){try{new Function(openScripts[0][1]);}catch(error){failures.push('JavaScript parse error: '+error.message);}}
if(failures.length){console.error('Chapter QA FAILED:\n'+failures.map(f=>' - '+f).join('\n'));process.exit(1);}
console.log('Chapter QA passed: IDs, anchors, images, links, demo protection, months and JavaScript.');
