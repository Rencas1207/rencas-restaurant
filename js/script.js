/****************************************************************************************/
/*** ANIMATION AOS ***/
/****************************************************************************************/
window.addEventListener('load', function () {
  // Page Loader
  document.querySelector('.page-loader').classList.add('fade-out');
  setTimeout(function () {
    document.querySelector('.page-loader').style.display = 'none';
  }, 600);
  // Animation on scroll
  AOS.init();
});
/****************************************************************************************/
/*** TOGGLE NAVBAR ***/
/****************************************************************************************/
const navToggler = document.querySelector('.nav-toggler');

navToggler.addEventListener('click', toggleNav);

function toggleNav() {
  navToggler.classList.toggle('active');
  document.querySelector('.nav').classList.toggle('open');
}

// Close nav when clicking on a nav item
document.addEventListener('click', (e) => {
  if (e.target.closest('.nav-item')) {
    toggleNav();
  }
});

/****************************************************************************************/
/*** STICKY HEADER ***/
/****************************************************************************************/
window.addEventListener('scroll', function () {
  //   console.log(this.pageYOffset);
  if (this.pageYOffset > 60) {
    document.querySelector('.header').classList.add('sticky');
  } else {
    document.querySelector('.header').classList.remove('sticky');
  }
});

/****************************************************************************************/
/*** MENU TABS ***/
/****************************************************************************************/
const menuTabs = document.querySelector('.menu-tabs');
menuTabs.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('menu-tab-item') &&
    !e.target.classList.contains('active')
  ) {
    const target = e.target.getAttribute('data-target');
    menuTabs.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');

    const menuSection = document.querySelector('.menu-section');
    menuSection
      .querySelector('.menu-tab-content.active')
      .classList.remove('active');
    menuSection.querySelector(target).classList.add('active');
    AOS.init();
  }
});
