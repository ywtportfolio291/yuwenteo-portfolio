const sr = ScrollReveal({
  distance: '20px',
  duration: 600,
  easing: 'ease-in-out',
  reset: false,
  viewFactor: 0.15,
  once: true
});

// Main hero section
sr.reveal('.featured-text-card', { delay: 100 });
sr.reveal('.featured-subtext', { delay: 300 });
sr.reveal('.featured-image', { delay: 400, origin: 'bottom', distance: '30px' });
sr.reveal('.featured-text-btn', { delay: 500 });

// Projects – fade in one by one (no jump)
sr.reveal('.project-box', {
  opacity: 0,
  duration: 400,
  interval: 200,
  distance: '0px',
  easing: 'ease-in-out'
});


  