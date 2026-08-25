
document.addEventListener("DOMContentLoaded",()=>{
  const current=(location.pathname.split("/").pop()||"index.html").toLowerCase();

  document.querySelectorAll(".menu a").forEach(a=>{
    const href=(a.getAttribute("href")||"").split("?")[0].toLowerCase();
    if(href===current) a.classList.add("active");
  });

  document.querySelectorAll("form.demo-form").forEach(form=>{
    form.addEventListener("submit",e=>{
      e.preventDefault();
      const n=form.querySelector(".notice");
      if(n){
        n.style.display="block";
        n.textContent="Demo-Modus: Für echtes Senden wird später ein Backend verbunden.";
      }
    });
  });

  const forceHeroRepaint = () => {
    const hero = document.querySelector(".hero");
    if(!hero) return;

    // Force layout calculation.
    void hero.offsetHeight;

    // One-frame visibility toggle forces Chrome to repaint the hero
    // exactly like switching tabs/windows does.
    hero.style.visibility = "hidden";

    requestAnimationFrame(()=>{
      requestAnimationFrame(()=>{
        hero.style.visibility = "visible";
        hero.style.opacity = "0.999";

        void hero.offsetHeight;

        requestAnimationFrame(()=>{
          hero.style.opacity = "1";
        });
      });
    });
  };

  const car = document.querySelector(".hero-car");
  if(car){
    if(car.complete){
      if(car.decode){
        car.decode().catch(()=>{}).finally(forceHeroRepaint);
      }else{
        forceHeroRepaint();
      }
    }else{
      car.addEventListener("load", forceHeroRepaint, {once:true});
      car.addEventListener("error", forceHeroRepaint, {once:true});
    }
  }else{
    forceHeroRepaint();
  }

  // Backup repaint after all page resources are loaded.
  window.addEventListener("load", ()=>{
    setTimeout(forceHeroRepaint, 30);
  }, {once:true});

  // Also handle browser back/forward cache.
  window.addEventListener("pageshow", (e)=>{
    if(e.persisted) setTimeout(forceHeroRepaint, 0);
  });
});
