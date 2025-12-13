/**
 * BarberQueue Landing Page - Minimal JavaScript
 * Only essential interactions, no frameworks
 */

document.addEventListener('DOMContentLoaded', () => {
  initFeatureTabs();
  initSmoothScroll();
});

/**
 * Feature section tab switching
 */
function initFeatureTabs() {
  const tabs = document.querySelectorAll('.features__tab');
  const panels = document.querySelectorAll('.features__panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.dataset.tab;

      // Update tab active state
      tabs.forEach(t => t.classList.remove('features__tab--active'));
      tab.classList.add('features__tab--active');

      // Update panel visibility
      panels.forEach(panel => {
        panel.classList.remove('features__panel--active');
        if (panel.id === `panel-${targetId}`) {
          panel.classList.add('features__panel--active');
        }
      });
    });
  });
}

/**
 * Smooth scroll for anchor links
 * (Fallback for browsers without native smooth scroll)
 */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}
