import toggleModule from '../modules/toggle-class-module.js';

const anchors = document.querySelectorAll('a[href*="#"]');
const navPosition = document.querySelector('.header__navline');

for (let anchor of anchors) {
  anchor.addEventListener('click', function(event) {
    event.preventDefault();
    const sectionID = anchor.getAttribute('href');
    document.querySelector('' + sectionID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}

window.onscroll = function() {
  toggleModule.toggleClass(navPosition, 'bg-dark');
};

