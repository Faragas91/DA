// Add all necessary information to the template.js to create the containers
const bookContainers = books.map((book, index) => templateContainer(book, index));
document.querySelector(".book__main-container").innerHTML = bookContainers.join("");


