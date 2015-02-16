'use strict';

var assert = require('assert');
var problem = require('../')['planet-distance'];
var data = require('./data/planet-distance.json');

describe('3. Distance between planets', function(){
  it('Calculate distance between two planets', function(){
    for(var property in data) {
      var planets = property.split('-');
      var distance = problem(planets[0].toLowerCase(), planets[1].toLowerCase());
      assert(distance === Math.ceil(data[property] * 92955807.3));
    };
  });
});
