const hamburger = document.querySelector('.hamburger');

hamburger?.addEventListener('click', mobileMenu);

function mobileMenu() {
  alert("hi");
  hamburger?.classList.toggle('active');
}