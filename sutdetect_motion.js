document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("div[id]"); // <== updated selector
  const navLinks = document.querySelectorAll(".nav-link");

  function updateActiveLink() {
    const scrollPos = window.scrollY + 150; // Adjust for sticky nav
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

  // Run on scroll
  document.addEventListener("scroll", updateActiveLink);

  // Run on click (with slight delay)
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      setTimeout(updateActiveLink, 100);
    });
  });

  // Reveal Answer Button Logic
  const revealButton = document.getElementById("reveal-button");
  const answerText = document.getElementById("answer-text");

  if (revealButton && answerText) {
    revealButton.addEventListener("click", () => {
      answerText.classList.toggle("hidden");
    });
  }
});
