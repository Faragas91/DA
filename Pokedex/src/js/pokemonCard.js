

let pokemonDataBatch = [];
let typeDetails = [];
let isActive = false;
let currentCardId = null;

function makeImagesBigger(cardId) {
    if (currentCardId === cardId || isActive) return;

    const clickedCard = document.getElementById(cardId);
    const cardFooter = clickedCard.querySelector('.card-footer');
    const cardElements = document.querySelectorAll('[id^="card-"]');
    const buttonLoad = document.getElementById('button-load'); 
    const header = document.getElementById('header');

    checkToCloseBiggerImage(cardId);
    checkIfCardIsActive(clickedCard, clickedCard, cardId, cardFooter, cardElements, buttonLoad, header);
    selectSection('about');
}

function checkIfCardIsActive(clickedCard, clickedCard, cardId, cardFooter, cardElements, buttonLoad, header) {
    if (!isActive || currentCardId !== cardId) {
        currentCardId = cardId

        changeDisplayForCardElements(cardElements, cardId)
        styleImageBigger(clickedCard);
        showOverlay(buttonLoad, header);
        addCardFooter(cardFooter)
    }
}

function styleImageBigger(clickedCard) {
    clickedCard.style.maxHeight = '900px';
    clickedCard.style.maxWidth = '350px';
    clickedCard.style.marginTop = '80px';
    clickedCard.style.marginBottom = '80px';
    clickedCard.style.zIndex = 10;
    clickedCard.classList.add('no-hover');
}

function checkToCloseBiggerImage(cardId) {
    if (isActive && currentCardId && currentCardId !== cardId) {
        closeCard(currentCardId);
    }
}

function changeDisplayForCardElements(cardElements, cardId) {
    cardElements.forEach(card => {
        card.style.display = card.id === cardId ? 'block' : 'none';
    });
}

function showOverlay(buttonLoad, header) {
    buttonLoad.style.display = 'none'
    const overlay = document.getElementById('overlay');
    header.style.display = 'none';
    overlay.style.display = 'block';
    isActive = true;
}

function addCardFooter(cardFooter) {
    if (cardFooter) {
        cardFooter.classList.remove('none');
    }
}

function closeCard(cardId) {
    const clickedCard = document.getElementById(cardId);
    const cardFooter = clickedCard.querySelector('.card-footer');
    const cardElements = document.querySelectorAll('[id^="card-"]');
    const overlay = document.getElementById('overlay');
    const buttonLoad = document.getElementById('button-load');
    const header = document.getElementById('header');
 
    for (let i = 0; i < cardElements.length; i++) {
        cardElements[i].style.display = 'flex';
        cardElements[i].style.height = 'auto';
        cardElements[i].style.maxWidth = '300px';
        cardElements[i].style.marginTop = 'auto';
        cardElements[i].style.marginBottom = '10px';
        cardElements[i].style.zIndex = 1;
        clickedCard.classList.remove('no-hover');
    }   

    if (clickedCard && isActive) {
        buttonLoad.style.display = 'flex';
        overlay.style.display = 'none';
        header.style.display = 'flex';


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
        makeImagesBigger(newCard.id);
        updateProgressBars(pokemonDataBatch[newIndex]);
    }
}

function updateProgressBars(currentPokemon, cardIndex) {
    let stats = currentPokemon.stats; 
    const maxStat = 255;
    const statsMap = [
        { id: 'hp', value: stats[0].base_stat },
        { id: 'attack', value: stats[1].base_stat },
        { id: 'defense', value: stats[2].base_stat },
        { id: 'special-attack', value: stats[3].base_stat },
        { id: 'special-defense', value: stats[4].base_stat },
        { id: 'speed', value: stats[5].base_stat },
    ];

    statsMap.forEach(stat => {
        const progressBar = document.getElementById(`${stat.id}-bar-${cardIndex}`);
        const valueSpan = document.getElementById(`${stat.id}-value-${cardIndex}`);

        const percentage = Math.round((stat.value / maxStat) * 100);
        if (progressBar && valueSpan) {
            progressBar.style.width = `${percentage}%`;
            valueSpan.textContent = stat.value;
        }
    });
};


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
    const cardIndex = pokemonDataBatch.findIndex(pokemon => `card-${pokemon.id}` === currentCardId);

    if (cardIndex === -1) {
        console.error(`No Pokémon data found for card ID: ${currentCardId}`);
        return;
    }

    const currentPokemon = pokemonDataBatch[cardIndex];

    // Füge Inhalte basierend auf dem ausgewählten Detailtyp hinzu
    if (detail === 'about') {
    
        if (currentPokemon.abilities.length < 2) {
            cardDetails.innerHTML = `
            <ul class="list-group list-group-flush pd-top-bottom-10 wd-100">
                <li class="list-group-item sour-gummy"><p class="ft-size-24 text-underline">Name:</p> ${currentPokemon.name.charAt(0).toUpperCase() + currentPokemon.name.slice(1).toLowerCase()}</li>
                <li class="list-group-item sour-gummy"><p class="ft-size-24 text-underline">Weight:</p> ${currentPokemon.weight}kg</li>
                <li class="list-group-item sour-gummy"><p class="ft-size-24 text-underline">Height:</p> ${currentPokemon.height}m</li>
                <li class="list-group-item sour-gummy"><p class="ft-size-24 text-underline">Abilities:</p> ${currentPokemon.abilities[0].ability.name}</li>
                <li class="list-group-item sour-gummy"><p class="ft-size-24 text-underline">Abilities (hidden):</p> -----</li>
            </ul>
            `;
        } else {
            cardDetails.innerHTML = `
            <ul class="list-group list-group-flush pd-top-bottom-10 wd-100">
                <li class="list-group-item sour-gummy"><p class="ft-size-24 text-underline">Name:</p> ${currentPokemon.name.charAt(0).toUpperCase() + currentPokemon.name.slice(1).toLowerCase()}</li>
                <li class="list-group-item sour-gummy"><p class="ft-size-24 text-underline">Weight:</p> ${currentPokemon.weight}kg</li>
                <li class="list-group-item sour-gummy"><p class="ft-size-24 text-underline">Height:</p> ${currentPokemon.height}m</li>
                <li class="list-group-item sour-gummy"><p class="ft-size-24 text-underline">Abilities:</p> ${currentPokemon.abilities[0].ability.name}</li>
                <li class="list-group-item sour-gummy"><p class="ft-size-24 text-underline">Abilities (hidden):</p> ${currentPokemon.abilities[1].ability.name}</li>
            </ul>
            `;
        }
    } else if (detail === 'status') {
        cardDetails.innerHTML = `
            <div class="mg-top-bottom-10 wd-100" id="stats-container">
                <p class="sour-gummy ft-size-24 text-underline">HP:</p>	
                <div class="progress">
                    <div id="hp-bar-${cardIndex}" class="progress-bar ft-size-15" role="progressbar" aria-valuemin="0" aria-valuemax="100">
                        <span id="hp-value-${cardIndex}"></span>
                    </div>
                </div>
                <p class="sour-gummy ft-size-24 text-underline">Attack:</p>
                <div class="progress">
                    <div id="attack-bar-${cardIndex}" class="progress-bar ft-size-15" role="progressbar" aria-valuemin="0" aria-valuemax="100">
                        <span id="attack-value-${cardIndex}"></span>
                    </div>
                </div>
                <p class="sour-gummy ft-size-24 text-underline">Defense:</p>
                <div class="progress">
                    <div id="defense-bar-${cardIndex}" class="progress-bar ft-size-15" role="progressbar" aria-valuemin="0" aria-valuemax="100">
                        <span id="defense-value-${cardIndex}"></span>
                    </div>
                </div>
                <p class="sour-gummy ft-size-24 text-underline">Special-attack:</p>
                <div class="progress">
                    <div id="special-attack-bar-${cardIndex}" class="progress-bar ft-size-15" role="progressbar" aria-valuemin="0" aria-valuemax="100">
                        <span id="special-attack-value-${cardIndex}"></span>
                    </div>
                </div>
                <p class="sour-gummy ft-size-24 text-underline">Special-defense:</p>
                <div class="progress">
                    <div id="special-defense-bar-${cardIndex}" class="progress-bar ft-size-15" role="progressbar" aria-valuemin="0" aria-valuemax="100">
                        <span id="special-defense-value-${cardIndex}"></span>
                    </div>
                </div>
                <p class="sour-gummy ft-size-24 text-underline">Speed:</p>
                <div class="progress">
                    <div id="speed-bar-${cardIndex}" class="progress-bar ft-size-15" role="progressbar" aria-valuemin="0" aria-valuemax="100">
                        <span id="speed-value-${cardIndex}"></span>
                    </div>
                </div>
            </div>
        `;
        updateProgressBars(currentPokemon, cardIndex);
    } else if (detail === 'strong/weak') {
        for (let j = 0; j < currentPokemon.types.length; j++) {
            for (let i = 0; i < typeDetails.length; i++) {
                if (typeDetails[i].name === currentPokemon.types[j].type.name) {
                    // Dynamische Generierung für Stärken
                    let strengthsHTML = '';
                    if (typeDetails[i].strengths.length > 0) {
                        // Generiere HTML nur, wenn Immunitäten vorhanden sind
                        strengthsHTML = `
                            <p class="sour-gummy ft-size-20 text-underline">Strengths:</p>
                            <ul class="wrap-center">
                                ${typeDetails[i].strengths.map(type => `<li class="card-text text-type ${type}-bg-type">${type}</li>`).join('')}
                            </ul>
                        `;
                    }
    
                    // Dynamische Generierung für Schwächen
                    let weaknessesHTML = '';
                    if (typeDetails[i].weaknesses.length > 0) {
                        // Generiere HTML nur, wenn Immunitäten vorhanden sind
                        weaknessesHTML = `
                            <p class="sour-gummy ft-size-20 text-underline">Weakness:</p>
                            <ul class="wrap-center">
                                ${typeDetails[i].weaknesses.map(type => `<li class="card-text text-type ${type}-bg-type">${type}</li>`).join('')}
                            </ul>
                        `;
                    }
    
                    // Immunitäten ebenfalls dynamisch generieren
                    let immunitiesHTML = '';
                    if (typeDetails[i].immunities.length > 0) {
                        // Generiere HTML nur, wenn Immunitäten vorhanden sind
                        immunitiesHTML = `
                            <p class="sour-gummy ft-size-20 text-underline">Immunities:</p>
                            <ul class="wrap-center">
                                ${typeDetails[i].immunities.map(type => `<li class="card-text text-type ${type}-bg-type">${type}</li>`).join('')}
                            </ul>
                        `;
                    }
                    
                    // Füge den Immunities-Block nur hinzu, wenn immunitiesHTML nicht leer ist
                    cardDetails.innerHTML += `
                        <p class="type-headliner card-text text-type ${currentPokemon.types[j].type.name}-bg-type" > ${currentPokemon.types[j].type.name.charAt(0).toUpperCase() + currentPokemon.types[j].type.name.slice(1).toLowerCase()}</p>
                        ${strengthsHTML}
                        ${weaknessesHTML}
                        ${immunitiesHTML}
                        <div class="divider"></div>
                    `;
                }
            }
        }
    }
    
}

