function templateContainer(dish, index) {
    const courseHeader = showOnlyEachCourseOnes(dish.course);
    const veganIcon = dish.isVegan ? 'dish__vegan-icon' : '';

    return `
    ${courseHeader}
    <div class="dish__details-container" id="dish-container-${index}" data-name="${dish.name}">
        <div class="dish__title-and-vegan">
            <h2 class="dish__title structure__main-container" id="dish-title">${dish.name}</h2>
            <div class="${veganIcon} structure__main-container" id="dish-vegan"></div>
        </div>
        <h3 class="dish__description structure__main-container" id="dish-description">${dish.description}</h3>
        <p class="dish__price structure__main-container" id="dish-price">${dish.price.toFixed(2)}€</p>
    </div>
    `;
};

// Comes from basket.js
// adds or remove the order to or from the basket
function addDishToBasket(dish) {
    if (!orderExists(dish)) {
        dish.amount = 1;
        const newDishContainer = `
            <div class="basket__ordered-container">
                <div class="basket__ordered-food">
                    <img class="basket__add-and-remove-food" src="../../assets/icons/minus_food.png" id="basekt-minus">
                    <h3 class="dish__title">${dish.name}</h3>
                    <img class="basket__add-and-remove-food" src="../../assets/icons/plus_food.png" id="basket-plus">
                    <p class="dish__price structure__main-container" id="dish-price">${dish.amount} x ${dish.price.toFixed(2)}€</p>
                </div>
            </div>
        `;

        orderedFoodList.innerHTML += newDishContainer;
    }
    offScreenMenu.classList.add('active');
}
