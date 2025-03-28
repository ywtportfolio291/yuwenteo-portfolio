// scrollRevealInit.js

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 1000,
  reset: false,
  viewFactor: 0.2,
  once: true
});

// ✅ Featured container – slight delay is okay
sr.reveal('.featured-text-card', { delay: 200 });

// ✅ Subtext – faster reveal
sr.reveal('.featured-subtext', { delay: 400 });

// ✅ Floating images – no long wait
sr.reveal('.featured-image', { delay: 300, origin: 'bottom', distance: '40px' });

// ✅ Scroll button – small touch, quick
sr.reveal('.featured-text-btn', { delay: 500 });

// ✅ Projects – reveal on scroll ASAP
sr.reveal('.project-box', { interval: 150 });

  