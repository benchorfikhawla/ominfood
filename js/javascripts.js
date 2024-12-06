
 document.addEventListener("DOMContentLoaded", () => {
    const btnNavEl = document.querySelector(".btn-mobile-nav");
    const headerEl = document.querySelector("header");
    if (btnNavEl) {
      btnNavEl.addEventListener("click", () => {
        headerEl.classList.toggle("nav-open");
      });
    } 
  });
  