const pictures = [
    'cat.jpg',
    // './assets/img/chameleon.jpg',
    // './assets/img/cows.jpg',
    // './assets/img/dogs.jpg',
    // './assets/img/ducks.jpg',
    // './assets/img/elephant.jpg',
    // './assets/img/fox.jpg',
    // './assets/img/giraffes.jpg',
    // './assets/img/pigs.jpg',
    // './assets/img/rhino.jpg',
    // './assets/img/tigers.jpg',
    // './assets/img/wolves.jpg',
];

function render() {
    const container = document.getElementById('container').innerHTML
    let images = "";
    for (let i = 0; i < pictures.length; i++) {
        images += `<img src="${pictures[i]}">`;
    }
    container.innerHTML = images;
}