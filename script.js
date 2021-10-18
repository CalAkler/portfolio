// ripple effect when hover/focus/click on project title box (CSS)
// central box reveals details for each project -- change class from hidden to visible



// MOBILE MENU


// DARK MODE TOGGLE

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
  

  if (darkOn) {
    body.classList.add('darkMode');
    header.classList.add('darkMode');
    darkButton.classList.add('darkMode');
  } else {
    body.classList.remove('darkMode');
    header.classList.remove('darkMode');
    darkButton.classList.remove('darkMode');
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



// function setTheme(){
//   //Save to localStorage
//   //It's commented out because it doesn't work in Stack Overflow snippet
//   // localStorage.setItem("dark", darkOn ? "true" : "false");
//   // if(darkOn){
//   //   document.body.setAttribute("theme", "dark");
//   //   togButton.innerHTML = "Turn off dark mode.";
//   // }
//   else{
//     document.body.setAttribute("theme", "light");
//     togButton.innerHTML = "Turn on dark mode.";
//   }
// }

// function toggle(){
//   darkOn = !darkOn;
//   setTheme();
// }

// darkButton.addEventListener("click", toggle);


