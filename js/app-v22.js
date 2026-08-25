
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
