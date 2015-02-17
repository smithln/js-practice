'use strict';

var assert = require('assert');
var planetDistance = require('../')['planet-distance'];
var data = require('./data/planet-distance.json');
var problem = require('../')['sound-travel'];

describe('4. Sound Travel', function(){
  it('Calculates the time it takes for a sound to be heard between planets', function(){

    for(var property in data) {

      var planets = property.split('-');

      assert.equal(
        planetDistance(planets[0].toLowerCase(), planets[1].toLowerCase()),
        problem(planets[0].toLowerCase(), planets[1].toLowerCase())
      );
    };

  });
});
