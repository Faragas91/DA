function templateForPokemonCards(responseJson, content, cardId, textTypeId1, textTypeId2) {
    return content.innerHTML += 
    `
        <div onclick="makeImagesBigger('${cardId}', 'responseJson')"class="card" id="${cardId}">
            ${templateForCardBody(responseJson)}
            ${templateForImageAndType(responseJson, textTypeId1, textTypeId2)}
            ${templateForCardFooter(cardId)}
        </div>
     `;
}

function templateForCardBody(responseJson) {
    return `
        <div class="card-body">
            <p class="card-text text-id">#${responseJson.id}</p>
            <p class="card-text kanit-medium-italic">${responseJson.name.charAt(0).toUpperCase() + responseJson.name.slice(1).toLowerCase()}</p>
        </div>
    `;
}

function templateForImageAndType(responseJson, textTypeId1, textTypeId2) {
    return `
        <div class="display-flex-center direction-row-reverse space-evenly">
            <img src="${responseJson.sprites.other["official-artwork"].front_default}" class="card-img-top">
            <div class="display-flex-center direction-column gap-10">
                <p class="card-text text-type" id="${textTypeId1}">${responseJson.types[0].type.name.charAt(0).toUpperCase() + responseJson.types[0].type.name.slice(1).toLowerCase()}</p>
                    ${
                        responseJson.types[1] 
                        ? `<p class="card-text text-type" id="${textTypeId2}">${responseJson.types[1].type.name.charAt(0).toUpperCase() + responseJson.types[1].type.name.slice(1).toLowerCase()}</p>`
                        : ''
                    }
            </div>
        </div>
    `;
}

function templateForCardFooter(cardId) {
    return `
        <div class="card-footer none">
        <div class="btn-group display-flex-center" role="group" aria-label="Second group">
            <button onclick="selectSection('about')" type="button" class="btn btn-secondary hover-underline-animation">About</button>
            <button onclick="selectSection('status')" type="button" class="btn btn-secondary hover-underline-animation">Status</button>
            <button onclick="selectSection('strong/weak')" type="button" class="btn btn-secondary hover-underline-animation">Strong/Weak</button>
        </div>
        <div class="card-details display-flex-center direction-column" id="details-${cardId}"></div>
        <div class="next-buttons">
            <button onclick="navigateCard('left')" class="next__left-picture"></button>
            <button onclick="navigateCard('right')" class="next__right-picture"></button>
            </div>
        </div>
    `;
}