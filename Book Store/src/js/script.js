// Add all necessary information to the template.js to create the containers
const bookContainers = books.map((book, index) => templateContainer(book, index));
document.querySelector(".book__main-container").innerHTML = bookContainers.join("");


function swapImages(index) {
    const likeButton = document.getElementById(`like-${index}`);
    
    // Toggle between 'like' and 'liked' states
    if (books[index].liked) {
        likeButton.classList.remove('book__liked');
        likeButton.classList.add('book__like');
    } else {
        likeButton.classList.remove('book__like');
        likeButton.classList.add('book__liked');
    }

    // Update the 'liked' status in the books array
    books[index].liked = !books[index].liked;
}


