function templateContainer(dish, index) {

    const courseHeader = showOnlyEachCourseOnes(dish.course);
    const veganIcon = dish.isVegan ? 'dish__vegan-icon' : '';

    return `
    ${courseHeader}
    <div class="dish__details-container" id="dish-container-${index}">
        <div class="dish__title-and-vegan">
            <h2 class="dish__title structure__main-container" id="dish-title">${dish.name}</h2>
            <div class="${veganIcon} structure__main-container" id="dish-vegan"></div>
        </div>
        <h3 class="dish__description structure__main-container" id="dish-description">${dish.description}</h3>
        <p class="dish__price structure__main-container" id="dish-price">${dish.price.toFixed(2)}€</p>
    </div>
    `;
};