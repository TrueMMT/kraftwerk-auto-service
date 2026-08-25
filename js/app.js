document.addEventListener("DOMContentLoaded",()=>{
  const current=(location.pathname.split("/").pop()||"index.html").toLowerCase();
  document.querySelectorAll(".menu a").forEach(a=>{
    if((a.getAttribute("href")||"").toLowerCase()===current) a.classList.add("active");
  });
  document.querySelectorAll("form.demo-form").forEach(form=>{
    form.addEventListener("submit",e=>{
      e.preventDefault();
      const n=form.querySelector(".notice");
      if(n){n.style.display="block";n.textContent="Demo-Modus: Das Formular ist vorbereitet. Für echtes Senden wird später ein Backend oder Form-Service verbunden."}
    });
  });
});


// v11 lightweight animated sparks (CSS/DOM only)
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  if (!hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const layer = document.createElement("div");
  layer.className = "spark-layer";
  for (let i = 0; i < 24; i++) {
    const s = document.createElement("i");
    s.style.left = (Math.random()*100) + "%";
    s.style.top = (20 + Math.random()*75) + "%";
    s.style.animationDelay = (-Math.random()*7) + "s";
    s.style.animationDuration = (3.8 + Math.random()*4.8) + "s";
    s.style.opacity = (.25 + Math.random()*.7);
    layer.appendChild(s);
  }
  hero.appendChild(layer);
});


// v15: force hero visible immediately on first paint / bfcache restore
(function(){
  const forceHeroVisible = () => {
    const hero = document.querySelector(".hero");
    if (!hero) return;
    hero.style.visibility = "visible";
    hero.style.opacity = "1";
    const grid = hero.querySelector(".hero-grid");
    if (grid) {
      grid.style.visibility = "visible";
      grid.style.opacity = "1";
      grid.style.transform = "none";
    }
    const media = hero.querySelector(".hero-media");
    if (media) {
      media.style.visibility = "visible";
      media.style.opacity = "1";
      media.style.transform = "none";
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", forceHeroVisible, {once:true});
  } else {
    forceHeroVisible();
  }

  window.addEventListener("pageshow", forceHeroVisible);
})();
