// Initialize AOS
AOS.init();


// MOBILE MENU
  // toggle hamburger button to X button when clicked, and vice versa
  // when clicked, display mobile nav menu on page

const mobileMenu = document.querySelector('.mobileMenu');
const navIcon = document.querySelector('.navIcon');
  
const toggleMenu = () => {
  if (mobileMenu.classList.contains('expandedMenu')) {
    mobileMenu.classList.remove('expandedMenu');
    mobileMenu.classList.add('mobileOnly');
  } else {
    mobileMenu.classList.add('expandedMenu');
    mobileMenu.classList.remove('mobileOnly');
  }
}

navIcon.addEventListener('click', () => {
  navIcon.classList.toggle('open');
  toggleMenu();
});




// HIDDEN NAV
const nav = document.querySelector('.topBar');
let previousScrollPosition = window.pageYOffset;

window.addEventListener('scroll', () => {
  let currentScrollPosition = window.pageYOffset;
  if (previousScrollPosition < currentScrollPosition) {
    nav.classList.add('hideNav');
  } else {
    nav.classList.remove('hideNav');
  }

  prevScrollPosition = currentScrollPosition;
});

