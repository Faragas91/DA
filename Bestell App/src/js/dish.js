// Filter function for dishes by course
let displayCourse = {
    starter: false,
    main: false,
    dessert: false
};

// Comes from template.js
// Displays the dish types only once (starter, main course, desserts)
function showOnlyEachCourseOnes(course) {
    if (!displayCourse[course]) {
        displayCourse[course] = true;
        const courseId = `${course}-header`;
        const courseImage = `${course}-image`;
        return  `<h2 class="dish__course-header" id=${courseId}>${course.charAt(0).toUpperCase() + course.slice(1)}</h2>
                <img class="dish__course-image" id=${courseImage} src="./assets/img/${courseImage}.jpg" alt="${courseImage}">      
                `;
    }
    return '';
}

// Comes from basket.js
// adds or remove the order to or from the basket
function addDishToBasket(dish, index) {
    if (!orderExists(dish)) { 
        dish.amount = 1;
        templateBasketContainer(dish, index);
        document.getElementById(`basket-minus-${index}`).addEventListener('click', () => updateDishAmount(dish, -1));
        document.getElementById(`basket-plus-${index}`).addEventListener('click', () => updateDishAmount(dish, 1));
        document.getElementById(`basket-delete-${index}`).addEventListener('click', () => deleteDishFromBasket(dish));
        calculateTotalSum();
    } else {
        updateDishAmount(dish, 0)
    }
}