async function fetchPokemonData() {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    let responseJson = await response.json();
    console.log(responseJson);
    return responseJson;
}

async function getTemplateCards(responseJson) {
    const content = document.getElementById('content');
    content.innerHTML = 
        `
        <div class="row">
            <div class="col-md-3 col-sm-6 mb-4">
                <div class="card">
                    <div class="card-body bg-black wd-100 display-flex-center">
                        <p class="card-text">${responseJson.results[0]}</p>
                        <p class="card-text">${responseJson.results[0].name}</p>
                    </div>
                    <img src="${responseJson.results[0].url.sprites.other.official-artwork.front_default}" class="card-img-top pd-20" alt="Bisa">
                    <div class="bg-black wd-100 display-flex-center">
                        <img src="${responseJson.results[0].url.types[0].type.name}" class="card-img-bottom pd-20" alt="Grass Type">
                    </div>
                </div>
            </div>
        </div>`
    }