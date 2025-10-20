// script.js — small interactions: mobile-friendly menu toggle and simple lazy reveal for gallery
document.addEventListener('DOMContentLoaded', function (){
  // No heavy JS required — placeholder for future interaction.
  // If you later add a mobile menu, this is where to wire it.
  const imgs = document.querySelectorAll('.masonry img, .hero-collage img');
  // Simple IntersectionObserver to add a subtle class when images enter view
  if('IntersectionObserver' in window){
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.classList.add('in-view');
          obs.unobserve(e.target);
        }
      });
    }, {rootMargin: '0px 0px -10% 0px'});
    imgs.forEach(img=>obs.observe(img));
  }
});