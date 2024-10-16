function templateContainer(book, index) {
    return `
    <div class="book__container" id="book-container-${index}">
        <h2 class="book__title" id="book-title">${book.name}</h2>
        <div class="divider"></div>
        <img class="book__logo" src="./assets/img/book-logo.png" alt="Logo">
        <div class="divider"></div>
        <div class="book__price-and-like">
            <p id="book-price">Preis: €${book.price.toFixed(2)}</p>
            <p id="book-likes">${book.likes} Likes</p>
            <button class="book_like-button" id="like-button-${index}">
                ${book.liked ? 'Unlike' : 'Like'}
            </button>
        </div>
        <div class="book__details">
            <p id="book-author">Autor: ${book.author}</p>
            <p id="book-genre">Genre: ${book.genre}</p>
            <p id="book-published">Veröffentlicht: ${book.publishedYear}</p>
        </div>
        <div class="divider"></div>
        <h3>Kommentare</h3>
        <ul>
            ${book.comments.map(comment => `<li>${comment}</li>`).join('')}
        </ul>
        <input type="text" id="commit-${index}" name="commit" placeholder="Neuer Kommentar">
    </div>
    `;
};

