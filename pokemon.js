var apiUrl = "https://pokeapi.co/api/v2/pokemon/";
var input = document.querySelector(".pokemon-input");
var pokemonName = document.querySelector(".pokemon-name");
var pokemonImage = document.querySelector(".pokemon-image");
var pokemonHeight =document.querySelector(".pokemon-height");
var pokemonWeight=document.querySelector(".pokemon-weight");
var pokeType1=document.querySelector(".pokemon-type1");
var pokeType2=document.querySelector(".pokemon-type2");
var pokeAbility1=document.querySelector(".pokemon-ability1");
var pokeAbility2=document.querySelector(".pokemon-ability2");


function getPokemonData() {
    axios.get(apiUrl + input.value)
    .then(function (response) {
        console.log(response.data);
        pokemonName.innerHTML = response.data.forms[0].name;
        pokemonImage.src = response.data.sprites.front_default;

        var pokemonType1 = response.data.types[0].type.name;
        if (response.data.types.length == 2) {
            var pokemonType2 = response.data.types[1].type.name;
        }
        else var pokemonType2 = null;

        pokeType1.innerHTML=pokemonType1
        pokeType2.innerHTML=pokemonType2
        pokemonHeight.innerHTML=response.data.height;
        pokemonWeight.innerHTML = response.data.weight;
        var pokemonAbility1 = response.data.abilities[0].ability.name;
        if (response.data.abilities.length == 2) {
            var pokemonAbility2 = response.data.abilities[1].ability.name;
        }
        else var pokemonAbility2 = null;
        // console.log("Ability 1: ", pokemonAbility1);
        // console.log("Ability 2: ", pokemonAbility2);
        pokeAbility1.innerHTML=pokemonAbility1;
        pokeAbility2.innerHTML=pokemonAbility2;
        
    })
  
    .catch(function (error) {
        console.log(error);
        pokemonName.innerHTML = "(An error has occurred.)";
        pokemonImage.src = "";
    });
}

var button = document.querySelector(".pokemon-button");
var back = document.querySelector(".back-button");
  

function flip() {
    $('.card').toggleClass('flipped');
}

button.addEventListener("click", getPokemonData);
button.addEventListener("click",flip);
back.addEventListener("click",flip);



