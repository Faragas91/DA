const pictures = [
    '/assets/img/cat.jpg',
    '/assets/img/chameleon.jpg',
    '/assets/img/cows.jpg',
    '/assets/img/dogs.jpg',
    '/assets/img/ducks.jpg',
    '/assets/img/elephant.jpg',
    '/assets/img/fox.jpg',
    '/assets/img/giraffes.jpg',
    '/assets/img/pigs.jpg',
    '/assets/img/rhino.jpg',
    '/assets/img/tigers.jpg',
    '/assets/img/wolves.jpg',
];

function render() {
    let container = document.getElementById('container')
    let images = "";
    for (let i = 0; i < pictures.length; i++) {
        images += `<img class="pictures" src="${pictures[i]}">`;
    }
    container.innerHTML = images;
}