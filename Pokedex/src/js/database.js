let currentIndex = 1;
let pokemonBatchSize = 20;
let pokemonDataBatch = [];

async function fetchPokemonData(startIndex, endIndex) {
    const content = document.getElementById('content');

    for (let index = startIndex; index <= endIndex; index++) {
        let responseJson = await fetchSinglePokemonData(index);
        pokemonDataBatch.push(responseJson);

        const cardId = `card-${responseJson.id}`;
        const textTypeId1 = `textType1-${responseJson.id}`;
        const textTypeId2 = `textTypeId2-${responseJson.id}`;

        content.innerHTML +=
            `
            <div onclick="biggerImage('${cardId}', 'responseJson')"class="card" id="${cardId}">
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
                <div class="card-footer none">
                    <div class="btn-group display-flex-center" role="group" aria-label="Second group">
                        <button onclick="selectSection('about')" type="button" class="btn btn-secondary hover-underline-animation">About</button>
                        <button onclick="selectSection('status')" type="button" class="btn btn-secondary hover-underline-animation">Stats</button>
                        <button onclick="selectSection('strong/weakness')" type="button" class="btn btn-secondary hover-underline-animation">Strong/Weakness</button>
                    </div>
                    <div class="card-details" id="details-${cardId}">
                    </div>
                    <div class="next-buttons">
                        <button onclick="navigateCard('left')" class="next__left-picture"></button>
                        <button onclick="navigateCard('right')" class="next__right-picture"></button>
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

async function fetchAllTypeDetails() {
    try {
        // Schritt 1: Hole die Liste der Typen
        const response = await fetch('https://pokeapi.co/api/v2/type');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const typeList = await response.json();
        const typeDetails = [];

        // Schritt 2: Hole die Details für jeden Typ
        for (const type of typeList.results) {
            const typeResponse = await fetch(type.url);
            if (!typeResponse.ok) {
                throw new Error(`Failed to fetch details for ${type.name}`);
            }

            const typeData = await typeResponse.json();

            // Extrahiere die relevanten Informationen
            const details = {
                name: type.name,
                strengths: typeData.damage_relations.double_damage_to.map(t => t.name),
                weaknesses: typeData.damage_relations.double_damage_from.map(t => t.name),
                immunities: typeData.damage_relations.no_damage_from.map(t => t.name),
            };

            typeDetails.push(details);
        }

        // Rückgabe der gesammelten Daten
        return typeDetails;
    } catch (error) {
        console.error(`Error fetching type details: ${error}`);
    }
}

// Beispielaufruf
fetchAllTypeDetails().then(typeDetails => {
    console.log(typeDetails);
});

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
function biggerImage(cardId) {
    if (currentCardId === cardId || isActive) return;

    const clickedCard = document.getElementById(cardId);
    const cardFooter = clickedCard.querySelector('.card-footer');
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
        // clickedCard.style.marginTop = '100px';
        clickedCard.style.zIndex = 10;
        clickedCard.classList.add('no-hover');
       
        buttonLoad.style.display = 'none'
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'block';
        isActive = true;

        if (cardFooter) {
            cardFooter.classList.remove('none');
        }
    }
}

function closeCard(cardId) {
    const clickedCard = document.getElementById(cardId);
    const cardFooter = clickedCard.querySelector('.card-footer');
    const cardElements = document.querySelectorAll('[id^="card-"]');
    const overlay = document.getElementById('overlay');
    const buttonLoad = document.getElementById('button-load');
 
    for (let i = 0; i < cardElements.length; i++) {
        cardElements[i].style.display = 'flex';
        cardElements[i].style.height = 'auto';
        cardElements[i].style.maxWidth = '300px';
        //cardElements[i].style.marginTop = 'auto';
        cardElements[i].style.zIndex = 1;
        clickedCard.classList.remove('no-hover');
    }   

    if (clickedCard && isActive) {
        buttonLoad.style.display = 'flex';
        overlay.style.display = 'none';


        if (cardFooter) {
            cardFooter.classList.add('none');
        }

        isActive = false;
        currentCardId = null;

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
        selectSection('about');
    }
}


function selectSection(detail) {
    if (!currentCardId) {
        console.error("No active card selected.");
        return;
    }

    const cardDetails = document.querySelector(`#details-${currentCardId}`);

    if (!cardDetails) {
        console.error(`Card details element not found for card ID: ${currentCardId}`);
        return;
    }

    cardDetails.innerHTML = '';

    // Bestimme den Index der aktuellen Karte basierend auf ihrer ID
    const cardIndex = pokemonDataBatch.findIndex(pokemon => `card-${pokemon.id}` === currentCardId);

    if (cardIndex === -1) {
        console.error(`No Pokémon data found for card ID: ${currentCardId}`);
        return;
    }

    const currentPokemon = pokemonDataBatch[cardIndex];

    // Füge Inhalte basierend auf dem ausgewählten Detailtyp hinzu
    if (detail === 'about') {
        cardDetails.innerHTML = `
            <p>Name: ${currentPokemon.name.charAt(0).toUpperCase() + currentPokemon.name.slice(1).toLowerCase()}</p>
            <p>Weight: ${currentPokemon.weight}</p>
            <p>Height: ${currentPokemon.height}</p>
            <p>Abilities: ${currentPokemon.abilities[0].ability.name}</p>
            <p>Abilities (hidden): ${currentPokemon.abilities[1].ability.name}</p>
        `;
    } else if (detail === 'status') {
        cardDetails.innerHTML = `
            <p>HP: ${currentPokemon.stats[0].base_stat}</p>
            <p>Attack: ${currentPokemon.stats[1].base_stat}</p>
            <p>Defense: ${currentPokemon.stats[2].base_stat}</p>
            <p>Special-attack: ${currentPokemon.stats[3].base_stat}</p>
            <p>Special-defense: ${currentPokemon.stats[4].base_stat}</p>
            <p>Speed: ${currentPokemon.stats[5].base_stat}</p>
        `;
    } else if (detail === 'strong/weakness') {

    }   
}


