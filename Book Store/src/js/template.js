function bookDetails(book) {
    return `
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
        `;
}

function bookPriceAndLike(book, index) {
    return `
        <div class="book__price-and-like">
            <p id="book-price">€${book.price.toFixed(2)}</p>
            <div class="book__likes">
                <p id="book-likes">${book.likes}</p>
                <div class="${book.liked ? 'book__liked' : 'book__like'}" 
                     onclick="swapImages(${index})" 
                     id="like-${index}">
                </div>
            </div>
        </div>
        `;
}

function bookComments(book, index) {
    return `
        <h3>Kommentare</h3>
        <ul>
            ${book.comments.map(comment => `<li>${comment}</li>`).join('')}
        </ul>
        <input type="text" id="commit-${index}" name="commit" placeholder="Neuer Kommentar">
        `;
}


function templateContainer(book, index) {
    return `
    <div class="book__container" id="book-container-${index}">
        <h2 class="book__title" id="book-title">${book.name}</h2>
        <div class="divider"></div>
        <img class="book__logo" src="./assets/img/book-logo.png" alt="Logo">
        <div class="divider"></div>
        ${bookPriceAndLike(book, index)}
        <div class="divider"></div>
        ${bookDetails(book)}
        <div class="divider"></div>
        ${bookComments(book, index)}
    </div>
    `;
};

