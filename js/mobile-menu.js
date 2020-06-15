var logobarToggle = document.querySelector('.logobar__toggle');
var mainNav = document.querySelector('.main-nav');

mainNav.classList.remove('main-nav--nojs');

logobarToggle.addEventListener('click', function() {
  if(mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
  } if(logobarToggle.classList.contains('logobar__toggle--closed')) {
    logobarToggle.classList.remove('logobar__toggle--closed');
    logobarToggle.classList.add('logobar__toggle--opened');
  } else {
    mainNav.classList.add('main-nav--closed');
    mainNav.classList.remove('main-nav--opened');
    logobarToggle.classList.add('logobar__toggle--closed');
    logobarToggle.classList.remove('logobar__toggle--opened')
  }
});
