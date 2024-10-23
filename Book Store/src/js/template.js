function templateContainer(book, index) {
    return `
    <div class="book__container" id="book-container-${index}">
        <h2 class="book__title" id="book-title">${book.name}</h2>
        <div class="divider"></div>
        <img class="book__logo" src="./assets/img/book-logo.png" alt="Logo">
        <div class="divider"></div>
        <div class="book__price-and-like">
            <p id="book-price">€${book.price.toFixed(2)}</p>
            <div class="book__likes">
                <p id="book-likes">${book.likes}</p>
                <button id="like-button-${index}">
                    ${book.liked ? 'Unlike' : 'Like'}
                </button>
            </div>
        </div>
        <div class="book__details">
            <table>
                <tr>
                    <td class="book__tr-right">Author:</td>
                    <td>${book.author}</td>
                </tr>
                <tr>
                    <td class="book__tr-right">Genre:</td>
                    <td>${book.genre}</td>
                </tr>
                <tr>
                    <td class="book__tr-right">Veröffentlicht:</td>
                    <td>${book.publishedYear}</td>
                </tr>
            </table>
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

