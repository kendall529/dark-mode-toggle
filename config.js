// how to save the preference of someone in local storage

let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');


// check if dark mode is enabled
// if it's enabled, turn it off
// if it's disabled, turn it on

const enableDarkMode = () => {
//   1. add the class darkmode to the body
  document.body.classList.add('darkmode');
//   2. update darkmode in the LocalStorage
  localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
//   1. add the class darkmode to the body
  document.body.classList.remove('darkmode');
//   2. update darkmode in the LocalStorage
  localStorage.setItem('darkMode', null);
};

// this is so the computer remembers the last lighting mode upon launch
if (darkMode === 'enabled') {
  enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
  // console.log("test");
  darkMode = localStorage.getItem('darkMode');
  if (darkMode !== 'enabled') {
    enableDarkMode();
    console.log(darkMode);
  } else {
    disableDarkMode();
    console.log(darkMode);
  }
});