// Filter function for dishes by course
let displayCourse = {
    starter: false,
    main: false,
    dessert: false
};

function showOnlyEachCourseOnes(course) {

    if (!displayCourse[course]) {
        displayCourse[course] = true;
        return  `<h2 class="dish__course-header">${course.charAt(0).toUpperCase() + course.slice(1)}</h2>`;
    }
    return '';
}