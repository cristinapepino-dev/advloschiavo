const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>{nav.classList.toggle('scrolled',window.scrollY>40)});
function toggleMenu(){document.getElementById('navlinks').classList.toggle('open')}
function closeMenu(){document.getElementById('navlinks').classList.remove('open')}
const io=new IntersectionObserver((entries)=>{
  entries.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('in'),i*70);io.unobserve(e.target)}})
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));