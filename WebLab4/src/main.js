const {
    getAbilityUrl
} = require("./model");

document.querySelector("#root").innerHTML = `
    <div>
      <h1>Single Page Application (PokeApi)</h1>
      <ul id="header">
        <li><a class="link" id="info" href="#">Student info</a></li>
        <li><a class="link" id="pokemon" href="#">Pokemon info</a></li>
      </ul>
      <div id="content"></div>
    </div>
  `;

const infoMarkup = () => `<div>
  <h1>Barabanov Alexander</h1>
  <h2>M3308</h2>
  </div>`;

const pokemonMarkup = (name, abilities) => `
  <div id="pokemon-container">
    <h1 id="pokemon-name">Name: ${name}</h1>
    <h3 id="pokemon-ability-effect">Effects: <br>${abilities.join("<br><br>")}</h3>
  </div>`;

const contentElement = document.querySelector("#content");

const renderInfo = () => {
    contentElement.innerHTML = infoMarkup();
};

const renderPokemon = async () => {
    getAbilityUrl(25).then(result => {
        contentElement.innerHTML = pokemonMarkup(result[0], result[1]);
    });
};

document.querySelectorAll(".link").forEach((el) => [
    el.addEventListener("click", (event) => {
        if (event.target.id === "info") {
            renderInfo();
        }
        if (event.target.id === "pokemon") {
            renderPokemon();
        }
    }),
]);

renderInfo();