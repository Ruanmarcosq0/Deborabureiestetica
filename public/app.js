const button=document.querySelector('.menu-button');
const nav=document.querySelector('#navigation');
button?.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));button.textContent=open?'Fechar':'Menu';nav.classList.toggle('open',open)});
nav?.addEventListener('click',e=>{if(e.target.closest('a')){nav.classList.remove('open');button.setAttribute('aria-expanded','false');button.textContent='Menu'}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav?.classList.remove('open');if(button?.getAttribute('aria-expanded')==='true'){button.setAttribute('aria-expanded','false');button.textContent='Menu';button.focus()}}});
// Eventos locais para integração futura, sem pixels, cookies ou envio de dados.
document.querySelectorAll('[data-contact]').forEach(a=>a.addEventListener('click',()=>document.dispatchEvent(new CustomEvent('clinic:contact',{detail:{placement:a.dataset.contact}}))));
