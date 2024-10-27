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
                <p id="book-likes-${index}">${book.likes}</p>
                <div class="${book.liked ? 'book__like' : 'book__unlike'}" 
                     onclick="swapImages(${index})" 
                     id="like-${index}">
                </div>
            </div>
        </div>
        `;
}

function bookComments(book, index) {

    const commentsHTML = book.comments.map(comment => {
        return `
                <table>
                    <tr>
                        <td class="book__tr-right book__comments-name"><strong>[${comment.name}]</strong>:</td>
                        <td class="book__comments-text">${comment.comment}</td>
                    </tr>
                </table>
                `;
    }).join('');

    return `
        <h3>Kommentare</h3>
        <div class="book__comments">
            ${commentsHTML} <!-- Alle Kommentare hier eingefügt -->
        </div>
        <div class="book__add-comment">
            <input type="text" id="commit-text${index}" name="commit" placeholder="New Comment">
            <button id="commit-button-${index}" onclick="addComment(${index})">Submit</button>
        </div>
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
