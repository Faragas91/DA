const hamMenu = document.querySelector('.header__hamburger__menu');

const offScreenMenu = document.querySelector('.header__off__screen__menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});
