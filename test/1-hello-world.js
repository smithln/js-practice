'use strict';

var assert = require('assert');
var problem = require('../')['hello-world'];

describe('1. Hello World', function(){

  it('Returns "Hello World"', function() {
    assert.equal(problem(), 'Hello World!');
  });

});
