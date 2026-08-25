
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
});
