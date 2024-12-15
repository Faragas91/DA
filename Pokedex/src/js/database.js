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
            <div class="card" id="${cardId}">
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