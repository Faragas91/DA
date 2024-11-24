const orderedFoodList = document.querySelector('.basket__ordered-container');

// Generates the HTML structure for all dishes and inserts it into the main container
function createHtmlStructureForAllDishes() {
    let dishContainer = '';

    for (let i = 0; i < myDishes.length; i++) {
        dishContainer += generateTemplateDishContainer(myDishes[i], i);
    }
    document.querySelector(".dish__main-container").innerHTML = dishContainer;
};

// Function to generate the HTML structure for the Dish container
function generateTemplateDishContainer(dish, index) {
    const courseHeader = showOnlyEachCourseOnes(dish.course);
    const veganIcon = dish.isVegan ? 'dish__vegan-icon' : '';
    return templateForDishDetails(dish, courseHeader, veganIcon, index);
}

// Function to generate the HTML structure for the Basket container
function generateTemplateBasketContainer(dish, index) {
    let totalPrice = dish.amount * dish.price;
    const newDishContainer = templateForOrderedFoodList(dish, index, totalPrice);
    orderedFoodList.insertAdjacentHTML('beforeend', newDishContainer); // With innerHTML the Listener for every Dish will be overwritten, because of this i choose insertAdjacentHTML
}

// Button appears when the size of the Display is under 700px
// With the button the basket will be shown 
// Shows the Sum of the Dishes in the basket
function basketButton() {
    const buttonContainer = document.getElementById("button-container");
    const buttonBasket = document.getElementById("basket-btn");
    const screenBasketRight = document.getElementById("container-right");
    const screenBasketLeft = document.getElementById("container-left");
    const backArrow = document.getElementById("back-arrow");

    buttonBasket.addEventListener("click", () => {
        buttonContainer.classList.toggle('active');
        buttonBasket.classList.toggle('active');
        screenBasketRight.classList.toggle('active');
        screenBasketLeft.classList.toggle('active');
        toggleHeaderAndFooter(buttonBasket, backArrow, true);
    });
}

// Back arrow is only in the Basket and whenn the size of the Display is under 700px
// With the button the basket will be closed and goes back to the homepage
function basketArrow() {
    const backArrow = document.getElementById("back-arrow");
    const buttonBasket = document.getElementById("basket-btn");
    const screenBasketRight = document.getElementById("container-right");
    const screenBasketLeft = document.getElementById("container-left");

    backArrow.addEventListener("click", () => {
        screenBasketRight.classList.toggle('active');
        screenBasketLeft.classList.toggle('active');
        toggleHeaderAndFooter(buttonBasket, backArrow, false);
    });
}

// Function to toggle the header and footer
function toggleHeaderAndFooter(buttonBasket, backArrow, isBasketActive) {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const screenMenu = document.querySelector('.screen-menu');
    const htmlBody = document.documentElement;
    const buttonContainer = document.querySelector('#button-container');

    if (isBasketActive) {
        hideHeaderAndFooter(header, footer, screenMenu, htmlBody, backArrow, buttonContainer);
    } else {
        showHeaderAndFooter(header, footer, screenMenu, htmlBody, backArrow, buttonContainer);
    }
}

function showHeaderAndFooter(header, footer, screenMenu, htmlBody, backArrow, buttonContainer) {
    header.classList.remove('hidden');
    footer.classList.remove('hidden');
    screenMenu.classList.remove('absolute');
    htmlBody.style.height = '100%';
    backArrow.style.display = 'none';
    buttonContainer.classList.remove('hidden');
}

function hideHeaderAndFooter(header, footer, screenMenu, htmlBody, backArrow, buttonContainer) {
    header.classList.add('hidden');
    footer.classList.add('hidden');
    screenMenu.classList.add('absolute');
    htmlBody.style.height = '0';
    backArrow.style.display = 'flex';
    buttonContainer.classList.add('hidden');
}


// Adds an EventListener to the button on the top right side of each Dish in the database.js
function buttonAddDishesToBasket() {
    document.querySelectorAll('.dish__add-button').forEach((dishElement, index) => {
        dishElement.addEventListener('click', () => {
            const dishName = dishElement.getAttribute('data-name');
            const selectedDish = myDishes.find(dish => dish.name === dishName);

            if (selectedDish) {
                addDishToBasket(selectedDish, index);
            }
        });
    });
}


// Executes the Function to start the generated HTML structure
createHtmlStructureForAllDishes();
buttonAddDishesToBasket();
basketButton();
basketArrow()




