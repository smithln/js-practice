'use strict';

// need to identify planet relationship
// need to give that relationship a distance number
// need to be able to use that relationship's distance number to x miles conversion
// need to round that number to nearest integer

// var planets = [
//   'mercury-venus:0.33',
//   'mercury-earth:0.61'
// ]

var planets = [
  'mercury',
  'venus',
  'earth',
  'mars',
  'jupiter',
  'saturn',
  'uranus',
  'neptune'
];

var planetRelationships = {
  //string + '-' + string
}

function distance(z) {
  return Math.ceil(z * 92955807.3);
}

// for 'x' and 'y' identify distance
// use that distance in function planetDistance z
// is z a variable? z needs to pull from distance

var obj = {
  "mercury_venus": 0.33
};


function planetDistance(planet1,planet2) {
  var key = planet1 + '_' + planet2;
  var distanceBetween = obj[key];
  return distance(distanceBetween);
}

module.exports = planetDistance;


console.log(planetDistance('mercury','venus'));

// "mercury-venus"= 0.33,
// "mercury-earth": ,
// "mercury-mars",
// "mercury-jupiter",
// "mercury-saturn",
// "mercury-uranus",
// "mercury-neptune",
// "venus-mercury": 0.33,
// "venus-earth",
// "venus-mars",
// "venus-jupiter",
// "venus-saturn",
// "venus-uranus",
// "venus-neptune",
// "earth-mercury",
// "earth-venus",
// "earth-mars",
// "earth-saturn",
// "earth-jupiter",
// "earth-uranus",
// "earth-neptune",
// "mars-mercury",
// "mars-venus",
// "mars-earth",
// "mars-jupiter",
// "mars-saturn",
// "mars-uranus",
// "mars-neptune",
// "jupiter-mercury",
// "jupiter-venus",
// "jupiter-earth",
// "jupiter-mars",
// "jupiter-saturn",
// "jupiter-uranus",
// "jupiter-neptune",
// "saturn-mercury",
// "saturn-venus",
// "saturn-earth",
// "saturn-mars",
// "saturn-jupiter",
// "saturn-uranus",
// "saturn-neptune",
