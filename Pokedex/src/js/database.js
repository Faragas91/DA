let currentIndex = 1;
let pokemonBatchSize = 20;
let pokemonDetails =[];

async function fetchPokemonData(startIndex, endIndex) {
    const content = document.getElementById('content');
    let pokemonDataBatch = [];

    for (let index = startIndex; index <= endIndex; index++) {
        let responseJson = await fetchSinglePokemonData(index);
        pokemonDataBatch.push(responseJson);

        const cardId = `card-${responseJson.id}`;
        const textTypeId1 = `textType1-${responseJson.id}`;
        const textTypeId2 = `textTypeId2-${responseJson.id}`;

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
        `;

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
    console.log(pokemonDataBatch);
    return pokemonDataBatch;
}

async function fetchSinglePokemonData(pokemonId) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    let responseJson = await response.json();
    return responseJson;
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
    if (currentCardId === cardId || isActive) return;

    const clickedCard = document.getElementById(cardId);
    const cardElements = document.querySelectorAll('[id^="card-"]');
    const buttonLoad = document.getElementById('button-load');

    if (isActive && currentCardId && currentCardId !== cardId) {
        closeCard(currentCardId);
    }

    if (!isActive || currentCardId !== cardId) {
        currentCardId = cardId

        cardElements.forEach(card => {
            card.style.display = card.id === cardId ? 'block' : 'none';
        });
        
        clickedCard.style.maxHeight = '800px';
        clickedCard.style.maxWidth = '400px';
        clickedCard.style.marginTop = '100px';
        clickedCard.style.zIndex = 10;
        clickedCard.classList.add('no-hover');
        
        buttonLoad.style.display = 'none'
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'block';
        isActive = true;

        if (!clickedCard.querySelector('.card-footer')) {
            const extraInfoDiv = document.createElement('div');
            extraInfoDiv.classList.add('card-footer');

            extraInfoDiv.innerHTML = `
                <div class="btn-group display-flex-center" role="group" aria-label="Second group">
                    <button onclick="cardDetails('${responseJson}')" type="button" class="btn btn-secondary hover-underline-animation">About</button>
                    <button onclick="cardDetails('${responseJson}')" type="button" class="btn btn-secondary hover-underline-animation">Stats</button>
                    <button onclick="cardDetails('${responseJson}')" type="button" class="btn btn-secondary hover-underline-animation">Attack</button>
                </div>
                <div class="card-body id="card-details">
                </div>
                <div class="next-buttons">
                    <button onclick="navigateCard('left')" class="next__left-picture"></button>
                    <button onclick="navigateCard('right')" class="next__right-picture"></button>
                </div>

                `;

                clickedCard.appendChild(extraInfoDiv);
        }
        isActive = true;
    }
}

function closeCard(cardId) {
    const clickedCard = document.getElementById(cardId);
    const cardElements = document.querySelectorAll('[id^="card-"]');
    const overlay = document.getElementById('overlay');
    const buttonLoad = document.getElementById('button-load');

    for (let i = 0; i < cardElements.length; i++) {
        cardElements[i].style.display = 'flex';
        cardElements[i].style.height = 'auto';
        cardElements[i].style.maxWidth = '300px';
        cardElements[i].style.marginTop = 'auto';
        cardElements[i].style.zIndex = 1;
        clickedCard.classList.remove('no-hover');
    }

    if (clickedCard && isActive) {
        buttonLoad.style.display = 'flex';
        overlay.style.display = 'none';
        isActive = false;
        currentCardId = null;

        const extraInfoDiv = clickedCard.querySelector('.card-footer');
        if (extraInfoDiv) {
            extraInfoDiv.remove();
        }
    }
}

function navigateCard(direction) {
    if (!currentCardId) return;

    const cardElements = Array.from(document.querySelectorAll('[id^="card-"]'));
    const currentIndex = cardElements.findIndex(card => card.id === currentCardId);

    let newIndex;
    if (direction === 'left') {
        newIndex = currentIndex > 0 ? currentIndex - 1 : cardElements.length - 1;
    } else if (direction === 'right') {
        newIndex = currentIndex < cardElements.length - 1 ? currentIndex + 1 : 0; 
    }

    const newCard = cardElements[newIndex];
    if (newCard) {
        closeCard(currentCardId);
        biggerImage(newCard.id);         
    }
}

async function cardDetails(pokemonId) {
    let pokemon = await fetchSinglePokemonData(pokemonId);
    console.log(pokemon);
}

