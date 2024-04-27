
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


async function putDataOnPage(dataToDisplay) {
    document.getElementsByClassName('pokemonName')[0].textContent = dataToDisplay.name;

    let type1Display = document.getElementsByClassName('pokemonType1')[0];
    let type2Display = document.getElementsByClassName('pokemonType2')[0];

    type1Display.textContent = "Type 1: " + dataToDisplay.types[0].type.name;
    // type1Display.textContent = data.types[0]["type"]["name"];

    if (dataToDisplay.types[1]) {
        // If the data includes a 2nd type, set that as well
        type2Display.textContent = "Type 2: "+ dataToDisplay.types[1].type.name;
    } else {
        // If no 2nd type exists, reset the content in type2Dsiplay
        type2Display.textContent = "Type 2: ";
    }


    // Wishlist: add random chance to select front_shiny instead of front_default

    // Real odds are 1 in 8192
    // Testing / development odds are 1 in 4
    // Generate random number between 1 and [odds upper limit]
    // If number is 1, show shiny
    // Else, show default

    let shinyResult = Math.floor(Math.random() * 4) + 1;

    let imageContainer = document.getElementsByClassName("pokemonImage")[0];
    let imageElement = imageContainer.getElementsByTagName("IMG")[0];

    // document.querySelector(".pokemonImage IMG").src = dataToDisplay.sprites.front_default;

    if (shinyResult == 1) {
        imageElement.src = dataToDisplay.sprites.front_shiny;
        console.log("Shiny Pokemon found!");
    } else {
        imageElement.src = dataToDisplay.sprites.front_default;
    }



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