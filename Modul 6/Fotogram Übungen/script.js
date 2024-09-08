let randomTitles = [
    "Sunset",
    "Ocean View",
    "Lighthouse",
    "Sunrise",
    "Forest",
    "City View",
    "Night Sky",
]

let randomTitlesSecond = [
    "Mountain View",
    "Lake",
    "Forest",
    "Glowing Forest",
    "Sunrise",
    "Lake",
]



let randomDescriptions = [
    "A beautiful sunset over the ocean",
    "A vibrant lake with a crystal-clear waterfall",
    "A serene lighthouse at dusk",
    "A mesmerizing sunrise over the horizon",
    "A tranquil forest filled with soft moss and wildflowers",
    "A stunning view of the city from the lighthouse",
    "A breathtaking night sky with stars and galaxies",
];

let randomDescriptionsSecond = [
    "A stunning sunset over the mountains",
    "A serene lake with a calm waterfall",
    "A peaceful forest filled with lush greenery and flowers",
    "A magical forest filled with glowing trees and sparkling flowers",
    "A stunning sunrise over the horizon",
    "A serene lake with a calm waterfall",

]

function renderFilterd (index) {
    if (index == 1) {
        // arrTitles = randomTitles
        // arrDescriptions = randomDescriptions
        render(randomTitles, randomDescriptions)
    }
    if (index == 2) {
        // arrTitles = randomTitlesSecond
        // arrDescriptions = randomDescriptionsSecond
        render(randomTitlesSecond, randomDescriptionsSecond)

    }
}



function render(arrTitles, arrDescriptions) {
    let contentRef = document.getElementById("content");
    contentRef.innerHTML = "";
    for (let index = 0; index < arrTitles.length; index++) {
        contentRef.innerHTML += getNodeHmlt(index, arrTitles, arrDescriptions)
    }
}


function getNodeHmlt(i, arrTitles, arrDescriptions) {
    return `    <div class="single_element">
                    <h2> 
                        ${arrTitles[i]}
                    </h2>
                    <p> 
                        ${arrDescriptions[i]}
                    </p>
                </div>`
}