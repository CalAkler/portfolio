// DARK MODE TOGGLE

// change to radial toggle
const darkButton = document.querySelector('#darkButton');


const init = () => {
  // check local storage
  darkOn = localStorage.getItem("dark") == "true" ? true : false;
  setDarkMode();
}

const setDarkMode = () => {
  // set local storage
  localStorage.setItem("dark", darkOn ? "true" : "false");

  const body = document.querySelector('body');
  const header = document.querySelector('header');
  const h1 = document.querySelector('h1');  
  const h1Span = document.querySelector('h1 span');

  if (darkOn) {
    body.classList.add('darkMode');
    header.classList.add('darkMode');
    darkButton.classList.add('darkMode');
    h1.classList.add('darkMode');
    h1Span.classList.add('darkMode');

  } else {
    body.classList.remove('darkMode');
    header.classList.remove('darkMode');
    darkButton.classList.remove('darkMode');
    h1.classList.remove('darkMode');
    h1Span.classList.remove('darkMode');
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