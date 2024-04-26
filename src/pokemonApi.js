
async function getPokemonData() {
    let pokemonApiUrlBase = "https://pokeapi.co/api/v2/pokemon/";

    let randomPokemonNumber = Math.floor(Math.random() * 1025) + 1;

    let fullApiUrl = pokemonApiUrlBase + randomPokemonNumber;

    let response = await fetch(fullApiUrl);
    let responseData = await response.json();
    let result = responseData;

    // 'response' variable could be named anything. (represents the data received) 
    // let promiseResponse = await fetch(fullApiUrl).then(response => {
    //     return response.json();
    // });

    // result = promiseResponse;

    return result;
}


async function putDataOnPage(dataToDsiplay) {
    document.getElementsByClassName('pokemonName')[0].textContent = dataToDsiplay.name;
    
}


// Button calls this
async function getAndDisplayPokemoneData() {
    let data = await getPokemonData();
    console.log(data);

    putDataOnPage(data);
}


document.getElementById("create-encounter").addEventListener('click', getAndDisplayPokemoneData);

// let pokemonButton = document.getElementById("create-encounter");
// pokemonButton.addEventListener('click', getAndDisplayPokemoneData);