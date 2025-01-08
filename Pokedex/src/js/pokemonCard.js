let pokemonDataBatch = [];
let typeDetails = [];
let isActive = false;
let currentCardId = null;

//////////////////////////////////////////
// Section for to make the Image bigger //
//////////////////////////////////////////
function makeImagesBigger(cardId) {
    if (currentCardId === cardId || isActive) return;

    const clickedCard = document.getElementById(cardId);
    const cardFooter = clickedCard.querySelector('.card-footer');
    const cardElements = document.querySelectorAll('[id^="card-"]');
    const buttonLoad = document.getElementById('button-load'); 
    const header = document.getElementById('header');
    const nextButton = clickedCard.querySelector('.next-buttons');

    checkToCloseBiggerImage(cardId);
    checkIfCardIsActive(clickedCard, cardId, cardFooter, cardElements, buttonLoad, header, nextButton);
    generateCardDetails('about');
}

function checkIfCardIsActive(clickedCard, cardId, cardFooter, cardElements, buttonLoad, header, nextButton) {
    if (!isActive || currentCardId !== cardId) {
        currentCardId = cardId

        changeDisplayForCardElements(cardElements, cardId, clickedCard)
        styleImageBigger(clickedCard, nextButton);
        showOverlay(buttonLoad, header);
        addCardFooter(cardFooter)
    }
}

function styleImageBigger(clickedCard, nextButton) {
    clickedCard.classList.add('clicked-card');
    clickedCard.classList.add('no-hover');
    addNextButtons(nextButton)
}

function checkToCloseBiggerImage(cardId) {
    if (isActive && currentCardId && currentCardId !== cardId) {
        closeCard(currentCardId);
    }
}

function changeDisplayForCardElements(cardElements, cardId, clickedCard) {
    cardElements.forEach(card => {
        card.style.display = card.id === cardId ? 'block' : 'none';
    });
    clickedCard.classList.add('clicked-card');
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

function addNextButtons(nextButton) {
    if (nextButton) {
        nextButton.classList.remove('none');
    }
}

////////////////////////////////////////////
// Section for to close the bigger Image ///
////////////////////////////////////////////

function closeCard(cardId) {
    const clickedCard = document.getElementById(cardId);
    const cardFooter = clickedCard.querySelector('.card-footer');
    const cardElements = document.querySelectorAll('[id^="card-"]');
    const overlay = document.getElementById('overlay');
    const buttonLoad = document.getElementById('button-load');
    const header = document.getElementById('header');
    const nextButton = clickedCard.querySelector('.next-buttons');
    
    for (let i = 0; i < cardElements.length; i++) {
        styleImageToNormal(cardElements[i], clickedCard, nextButton)
    }   
    changeLayoutToNormal(clickedCard, buttonLoad, overlay, header, cardFooter)
}

function styleImageToNormal(cardElements, clickedCard, nextButton) {
    clickedCard.classList.remove('no-hover');
    cardElements.style.display = 'flex';
    cardElements.style.minHeight = 'auto';
    cardElements.style.maxWidth = '300px';
    cardElements.style.marginTop = 'auto';
    cardElements.style.marginBottom = '10px';
    cardElements.style.zIndex = 1;
    removeNextButtons(nextButton)
}

function changeLayoutToNormal(clickedCard, buttonLoad, overlay, header, cardFooter) {
    if (clickedCard && isActive) {
        buttonLoad.style.display = 'flex';
        overlay.style.display = 'none';
        header.style.display = 'flex';
        removeFooter(cardFooter);
        clickedCard.classList.remove('clicked-card');
        isActive = false;
        currentCardId = null;
    }
}

function removeFooter(cardFooter) {
    if (cardFooter) {
        cardFooter.classList.add('none');
    }
}

function removeNextButtons(nextButton) {
    if (nextButton) {
        nextButton.classList.add('none');
    }
}

///////////////////////////////////////////
// Section for to navigate between cards //
///////////////////////////////////////////
function navigateCard(direction) {
    if (!currentCardId) return;

    const cardElements = Array.from(document.querySelectorAll('[id^="card-"]'));
    const currentIndex = cardElements.findIndex(card => card.id === currentCardId);

    let newIndex = chooseDirection(direction, currentIndex, cardElements)
    setNewCard(cardElements, newIndex)
}

function chooseDirection(direction, currentIndex, cardElements) {
    if (direction === 'left') {
        leftOrRight = currentIndex > 0 ? currentIndex - 1 : cardElements.length - 1;
    } else if (direction === 'right') {
        leftOrRight = currentIndex < cardElements.length - 1 ? currentIndex + 1 : 0;
    }
    return leftOrRight;
}

function setNewCard(cardElements, newIndex) {
    const newCard = cardElements[newIndex];
    if (newCard) {
        closeCard(currentCardId);
        makeImagesBigger(newCard.id);
        updateProgressBars(pokemonDataBatch[newIndex]);
    }
}

////////////////////////////////////////////////////////
// Section for select the Details for the Pokemoncard //
////////////////////////////////////////////////////////

function generateCardDetails(detail) {
    const cardDetails = document.querySelector(`#details-${currentCardId}`);
    cardDetails.innerHTML = '';
    const cardIndex = pokemonDataBatch.findIndex(pokemon => `card-${pokemon.id}` === currentCardId);
    const currentPokemon = pokemonDataBatch[cardIndex];
    selectSection(detail, currentPokemon, cardDetails, cardIndex)
}

function selectSection(detail, currentPokemon, cardDetails, cardIndex) {
    if (detail === 'about') {
        templateForAboutSection(currentPokemon, cardDetails)
    } else if (detail === 'status') {
        templateForStatusSection(cardIndex, cardDetails)
        updateProgressBars(currentPokemon, cardIndex);
    } else if (detail === 'strong/weak') {
        strongWeakSection(currentPokemon, cardDetails)
    }
}

//////////////////////////////////////////////////////////
// Section for updating the progress bars in the status //
//////////////////////////////////////////////////////////

function updateProgressBars(currentPokemon, cardIndex) {
    const statsMap = statsOfTheCurrentPokemon(currentPokemon);
    setProgressBar(statsMap, cardIndex);
};

function statsOfTheCurrentPokemon(currentPokemon) {
    return [
        { id: 'hp', value: currentPokemon.stats[0].base_stat },
        { id: 'attack', value: currentPokemon.stats[1].base_stat },
        { id: 'defense', value: currentPokemon.stats[2].base_stat },
        { id: 'special-attack', value: currentPokemon.stats[3].base_stat },
        { id: 'special-defense', value: currentPokemon.stats[4].base_stat },
        { id: 'speed', value: currentPokemon.stats[5].base_stat },
    ];
}

function setProgressBar(statsMap, cardIndex) {
    const maxStat = 255;

    statsMap.forEach(stat => {
        const progressBar = document.getElementById(`${stat.id}-bar-${cardIndex}`);
        const valueSpan = document.getElementById(`${stat.id}-value-${cardIndex}`);
        const percentage = Math.round((stat.value / maxStat) * 100);
        if (progressBar && valueSpan) {
            progressBar.style.width = `${percentage}%`;
            valueSpan.textContent = stat.value;
        }
    });
}

////////////////////////////////////////////////////////////////////////
// Section for the update the Strengths/Weakness for the Pokemontypes //
////////////////////////////////////////////////////////////////////////

function strongWeakSection(currentPokemon, cardDetails) {
    for (let j = 0; j < currentPokemon.types.length; j++) {
        for (let i = 0; i < typeDetails.length; i++) {
            if (typeDetails[i].name === currentPokemon.types[j].type.name) {
                const { strengthsHTML, weaknessesHTML, immunitiesHTML } = templateForStrongWeakSection(typeDetails[i]);
                generateTypeHTML(cardDetails, currentPokemon.types[j].type.name, strengthsHTML, weaknessesHTML, immunitiesHTML)
            }
        }
    }
}

