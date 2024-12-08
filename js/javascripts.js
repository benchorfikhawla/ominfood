document.addEventListener("DOMContentLoaded", () => {
  const btnNavEl = document.querySelector(".btn-mobile-nav");
  const headerEl = document.querySelector("header");

  // Toggle navigation
  if (btnNavEl) {
    btnNavEl.addEventListener("click", () => {
      headerEl.classList.toggle("nav-open");
    });
  }

  const navLinks = document.querySelectorAll("a:link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const url = link.getAttribute("href");

      // Scroll to top
      if (url === "#") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }

      // Scroll to a section
      if (url !== "#" && url.startsWith("#")) {
        const sectionEl = document.querySelector(url);
        if (sectionEl) {
          sectionEl.scrollIntoView({ behavior: "smooth" });
        }
      }

      // Close navigation for specific links
      if (link.classList.contains("main-nav-link")) {
        const headerEl = document.querySelector("header");
        headerEl.classList.toggle("nav-open");
      }
    });
  });
   
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    // Sticky navigation
    const sectionHeroEl = document.querySelector(".section-hero");
  
    const obs = new IntersectionObserver(
      function (entries) {
        const ent = entries[0];
        console.log(ent);
        if (ent.isIntersecting === false) {
          document.body.classList.add("sticky");
        } else {
          document.body.classList.remove("sticky");
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "-80px", 
      }
    );
  
    if (sectionHeroEl) {
      obs.observe(sectionHeroEl);
    }
  });
  
