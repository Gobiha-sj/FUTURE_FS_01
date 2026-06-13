// Smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Form validation
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Message sent successfully! (This can be connected to backend later)');
});
