function templateContainer(dish, index) {
    return `
    <div class="dish__main-container" id="dish-container-${index}">
        <h2 class="dish__title" id="dish-title">${dish.name}</h2>
        <h3 class="dish__description" id="dish-description">${dish.description}</h3>
        <p class="dish__price" id="dish-price">$${dish.price.toFixed(2)}</p>
    </div>
    `;
};