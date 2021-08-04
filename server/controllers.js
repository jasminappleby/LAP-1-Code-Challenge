const data = require('./data')

function randomPage(search){
    let choice = Math.floor(Math.random()*9);
    switch(search){
        case "love-island":
            return data.results.loveIsland[choice].url;
        case "hotels-in-spain":
            return data.results.hotelsInSpain[choice].url;
        case "pokemon":
            return data.results.pokemon[choice].url;
        case "olympics":
            return data.results.olympics[choice].url;
        case "cheese":
            return data.results.cheese[choice].url;
        default:
            console.log("not a valid search")
            break;
    }
}

module.exports = {randomPage}