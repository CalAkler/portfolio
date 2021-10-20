// ripple effect when hover/focus/click on project title box (CSS)

AOS.init();


// MOBILE MENU



// HIDDE NAV
const nav = document.querySelector('.desktopNav');
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


// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// }

