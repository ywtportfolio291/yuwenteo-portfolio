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
sr.reveal('.featured-text-card', { delay: 300 });

// ✅ Subtext – faster reveal
sr.reveal('.featured-subtext', { delay: 500 });

// ✅ Floating images – no long wait
sr.reveal('.featured-image', { delay: 300, origin: 'bottom', distance: '40px' });

// ✅ Scroll button – small touch, quick
sr.reveal('.featured-text-btn', { delay: 600 });

// ✅ Projects – reveal on scroll ASAP
// ✅ Projects – appear together quickly
sr.reveal('.project-box', {
  origin: 'bottom',
  duration: 300,
  distance: '30px'
});


  