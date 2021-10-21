// get project boxes
const proj1 = document.querySelector('.proj1');
const proj2 = document.querySelector('.proj2');
const proj3 = document.querySelector('.proj3');
const proj4 = document.querySelector('.proj4');

// get project info boxes to be displayed
const info1 = document.querySelectorAll('#proj1Display');
const info2 = document.querySelectorAll('#proj2Display');
const info3 = document.querySelectorAll('#proj3Display');
const info4 = document.querySelectorAll('#proj4Display');

// put on page when user hovers, remove when mouse leaves 
// wdyn
proj1.addEventListener('mouseover', () => {
  for (let i = 0; i < info1.length; i++) {
    info1[i].classList.add('wdynInfo');
    info1[i].classList.remove('hidden');
  }
});

proj1.addEventListener('mouseout', () => {
  for (let i = 0; i < info1.length; i++) {
    info1[i].classList.remove('wdynInfo');
    info1[i].classList.add('hidden');
  }
});

// mad-libs
proj2.addEventListener('mouseover', () => {
  for (let i = 0; i < info2.length; i++) {
    info2[i].classList.add('madLibsInfo');
    info2[i].classList.remove('hidden');
  }
});

proj2.addEventListener('mouseout', () => {
  for (let i = 0; i < info2.length; i++) {
    info2[i].classList.remove('madLibsInfo');
    info2[i].classList.add('hidden');
  }
});

// planted
proj3.addEventListener('mouseover', () => {
  for (let i = 0; i < info3.length; i++) {
    info3[i].classList.add('plantedInfo');
    info3[i].classList.remove('hidden');
  }
});

proj3.addEventListener('mouseout', () => {
  for (let i = 0; i < info3.length; i++) {
    info3[i].classList.remove('plantedInfo');
    info3[i].classList.add('hidden');
  }
});

// rhymeTime
proj4.addEventListener('mouseover', () => {
  for (let i = 0; i < info4.length; i++) {
    info4[i].classList.add('rhymeTimeInfo');
    info4[i].classList.remove('hidden');
  }
});

proj4.addEventListener('mouseout', () => {
  for (let i = 0; i < info4.length; i++) {
    info4[i].classList.remove('rhymeTimeInfo');
    info4[i].classList.add('hidden');
  }
});