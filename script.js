// Smooth scroll on Explore button
document.getElementById("exploreBtn")?.addEventListener("click",()=>{
  document.querySelector(".categories").scrollIntoView({behavior:"smooth"});
});

// Fade-in sections/cards on scroll
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{threshold:0.15});

document.querySelectorAll("section, .card").forEach(el=>{
  el.classList.add("hidden");
  observer.observe(el);
});
