var pinwheel0 = beginning
var pinwheel1 = 0
var pinwheel2 = 0


function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}



//let beginning = ["The Queen", "Nicolas Cage", "Bill Gates", "Jews", "Apple", "Rhona", "EDA", "Jacinda Ardern", "Donald Trump", "The Chinese", "All Homosexuals", "The Lizards"]

//let middle = ["secretly owns", "controls", "is going to destroy", "is resposible for", "invented", "made love to", "funds", "eat"]

//let end = ["babies", "the global economy", "adrinochrome", "chem trails", "elves", "goblins", "bitcoin", "crypto", "the internet", "asians", "virgins", "heroin", "BIG DATA", "big pharma", "oil", "nuclear waste", "robots"]

//function generateTheory() {
//    console.log(`${beginning[getRandomArbitrary(0, beginning.length)]} ${middle[getRandomArbitrary(0, middle.length)]} ${end[getRandomArbitrary(0, end.length)]}`)
//}



//Spin pinwheel 0 to display beginning below
//Spin pinwheel 1 to display middle below
//Spin pinwheel 2 to display end below

let beginning = ["The Queen", "Nicolas Cage", "Bill Gates", "Jews", "Apple", "Rhona", "EDA", "Jacinda Ardern", "Donald Trump", "The Chinese", "All Homosexuals", "The Lizards"]

function generateBeginning() {
    console.log(`${beginning[getRandomArbitrary(0, beginning.length)]}
}}