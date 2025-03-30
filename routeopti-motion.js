// main.js

document.addEventListener('DOMContentLoaded', function () {
    // === Scroll-Based Section Highlighting ===
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
  
    // === Carousel with Dynamic Captions ===
    const carouselWrapper = document.querySelector('#carousel-slides > div');
    const caption = document.getElementById('carousel-caption');
    const captions = [
      "General Route Dashboard — shows each route's performance to higher management. Confidential items have been censored.",
      "General Route Analysis — includes slicers to adjust machine counts and composition. Forecasted metrics are also provided.",
    ];
  
    if (carouselWrapper && caption) {
      const totalSlides = carouselWrapper.children.length;
      let index = 0;
  
      function updateSlide() {
        carouselWrapper.style.transform = `translateX(-${index * 100}%)`;
        caption.textContent = captions[index];
      }
  
      window.nextSlide = function () {
        index = (index + 1) % totalSlides;
        updateSlide();
      };
  
      window.prevSlide = function () {
        index = (index - 1 + totalSlides) % totalSlides;
        updateSlide();
      };
  
      // Set initial caption
      updateSlide();
    }
  });
  