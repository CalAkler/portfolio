// DARK MODE TOGGLE

const darkButton = document.querySelector('#darkButton');


const init = () => {
  // check local storage
  darkOn = localStorage.getItem("dark") === "true" ? true : false;
  setDarkMode();
}

const setDarkMode = () => {
  // set local storage
  localStorage.setItem("dark", darkOn ? "true" : "false");

  const body = document.querySelector('body');
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');
  const nav = document.querySelector('.topBar');
  const ham = document.querySelectorAll('.hamLine');
  const mobileNav = document.querySelector('ul.mobileTab');
  const h1 = document.querySelector('h1');
  const h1Span = document.querySelector('h1 span');
  const colorBox = document.querySelector('.colorBox');
  const h3 = document.querySelectorAll('h3');
  const welcomeBox = document.querySelector('.welcomeBox');
  const welcomeInfo = document.querySelector('.welcomeInfo');
  const proj1Display = document.querySelectorAll('#proj1Display');
  const proj2Display = document.querySelectorAll('#proj2Display');
  const proj3Display = document.querySelectorAll('#proj3Display');
  const proj4Display = document.querySelectorAll('#proj4Display');
  const copyright = document.querySelector('.copyright');


  if (darkOn) {
    body.classList.add('darkMode');
    header.classList.add('darkMode');
    footer.classList.add('footerDark');
    nav.classList.add('darkMode');
    mobileNav.classList.add('darkMobileNav');
    darkButton.classList.add('darkMode');
    h1.classList.add('darkMode');
    h1Span.classList.add('darkMode');
    colorBox.classList.add('darkMode');
    welcomeBox.classList.add('darkMode');
    welcomeInfo.classList.add('darkMode');
    copyright.classList.add('copyrightDark');
    // proj1Display.classList.add('darkMode');
    // proj2Display.classList.add('darkMode');
    // proj3Display.classList.add('darkMode');
    // proj4Display.classList.add('darkMode');

    for (let i = 0; i < ham.length; i++) {
      ham[i].classList.add('darkHam');
    }
    for (let i = 0; i < h3.length; i++) {
      h3[i].classList.add('darkMode');
    }
    for (let i = 0; i < proj1Display.length; i++) {
      proj1Display[i].classList.add('proj1DisplayDark');
    }
    for (let i = 0; i < proj2Display.length; i++) {
      proj2Display[i].classList.add('proj2DisplayDark');
    }
    for (let i = 0; i < proj3Display.length; i++) {
      proj3Display[i].classList.add('proj3DisplayDark');
    }
    for (let i = 0; i < proj4Display.length; i++) {
      proj4Display[i].classList.add('proj4DisplayDark');
    }

  } else {
    body.classList.remove('darkMode');
    header.classList.remove('darkMode');
    footer.classList.remove('footerDark');
    nav.classList.remove('darkMode');
    mobileNav.classList.remove('darkMobileNav');
    darkButton.classList.remove('darkMode');
    h1.classList.remove('darkMode');
    h1Span.classList.remove('darkMode');
    colorBox.classList.remove('darkMode');
    welcomeBox.classList.remove('darkMode');
    welcomeInfo.classList.remove('darkMode');
    copyright.classList.remove('copyrightDark');
    // proj1Display.classList.remove('darkMode');
    // proj2Display.classList.remove('darkMode');
    // proj3Display.classList.remove('darkMode');
    // proj4Display.classList.remove('darkMode');

    for (let i = 0; i < ham.length; i++) {
      ham[i].classList.remove('darkHam');
    }
    for (let i = 0; i < h3.length; i++) {
      h3[i].classList.remove('darkMode');
    }
    for (let i = 0; i < proj1Display.length; i++) {
      proj1Display[i].classList.remove('proj1DisplayDark');
    }
    for (let i = 0; i < proj2Display.length; i++) {
      proj2Display[i].classList.remove('proj2DisplayDark');
    }
    for (let i = 0; i < proj3Display.length; i++) {
      proj3Display[i].classList.remove('proj3DisplayDark');
    }
    for (let i = 0; i < proj4Display.length; i++) {
      proj4Display[i].classList.remove('proj4DisplayDark');
    }
  }
}

darkButton.addEventListener('click', () => {
  toggleDark();
});

let darkOn = false;


const toggleDark = () => {
  darkOn = !darkOn;
  setDarkMode();
}

init();