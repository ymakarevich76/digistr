const hamburger = document.querySelector('.header__nav-icon');
const nav = document.querySelector('.header__nav');
const btnClose = document.querySelector('.header__nav-close');
const body = document.querySelector('body');


const openMenu = () => {
  body.style.overflow = 'hidden';
  nav.classList.add('header__nav--active');
};

const closeMenu = () => {
  body.style.overflow = '';
  nav.classList.remove('header__nav--active');
}

document.addEventListener('click', e => {
  let target = e.target;
  let its_menu = target == nav || nav.contains(target);
  let its_hamburger = target == hamburger;
  let menu_is_active = nav.classList.contains('header__nav--active');
  let btnClose = document.querySelector('.header__nav-close');

  if (!its_menu && !its_hamburger && menu_is_active) {
    closeMenu();
  } else if (target === btnClose) {
    closeMenu();
  } else if (target === hamburger) {
    openMenu();
  }
})
