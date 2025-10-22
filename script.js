// Mobile Menu Toggle + Nav effects
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navbar = document.getElementById('navbar');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    const list = navMenu.querySelector('ul');
    const open = list.classList.toggle('show');
    hamburger.setAttribute('aria-expanded', String(open));
  });

  // Close on link click (mobile)
  navMenu.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      const list = navMenu.querySelector('ul');
      if (list.classList.contains('show')) {
        list.classList.remove('show');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    }
  });
}

// Sticky nav shadow on scroll
const onScroll = () => {
  if (!navbar) return;
  if (window.scrollY > 4) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
};
window.addEventListener('scroll', onScroll);
onScroll();

// Scroll-reveal animations
const revealables = document.querySelectorAll('.fade-in, .fade-up');
if (revealables.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  revealables.forEach((el) => io.observe(el));
}
