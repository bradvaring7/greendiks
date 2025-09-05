document.getElementById('menu-toggle').addEventListener('click', function() {
  document.getElementById('mobile-menu').classList.toggle('open');
});
document.getElementById('close-menu').addEventListener('click', function() {document.getElementByID('mobile-menu').classList.remove('open');
});