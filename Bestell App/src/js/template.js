// comes from start-script.js
// templateContainer function creates a separate container for each dish in database.js
function templateDishContainer(dish, index) {
    // Function is in the dish.js
    const courseHeader = showOnlyEachCourseOnes(dish.course);

    // Show the vegan symbol when in the database.js isVegan is set to true
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

// 
function templateBasketContainer(dish, index) {
        let totalPrice = dish.amount * dish.price;
        // Create a new container for the selected dish
        const newDishContainer = `
                <div class="basket__ordered-food" data-name="${dish.name}">
                    <h3 class="dish__title basket__title">${dish.name}</h3>
                    <div class="basket__ordered-details data-name="${dish.name}">
                        <img class="basket__add-and-remove-food" src="./assets/icons/minus_food.png" id="basket-minus-${index}" data-dish-name="${dish.name}">
                        <p class="dish__price basket__price">${dish.amount}x</p>
                        <img class="basket__add-and-remove-food" src="./assets/icons/plus_food.png" id="basket-plus-${index}" data-dish-name="${dish.name}">
                        <p class="dish__sum basket__sum" id="basket-totalPrice-${index}">${totalPrice.toFixed(2)}€</p>
                        <img class="basket__add-and-remove-food" src="./assets/icons/delete_dish.png" id="basket-delete-${index}" data-dish-name="${dish.name}">
                    </div>
                </div>
        `;
        // Adds the new dish to the container 
        // With innerHTML the Listener for every Dish will be overwritten, because of this i choose insertAdjacentHTML
        orderedFoodList.insertAdjacentHTML('beforeend', newDishContainer);
}

// Template for the empty basket message
// Function is in the basket.js in use
function templateBasketCostsEmpty(basketCosts) {
    basketCosts.innerHTML = `
    <div class="basket-empty-message">
        <img src="./assets/icons/menu_bag.png" alt="Hungry Icon" class="hungry-icon">
        <p>Your shopping cart is empty.</p>
        <p>Please add some dishes.</p>
        <p>We know you're hungry 🤤</p>
    </div>`;
    basketCosts.style.fontSize = '36px';
}

// Template for the shown basket costs
// Function is in the basket.js in use
function templateBasketCostsShown(basketCosts, totalSum) {
    basketCosts.style.fontSize = '16px';
    basketCosts.innerHTML = `
        <p class="basket__total-subsum">Subtotal: <span id="subtotal-sum">${totalSum.toFixed(2)}€</span></p>
        <p class="basket__delivery-costs">Delivery: <span id="delivery-costs">3.99€</span></p>
        <p class="basket__total-sum">Total: <span id="total-sum">${(totalSum + 3.99).toFixed(2)}€</span></p>
        <a href="./src/html/payment.html" class="basket__pay-btn" id="pay-button">Payment</a>
    `;
}