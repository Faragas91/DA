function init() {
    showLoadingScreen();
    setTimeout(hideLoadingScreen, 2000);
    loadMorePokemonData();
    fetchPokemonData();
    fetchAllTypeDetails();
}

let currentIndex = 1;

function loadMorePokemonData() {
    let pokemonBatchSize = 20;
    showLoadingScreen();
    setTimeout(hideLoadingScreen, 2000);
    fetchPokemonData(currentIndex, currentIndex + pokemonBatchSize - 1);
    currentIndex += pokemonBatchSize; 
}

function showLoadingScreen() {
    document.getElementById('loading-screen').style.display = 'flex';
    document.getElementById('button-load').style.display = 'none';
    document.getElementById('content').style.display = 'none';
}

function hideLoadingScreen() {
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('button-load').style.display = 'flex';
    document.getElementById('content').style.display = 'flex';
}

function searchPokemon(filter) {
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
        for (let j = 1; j < pokemonElements.length; j++) {
            const pokemon = pokemonElements[j];
            pokemon.style.display = 'block';
        }
    }
}




