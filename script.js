///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const section = document.querySelectorAll('.section');
const sectionId = document.getElementById('#section--1');
const allBtn = document.getElementsByTagName('button');
const header = document.querySelector('.header');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section_1 = document.getElementById('section--1');
const nav__links = document.querySelector('.nav__links');
const h1 = document.querySelector('h1');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//create and insert element
const message = document.createElement('div');
message.classList.add('cookie-message');
//  message.textContent="We use cookies for improve functionality and analytics."
message.innerHTML =
  'We use cookies for improve functionality and analytics.<button class="btn btn--close-cookie">Got it.</button>';

header.prepend(message);
// document.documentElement.style.setProperty('--color-primary', "orangered")

//learn more button scrolling
btnScrollTo.addEventListener('click', e => {
  // const s1coords = section_1.getBoundingClientRect();
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());
  // console.log('current scroll X/Y', window.pageXOffset, window.pageYOffset);

  // console.log(
  //   'height/width of current viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  //scrolling
  // window.scrollTo(
  //   //current position + current scroll
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior:'smooth',
  // });
  section_1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////////
//page navigation
// document.querySelectorAll('.nav__link').forEach(el =>
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);

//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   })
// );

//1.add event listener to common parent element
//2.determine what element originated the event

nav__links.addEventListener('click', function (e) {
  //matching strategy
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

btnScrollTo.addEventListener('click', e => {
  section_1.scrollIntoView({ behavior: 'smooth' });
});

//tabbed component
const operationTabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const operationContent = document.querySelectorAll('.operations__content');

//event delegation
tabContainer.addEventListener('click', function (e) {
  const clickedTab = e.target.closest('.operations__tab');

  //guard clause
  if (!clickedTab) return;
  //
  operationTabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  clickedTab.classList.add('operations__tab--active');

  operationContent.forEach(content =>
    content.classList.remove('operations__content--active')
  );
  //activate tab content area
  document
    .querySelector(`.operations__content--${clickedTab.dataset.tab}`)
    .classList.add('operations__content--active');
});

//going downWords:child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.children);
// h1.firstElementChild.style.color="white";
// console.log(h1.parentElement);
// console.log(h1.parentNode);

// h1.closest('h1').style.background= 'var(--color-secondary)'

//going sideways
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// // console.log(h1.parentElement.children);
// const arr = [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });

// const addAlert = e => {
//   alert('mouse entered');
// };

// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', addAlert);

// setTimeout(() => {
//   h1.removeEventListener('mouseenter', addAlert);
// }, 1000 * 3);

// h1.onmouseenter = e => {
//   alert('mouse entered');
// };

//events, bubbling , capturing, propagation

//rgb(255,255,255);
// const randomInt = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const randomColor = () => {
//   return `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// };

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('link', e.target, e.currentTarget);
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('container', e.target, e.currentTarget);
// });
// document.querySelector('.nav ').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('nav', e.target, e.currentTarget);
// });
