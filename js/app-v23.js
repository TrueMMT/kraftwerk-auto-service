
document.addEventListener("DOMContentLoaded",()=>{
  const current=(location.pathname.split("/").pop()||"index.html").toLowerCase();
  document.querySelectorAll(".menu a").forEach(a=>{
    if((a.getAttribute("href")||"").toLowerCase()===current) a.classList.add("active");
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
});

document.addEventListener("DOMContentLoaded",()=>{
  document.querySelectorAll('a[href$=".html"], a[href="index.html"]').forEach(a=>{
    try {
      const u = new URL(a.getAttribute("href"), location.href);
      if (u.origin === location.origin) {
        u.searchParams.set("build","23");
        a.href = u.pathname.split("/").pop() + u.search;
      }
    } catch(e) {}
  });
});
