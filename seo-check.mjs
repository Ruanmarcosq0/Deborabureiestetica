import {readFile,access} from 'node:fs/promises';
import assert from 'node:assert/strict';
const read=p=>readFile('dist/'+p,'utf8');
const home=await read('index.html');
const config=JSON.parse(await readFile('site.config.json','utf8'));
const origin=config.siteUrl;
const images=[...new Set([...home.matchAll(/<img[^>]+src="([^"]+)"/g)].map(m=>m[1]))];
const sitemap=await read('sitemap-images.xml');
assert.equal((sitemap.match(/<image:loc>/g)||[]).length,images.length);
for(const path of images){assert(sitemap.includes(origin+path));await access('dist'+path);}
assert((await read('robots.txt')).includes('Sitemap: '+origin+'/sitemap-images.xml'));
for(const [file,path] of [['index.html','/'],['privacidade.html','/privacidade']]){
 const html=await read(file);
 assert(html.includes('rel="canonical" href="'+origin+path+'"'));
 assert(html.includes('index,follow,max-image-preview:large,max-snippet:-1'));
 assert.equal((html.match(/<h1\b/g)||[]).length,1);
}
const missing=await read('404.html');assert(missing.includes('noindex,follow'));assert(!missing.includes('rel="canonical"'));
const schema=JSON.parse(home.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
const ids=new Set(schema.map(s=>s['@id']));
const walk=value=>{if(!value||typeof value!=='object')return;if(value['@id']&&Object.keys(value).length===1)assert(ids.has(value['@id']),'Referência de entidade inválida');for(const v of Object.values(value))walk(v);};walk(schema);
const faq=schema.find(s=>s['@type']==='FAQPage');for(const item of faq.mainEntity){assert(home.includes(item.name));assert(home.includes(item.acceptedAnswer.text));}
assert(!home.includes('AggregateRating'));assert.equal(schema.find(s=>s['@type']==='Person').telephone,'+'+config.whatsapp);
console.log('SEO aprovado: canonical, indexação, '+images.length+' imagens, mapa de imagens, entidades conectadas e FAQ visível.');
