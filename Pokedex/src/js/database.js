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


function biggerImage(cardId, responseJson) {
    const content = document.getElementById('content');
    const clickedCard = document.getElementById(cardId);
    const cardElements = document.querySelectorAll('[id^="card-"]');
    for (let i = 0; i < cardElements.length; i++) {
        if (clickedCard != cardElements[i]) {
            cardElements[i].style.display = 'none';
        }
    }
    
    if (clickedCard) {
        content.style.height ='100vh';
        clickedCard.style.transform = 'scale(1.5)';
        clickedCard.style.margin = '0 auto';
        clickedCard.style.zIndex = 10;
        overlay.style.display = 'block';

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
                <div display-flex-center>
                    <button class="btn btn-primary>left</button>
                    <button class="btn btn-primary>right</button>
                </div>

                `;

                clickedCard.appendChild(extraInfoDiv);
        }
    }
}