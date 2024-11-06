// comes from database.js
// templateContainer function creates a separate container for each dish in database.js
function templateContainer(dish, index) {
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

// Comes from basket.js
// adds or remove the order to or from the basket
function addDishToBasket(dish, index) {
    // If the dish is not in the shopping cart, it will only be added once. Multiple additions are not possible.
    if (!orderExists(dish)) { 
        dish.amount = 1;

        // Create a new container for the selected dish
        const newDishContainer = `
                <div class="basket__ordered-food" data-name="${dish.name}">
                    <h3 class="dish__title">${dish.name}</h3>
                    <div class="basket__ordered-details data-name="${dish.name}">
                        <img class="basket__add-and-remove-food" src="../../assets/icons/minus_food.png" id="basket-minus-${index}" data-dish-name="${dish.name}">
                        <p class="dish__price structure__main-container">${dish.amount} x ${dish.price.toFixed(2)}€</p>
                        <img class="basket__add-and-remove-food" src="../../assets/icons/plus_food.png" id="basket-plus-${index}" data-dish-name="${dish.name}">
                        <p class="dish__sum structure__main-container">Summe</p>
                        <img class="basket__add-and-remove-food" src="../../assets/icons/delete_dish.png" id="basket-delete-${index}" data-dish-name="${dish.name}">
                    </div>
                </div>
        `;

        // Adds the new dish to the container 
        // With innerHTML the Listener for every Dish will be overwritten, because of this i choose insertAdjacentHTML
        orderedFoodList.insertAdjacentHTML('beforeend', newDishContainer);

        
        // the number of dishes is changed using the plus and minus buttons
        document.getElementById(`basket-minus-${index}`).addEventListener('click', () => updateDishAmount(dish, -1));
        document.getElementById(`basket-plus-${index}`).addEventListener('click', () => updateDishAmount(dish, 1));
        document.getElementById(`basket-delete-${index}`).addEventListener('click', () => deleteDishFromBasket(dish));

    }

    // The basket will be activate and open it
    offScreenMenu.classList.add('active');
}
