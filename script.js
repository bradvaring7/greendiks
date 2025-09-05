// Mobile menu toggle open
document.getElementById('menu-toggle').addEventListener('click', function () {
  document.getElementById('mobile-menu').classList.toggle('open');
});

// Mobile menu close button
document.getElementById('close-menu').addEventListener('click', function () {
  document.getElementById('mobile-menu').classList.remove('open');
});

// Mobile dropdown click-to-open
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(drop => {
  drop.querySelector('.dropbtn').addEventListener('click', function (e) {
    // Only run on mobile viewport
    if (window.innerWidth > 768) return;

    e.preventDefault();

    // Close other dropdowns
    dropdowns.forEach(d => {
      if (d !== drop) d.classList.remove('open');
    });

    // Toggle current dropdown
    drop.classList.toggle('open');
  });
});

// Auto-close mobile menu when clicking links inside it
document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.remove('open');
  });
});