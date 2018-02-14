const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets");

function myFunction(item, index) {
    planetEl.innerHTML += `${item} `;
}

planets.forEach(myFunction);


/*
    Use the map method to create a new array where the 
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

const planetCap = document.getElementById("planetsCap");

const capitalPlanets = planets.map(function(name) {
    planetCap.innerHTML += `${name.charAt(0).toUpperCase() + name.slice(1)} `;
})


/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const ePlans = planets.filter(planetName => {
    const listPlanetsWithE = planetName.includes("e");
    return listPlanetsWithE;
});

console.log(`Original array: ${planets}`);
console.log(`New array: ${ePlans}`);

const dispPlanetsE = document.getElementById("planetsE")

for (let i = 0; i < ePlans.length; i++) {
    dispPlanetsE.innerHTML += `${ePlans[i].charAt(0).toUpperCase() + ePlans[i].slice(1)} `;
}



// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]


const mySentence = (accumulator, currentValue) => accumulator + " " + currentValue;
const sentenceSection = document.getElementById("sentence");

sentenceSection.innerHTML = words.reduce(mySentence);