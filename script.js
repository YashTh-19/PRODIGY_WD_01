// Toggle menu for mobile
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Navbar scroll behavior
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Active nav link highlight
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(link => {
  link.addEventListener('click', () => {
    navItems.forEach(item => item.classList.remove('active'));
    link.classList.add('active');
  });
});
