document.addEventListener('DOMContentLoaded', function() {
    // Scroll-based section highlighting
    const sections = document.querySelectorAll("div[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    function updateActiveLink() {
      const scrollPos = window.scrollY + 150;
      sections.forEach((section) => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        if (scrollPos >= top && scrollPos < bottom) {
          navLinks.forEach((link) => link.classList.remove("active-link"));
          const activeLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
          if (activeLink) {
            activeLink.classList.add("active-link");
          }
        }
      });
    }

    document.addEventListener("scroll", updateActiveLink);
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        setTimeout(updateActiveLink, 100);
      });
    });
  });