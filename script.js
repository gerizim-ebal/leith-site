// ── Footer year ──────────────────────────────
document.getElementById('year').textContent = new Date().getFullYear();

// ── Mobile nav toggle ─────────────────────────
const toggle = document.querySelector('.nav-toggle');
const header = document.querySelector('.site-header');

toggle.addEventListener('click', () => {
  const isOpen = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', !isOpen);
  header.classList.toggle('nav-open', !isOpen);
});

// Close nav when a link is clicked
document.querySelectorAll('.nav-list a').forEach(link => {
  link.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', 'false');
    header.classList.remove('nav-open');
  });
});
