'use strict';

// json file has all planet-distance values
// each data point needs to convert AU to miles, then round to nearest mile
// take AU and * 92955807.3
// math.ceil(planet-planet) after its converted to miles

var mercuryJupiter = 4.81;


function planetDistance() {
  return (Math.ceil(mercuryJupiter * 92955807.3));
}

module.exports = planetDistance;
