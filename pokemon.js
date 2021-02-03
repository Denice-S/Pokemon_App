const chooseButton = document.querySelector(".chooseButton");
const reset = document.querySelector(".reset");
const flipped = document.querySelector(".flip-card-inner");
const input = document.querySelector(".pokemon-input");
const api = "https://pokeapi.co/api/v2/pokemon/";
const pokemonName = document.querySelector(".pokemon-name")
const pokemonImage = document.querySelector(".pokemon-image");
const pokemonAbility = document.querySelector(".pokemon-ability")
const pokemonType = document.querySelector(".pokemon-type")

async function getPokemonData() {
    try {
        await axios.get(api + input.value)
            .then((response) => {
                pokemonImage.src = response.data.sprites.front_default;
                const pokeName = response.data.forms[0].name;
                pokemonName.innerHTML = pokeName.charAt(0).toUpperCase() + pokeName.slice(1);
                pokemonAbility.innerHTML = `<b>Abilities:-</b>${response.data.abilities[0].ability.name},<br> ${response.data.abilities[1].ability.name}`;
                const pokeType = response.data.types[0].type.name;
                pokemonType.innerHTML = `<b> Type:-</b> ${pokeType.charAt(0).toUpperCase() + pokeType.slice(1)} Pokemon`;

            })

    } catch (e) {
        console.log("Error", e)
    }
}

chooseButton.addEventListener("click", function () {
    flipped.classList.add("flip")
    getPokemonData();
});

reset.addEventListener("click", function () {
    flipped.classList.remove("flip")
    input.value = "";
});