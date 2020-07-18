const pokedex = document.getElementById("pokedex");

const buttonMore = document.getElementById("more");
// const type = document.getElementById("type");

var search = 10;
console.log(pokedex);

const fetchPokemon = () => {



    const promises = [];

    for (let i = 1; i <= search; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));

    }

    Promise.all(promises).then((results) => {
        const pokemon = results.map((data) => ({
            name: data.name,
            id: data.id,
            image: data.sprites['front_default'],
            type: data.types.map((type) => type.type.name).join(' ,  ')
        }));
        displaypokemon(pokemon);

    });

    buttonMore.addEventListener("click", function () {
        search += 10;
        console.log(search)

        const promises = [];
        for (let i = 1; i <= search; i++) {
            const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
            promises.push(fetch(url).then((res) => res.json()));
        }
        
        Promise.all(promises).then((results) => {
            const pokemon = results.map((data) => ({
                name: data.name,
                id: data.id,
                image: data.sprites['front_default'],
                type: data.types.map((type) => type.type.name).join(' ,  ')
            }));
            displaypokemon(pokemon);


            function createPokeImage(pokeID, containerDiv){
                let pokeImage = document.createElement('img')
                pokeImage.srcset =    `https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`
                containerDiv.append(pokeImage);
              }

        });
    })

}

const displaypokemon = (pokemon) => {
    const pokeHtml = pokemon.map((poke) =>
        `
       <div class="pokecard">   
        <h2 class="nu"><strong>Nu.${poke.id}</strong></h2>
        <img src="${poke.image}"/>
        <h2 class="nome"><strong>Nome:</strong> ${poke.name}</span></h2>
        <p id="type" class="tipo"><strong>Type:</strong>${poke.type}</p>
       </div>  
    `
    
    ).join('');
    console.log(pokeHtml)
    pokedex.innerHTML = pokeHtml;
};

fetchPokemon();


  

// teste.addEventListener("click", ()=>{
// window.alert("Hello")
// })




    // buttonLess.addEventListener("click",function(){
    //     search -= 20;
    //     console.log (search)
    //        const promises = [];

    //     for (let i = 1; i <= search; i++) {
    //         const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    //         promises.push(fetch(url).then((res) => res.json()));   

    //     }

    // Promise.all(promises).then((results) => {
    //     const pokemon = results.map((data) => ({
    //         name: data.name,
    //         id: data.id,
    //         image: data.sprites['front_default'],
    //         type: data.types.map((type) => type.type.name).join(' ,  ')
    //     }));
    //     displaypokemon(pokemon);

    // });
    // })







