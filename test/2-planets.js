'use strict';

var assert = require('assert');
var problem = require('../')['planets'];

describe('2. Planets', function(){

  it('Returns an array of planets', function() {

    var planets = [
      'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter',
      'Saturn', 'Uranus', 'Neptune', 'Pluto'
    ];

    assert.equal(problem(), planets);
  });

});
