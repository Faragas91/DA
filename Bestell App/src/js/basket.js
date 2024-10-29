const basket = document.querySelector('.basket');

const offScreenMenu = document.querySelector('.off-screen-menu');

// Set the varibles active or not acitve
basket.addEventListener('click', () => {
    basket.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});