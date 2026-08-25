document.addEventListener("DOMContentLoaded",()=>{
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-page]").forEach(a=>{
    if(a.getAttribute("href")===path) a.classList.add("active");
  });
  document.querySelectorAll("form.demo-form").forEach(form=>{
    form.addEventListener("submit",e=>{
      e.preventDefault();
      const n=form.querySelector(".notice");
      if(n){n.style.display="block"; n.textContent="Demo: formulár funguje lokálne. Pre reálne odosielanie je potrebný backend alebo e-mailová služba."}
    });
  });
  const mob=document.querySelector(".mobile");
  if(mob) mob.addEventListener("click",()=>{
    const menu=document.querySelector(".menu");
    const actions=document.querySelector(".actions");
    if(menu){
      const open=menu.style.display==="flex";
      menu.style.display=open?"none":"flex";
      menu.style.position="absolute";menu.style.top="68px";menu.style.left="0";menu.style.right="0";
      menu.style.padding="20px";menu.style.background="#090c0f";menu.style.flexDirection="column";
    }
    if(actions){actions.style.display="none"}
  })
});
