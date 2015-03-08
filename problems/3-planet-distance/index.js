'use strict';

var obj = {
  'mercury_venus': 0.33,
  'mercury_earth': 0.61,
  'mercury_mars': 1.13,
  'mercury_jupiter': 4.81,
  'mercury_saturn': 9.15,
  'mercury_uranus': 18.75,
  'mercury_neptune': 29.67,
  'venus_mercury': 0.33,
  'venus_earth': 0.28,
  'venus_mars': 0.80,
  'venus_jupiter': 4.48,
  'venus_saturn': 8.82,
  'venus_uranus': 18.42,
  'venus_neptune': 29.34,
  'earth_mercury': 0.61,
  'earth_venus': 0.28,
  'earth_mars': 0.52,
  'earth_jupiter': 4.20,
  'earth_saturn': 8.54,
  'earth_uranus': 18.14,
  'earth_neptune': 29.06,
  'mars_mercury': 1.13,
  'mars_venus': 0.80,
  'mars_earth': 0.52,
  'mars_jupiter': 3.68,
  'mars_saturn': 8.02,
  'mars_uranus': 17.62,
  'mars_neptune': 28.54,
  'jupiter_mercury': 4.81,
  'jupiter_venus': 4.48,
  'jupiter_earth': 4.20,
  'jupiter_mars': 3.68,
  'jupiter_saturn': 4.34,
  'jupiter_uranus': 13.94,
  'jupiter_neptune': 24.86,
  'saturn_mercury': 9.15,
  'saturn_venus': 8.82,
  'saturn_earth': 8.54,
  'saturn_mars': 8.02,
  'saturn_jupiter': 4.34,
  'saturn_uranus': 13.94,
  'saturn_neptune': 24.86,
  'uranus_mercury': 18.75,
  'uranus_venus': 18.42,
  'uranus_earth': 18.14,
  'uranus_mars': 17.62,
  'uranus_jupiter': 13.94,
  'uranus_saturn': 9.60,
  'uranus_neptune': 10.92,
  'neptune_mercury': 29.67,
  'neptune_venus': 29.34,
  'neptune_earth': 29.06,
  'neptune_mars': 28.54,
  'neptune_saturn': 24.86,
  'neptune_jupiter': 20.52,
  'neptune_uranus': 10.92,
};

// z will return au from key converted to miles to the nearest whole number
function distance(z) {
  return Math.ceil(z * 92955807.3);
};

function planetDistance(planet1,planet2) {
  var key = planet1.toLowerCase() + '_' + planet2.toLowerCase();
  var distanceBetween = obj[key];
  return distance(distanceBetween);
};

module.exports = planetDistance;

console.log(planetDistance('mars', 'Earth'));
