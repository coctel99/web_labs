global.fetch = require("node-fetch");

const getDataFromUrl = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

const getAbilityUrl = async (number) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${number}`;
    let ability_urls = [];
    let ability_names = [];
    let info = [];
    let abilities = [];
    let name;
    const tempData = await getDataFromUrl(url);
    name = tempData.name;
    for (let i = 0; i < tempData.abilities.length; i++) {
        ability_urls.push(tempData.abilities[i].ability.url);
        ability_names.push(tempData.abilities[i].ability.name);
    }

    console.log("abilities: " + ability_names);

    let requests = ability_urls.map(url => getInfoAboutAbility(url));
    info = await Promise.all(requests);
    for (let k = 0; k < info.length; k++) {
        abilities.push("<i>" + ability_names[k] + "</i><br>" + info[k].effect_entries[0].effect);
    }
    return [name, abilities];
};

const getInfoAboutAbility = async (url) => {
    const response = await fetch(url);
    const abilityData = await response.json();
    return abilityData;
};

module.exports = {
    getAbilityUrl
};