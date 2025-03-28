// scrollRevealInit.js

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 1000,
  reset: false,
  viewFactor: 0.2,
  once: true
});

sr.reveal('.featured-text-card', { delay: 100 });

sr.reveal('.featured-subtext', { delay: 350 });


sr.reveal('.featured-image', { delay: 350, origin: 'bottom', distance: '40px' });

sr.reveal('.featured-text-btn', { delay: 500 });

sr.reveal('.project-box', { interval: 50 });

  