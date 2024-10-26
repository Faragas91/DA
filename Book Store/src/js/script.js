// Add all necessary information to the template.js to create the containers
const bookContainers = books.map((book, index) => templateContainer(book, index));
document.querySelector(".book__main-container").innerHTML = bookContainers.join("");


function swapImages(index) {
    const likeButton = document.getElementById(`like-${index}`);
    
    // Toggle between 'unlike' and 'liked' states
    if (books[index].liked) {
        likeButton.classList.remove('book__like');
        likeButton.classList.add('book__unlike');
    } else {
        likeButton.classList.remove('book__unlike');
        likeButton.classList.add('book__like');
    }

    changeLikesNumber(index);
}

function changeLikesNumber(index) {
    const likeCurrentNumber = document.getElementById(`book-likes-${index}`);
    let likeText = likeCurrentNumber.textContent;

    likeNumber = parseInt(likeText, 10);

    if (books[index].liked) {
        likeNumber--;
        likeNumber = likeNumber.toString();
        likeCurrentNumber.textContent = likeNumber;
    } else {
        likeNumber++;
        likeNumber = likeNumber.toString();
        likeCurrentNumber.textContent = likeNumber;
    }
    // Update the 'liked' status in the books array
    books[index].liked = !books[index].liked;
}

