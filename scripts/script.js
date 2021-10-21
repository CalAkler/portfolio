// Initialize AOS
AOS.init();


// MOBILE MENU
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobileMenu');
const closeIcon = document.querySelector('.fa-times');
const hamIcon = document.querySelector('.fa-bars');

// toggle hamburger button to X button when clicked, and vice versa
  // when clicked, display mobile nav menu on page
  
const toggleMenu = () => {
  if (mobileMenu.classList.contains('expandedMenu')) {
    mobileMenu.classList.remove('expandedMenu');
    mobileMenu.classList.add('mobileOnly');
    closeIcon.style.display = 'none';
    hamIcon.style.display = 'block';
  } else {
    mobileMenu.classList.add('expandedMenu');
    mobileMenu.classList.remove('mobileOnly');
    closeIcon.style.display = 'block';
    hamIcon.style.display = 'none';
  }
}

// Listen for click event on hamburger menu button
hamburger.addEventListener('click', toggleMenu);



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

