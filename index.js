// script.js
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("header");
    const navLinks = document.querySelectorAll(".nav-link");
  
    const makeActive = (link) => {
      navLinks.forEach((navLink) => navLink.classList.remove("active"));
      link.classList.add("active");
    };
  
    const sectionMargin = 200; // Adjust this value to fine-tune the active link change
  
    const observerOptions = {
      root: null,
      rootMargin: `-${sectionMargin}px 0px -${sectionMargin}px 0px`,
      threshold: 0.5,
    };
  
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Array.from(sections).indexOf(entry.target);
          makeActive(navLinks[index]);
        }
      });
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
  
    header.forEach((header) => observer.observe(header));
  });
  