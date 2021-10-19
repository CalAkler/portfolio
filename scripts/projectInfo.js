// get project boxes
const proj1 = document.querySelector('.proj1');
const proj2 = document.querySelector('.proj2');
const proj3 = document.querySelector('.proj3');
const proj4 = document.querySelector('.proj4');

// get project info boxes to be displayed
const info1 = document.querySelector('#proj1Display');
const info2 = document.querySelector('#proj2Display');
const info3 = document.querySelector('#proj3Display');
const info4 = document.querySelector('#proj4Display');

// put on page when user hovers 
// wdyn
proj1.addEventListener('mouseover', () => {
  info1.classList.add('wdynInfo');
  info1.classList.remove('hidden');
});

proj1.addEventListener('mouseout', () => {
  info1.classList.remove('wdynInfo');
  info1.classList.add('hidden');
});

// mad-libs
proj2.addEventListener('mouseover', () => {
  info2.classList.add('madLibsInfo');
  info2.classList.remove('hidden');
});

proj2.addEventListener('mouseout', () => {
  info2.classList.remove('madLibsInfo');
  info2.classList.add('hidden');
});

// planted
proj3.addEventListener('mouseover', () => {
  info3.classList.add('plantedInfo');
  info3.classList.remove('hidden');
});

proj3.addEventListener('mouseout', () => {
  info3.classList.remove('plantedInfo');
  info3.classList.add('hidden');
});

// rhymeTime
proj4.addEventListener('mouseover', () => {
  info4.classList.add('rhymeTimeInfo');
  info4.classList.remove('hidden');
});

proj4.addEventListener('mouseout', () => {
  info4.classList.remove('rhymeTimeInfo');
  info4.classList.add('hidden');
});