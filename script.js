//This shows up in the BROWSER's console
//NOT the terminal
console.log("vf2");

const searchForm = document.getElementById("pkmn_srch");
searchForm.addEventListener("submit", getPokemonData);

function getPokemonData(e){
  e.preventDefault();
  const req = new XMLHttpRequest();
  req.open("GET", "https://pokeapi.co/api/v2/pokemon/"+ e.target.pkmnData.value, true);
  req.send();
  req.onload = function(){
    const json = JSON.parse(req.responseText);
    console.log(json.name);
    //do all the things to the DOM
    let picture = document.getElementById("pkmnImg");
    let name = document.getElementById("pkmnName");
    name.innerHTML = json.name;
    picture.src = json.sprites.front_default;
  };
};

//getPokemonData("gloom");
