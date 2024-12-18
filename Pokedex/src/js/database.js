let currentIndex = 1;
let pokemonBatchSize = 20;

async function fetchPokemonData(startIndex, endIndex) {
    const content = document.getElementById('content');

    for (let index = startIndex; index <= endIndex; index++) {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let responseJson = await response.json();
        const cardId = `card-${responseJson.id}`;
        const textTypeId1 = `textType1-${responseJson.id}`;
        const textTypeId2 = `textType2-${responseJson.id}`;
        content.innerHTML += 
            `
            <div onclick="biggerImage('${cardId}' , 'responseJson')"class="card" id="${cardId}">
                <div class="card-body">
                    <p class="card-text text-id">#${responseJson.id}</p>
                    <p class="card-text kanit-medium-italic">${responseJson.name.charAt(0).toUpperCase() + responseJson.name.slice(1).toLowerCase()}</p>
                </div>
                <div class="display-flex-center direction-row-reverse">
                    <img src="${responseJson.sprites.other["official-artwork"].front_default}" class="card-img-top" alt="Bisa">
                    <div class="display-flex-center direction-column">
                        <p class="card-text text-type" id="${textTypeId1}">${responseJson.types[0].type.name.charAt(0).toUpperCase() + responseJson.types[0].type.name.slice(1).toLowerCase()}</p>
                        ${
                            responseJson.types[1] 
                            ? `<p class="card-text text-type" id="${textTypeId2}">${responseJson.types[1].type.name.charAt(0).toUpperCase() + responseJson.types[1].type.name.slice(1).toLowerCase()}</p>`
                            : ''
                        }
                    </div>
                </div>
            </div>
        `
        const card = document.getElementById(cardId);
        const textType1 = document.getElementById(textTypeId1);
        const typeName1 = responseJson.types[0].type.name;
        card.classList.add(typeName1);
        textType1.classList.add(`${typeName1}-bg-type`);
        
        if (responseJson.types[1]) {
            const textType2 = document.getElementById(textTypeId2);
            const typeName2 = responseJson.types[1].type.name;
            textType2.classList.add(`${typeName2}-bg-type`);

        }
    }

}

function loadMorePokemonData() {
    fetchPokemonData(currentIndex, currentIndex + pokemonBatchSize - 1);
    currentIndex += pokemonBatchSize; 
}

function filterPokemon(filter) {
    filter = filter.toLowerCase(); 
    const content = document.getElementById('content');
    const pokemonElements = content.children;

    if (filter.length > 2) {
        for (let i = 0; i < pokemonElements.length; i++) {
            const pokemon = pokemonElements[i];
            const name = pokemon.innerText.toLowerCase();
            pokemon.style.display = name.includes(filter) ? 'block' : 'none';
        }
    } else {
        for (let j = 0; j < pokemonElements.length; j++) {
            const pokemon = pokemonElements[j];
            pokemon.style.display = 'block';
        }
    }
}

let isActive = false;
let currentCardId = null;
function biggerImage(cardId, responseJson) {

    const clickedCard = document.getElementById(cardId);
    const cardElements = document.querySelectorAll('[id^="card-"]');
    const buttonLoad = document.getElementById('button-load');

    if (isActive && currentCardId & currentCardId !== cardId) {
        closeCard(currentCardId);
    }

    if (!isActive || currentCardId !== cardId) {
        currentCardId = cardId
        for (let i = 0; i < cardElements.length; i++) {
            if (clickedCard != cardElements[i]) {
                cardElements[i].style.display = 'none';
            }
        }
    }
    
    if (clickedCard) {
        buttonLoad.style.display = 'none'
        clickedCard.style.maxHeight = '800px';
        clickedCard.style.maxWidth = '400px';
        clickedCard.style.marginTop = '100px';
        clickedCard.style.zIndex = 10;
        clickedCard.classList.add('no-hover');
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'block';
        isActive = true;

        if (!clickedCard.querySelector('.card-footer')) {
            const extraInfoDiv = document.createElement('div');
            extraInfoDiv.classList.add('card-footer');

            extraInfoDiv.innerHTML = `
                <ul class="nav nav-tabs card-header-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Active</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
                <div class="next-buttons">
                    <button onclick="leftImage()" class="next__left-picture"></button>
                    <button onclick="rightImage()" class="next__right-picture"></button>
                </div>

                `;

                clickedCard.appendChild(extraInfoDiv);
        }
    }
}

function closeCard(cardId) {
    const clickedCard = document.getElementById(cardId);
    const cardElements = document.querySelectorAll('[id^="card-"]');
    const overlay = document.getElementById('overlay');
    const buttonLoad = document.getElementById('button-load');

    for (let i = 0; i < cardElements.length; i++) {
        cardElements[i].style.display = 'flex';
    }

    if (clickedCard && isActive) {
        
        buttonLoad.style.display = 'none'
        clickedCard.style.height = 'auto';
        clickedCard.style.maxWidth = '300px';
        clickedCard.style.marginTop = 'auto';
        clickedCard.style.zIndex = 1;
        overlay.style.display = 'none';
        isActive = false;
        currentCardId = null;

        // Extra-Info entfernen
        const extraInfoDiv = clickedCard.querySelector('.card-footer');
        if (extraInfoDiv) {
            extraInfoDiv.remove();
        }
    }
}

function leftImage() {

}

function rightImage() {

}