
const poke_contanier = document.getElementById("poke_container");
const pokemon_number = 160;
var searchLimit = 20;
const colors = {
    fire: "#FDDFDF",
    grass: "#DEFFD0",
    eletric: "#FCF7DE",
    water: "#DEF3FD",
    ground: "#F4E7DA",
    rock: "#D5D5D4",
    fairy: "#DCEAFF",
    poison: "#98D7A5",
    bug: "#D8D5A3",
    dragon: "#97B3E6",
    psychic: "#EAEDA1",
    flying: "#F5F5F5",
    fighting: "E6E0D4",
    normal: "F5F5F5",
};

// const main_types = Object.keys(colors);
// console.log(main_types);


// const fetchPokemons = async () => {
//     for (let i = 1; i <= pokemon_number; i++) {
//         await getPokemon(i);
//     }

// }




// const getPokemon = async id => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//     const res = await fetch(url);
//     const pokemon = await res.json();
//     // console.log(pokemon);
//     createPokemonCard(pokemon);
// }

// fetchPokemons();

console.log("hello")


const fetchPokemonsTurbo = async () => {

    for (let i = 0; i <= pokemon_number; i += searchLimit) {
        console.log(i);
        console.log(searchLimit);
        await getPokemonTurbo(i);

    }
}

const getPokemon = async url => {
    // const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    console.log(pokemon);
    createPokemonCard(pokemon);
}

const getPokemonTurbo = async offset => {   // Criaçao de duas variaveis 
    const url1 = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${searchLimit}`;
    const res = await fetch(url1);
    var listPokemon = await res.json();

    // console.log(listPokemon.results);
    listPokemon.results.forEach(element => {
        var urlCard = element.url;
        getPokemon(urlCard);
    });

}
fetchPokemonsTurbo();

function createPokemonCard(pokemon) {
    const pokemonEl = document.createElement("div");
    pokemonEl.classList.add('pokemon');
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const poke_typex = pokemon.types.map(el => el.type.name[0].toUpperCase() + el.type.name.slice(1));
    const poke_HP = pokemon.stats[0].base_stat;
    const poke_attack = pokemon.stats[1].base_stat;
    const poke_defense = pokemon.stats[2].base_stat;
    const poke_speed = pokemon.stats[5].base_stat;
    const poke_peso = Math.round(pokemon.weight * 0.45);
    const poke_habilities1 = pokemon.abilities[0].ability["name"];
    // const poke_habilities2 = pokemon.abilities[1].ability["name"];


    
    // const pokeType1 = pokemon.types[0].type['name'];
    // console.log (pokeType1)
    // console.log(poke_typex)

    // const poke_types = pokemon.types[0].type['name'];
    // const type = main_types.find(
    //     type => poke_types.indexOf(type) > -1
    // );



    // const color = colors[type];
    // pokemonEl.style.backgroundColor = color;
    // // pokemonEl.style.backgroundColor = `linear-gradient(to right,${color},${color});`

 


    const pokeInnerHTML = `

    <div class="flip-card">

        <div class="back-card">
            <p><strong>HP</strong>: ${poke_HP}</p>
            <p><strong>Weight</strong>: ${poke_peso} Kg</p>
            <p><strong>Atack</strong>: ${poke_attack}</p>
            <p><strong>Defense</strong>: ${poke_defense}</p>
            <p><strong>Speed</strong>: ${poke_speed}</p>
            <P><strong>Main Habilitie</strong></P>
            <p>${poke_habilities1}</p>
           
        </div>


        <div class="front-card">
            <div class="img-container">
                <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png">
                </div>
                <div class="info">
                <span class="number">#${pokemon.id.toString().padStart(3, "0")} </span>
                <h3 class="name" id="name">${name}</h3>
                <h5 class"tipo"> <strong>Type</strong>: ${poke_typex}</h5>
            </div>
        </div>

       
    </div>


    `;


    pokemonEl.innerHTML = pokeInnerHTML;

    poke_container.appendChild(pokemonEl);
}



function myFunction() {
    var input, filter, pokemon, h3, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    pokemon = document.getElementsByClassName("pokemon");

    for (i = 0; i < pokemon.length; i++) {
        h3 = pokemon[i].getElementsByTagName("h3")[0];
        txtValue = h3.textContent || h3.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            pokemon[i].style.display = "";
        } else {
            pokemon[i].style.display = "none";
        }
    }}