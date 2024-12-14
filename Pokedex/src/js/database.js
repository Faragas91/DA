async function fetchPokemonData() {
    let pokemonlength = 21; 
    const content = document.getElementById('content');

    for (let index = 1; index < pokemonlength; index++) {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let responseJson = await response.json();
        console.log(responseJson);

        
        const cardId = `card-${responseJson.id}`;
        const textTypeId = `textType-${responseJson.id}`;
        content.innerHTML += 
            `
            <div class="card" id="${cardId}">
                <div class="card-body">
                    <p class="card-text text-id">#${responseJson.id}</p>
                    <p class="card-text kanit-medium-italic">${responseJson.name}</p>
                </div>
                <div class="display-flex-center direction-row-reverse">
                    <img src="${responseJson.sprites.other["official-artwork"].front_default}" class="card-img-top" alt="Bisa">
                    <p class="card-text text-type" id="${textTypeId}">${responseJson.types[0].type.name}</p>
                </div>
            </div>
        `

        const card = document.getElementById(cardId);
        const textType = document.getElementById(textTypeId);
        const typeName = responseJson.types[0].type.name;
        card.classList.add(typeName);
        textType.classList.add(typeName);
    }
}
