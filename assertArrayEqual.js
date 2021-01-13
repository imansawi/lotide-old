const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

// FUNCTION IMPLEMENTATION
const assertArrayEqual = function(array1, array2) {
  assertEqual(eqArrays(array1, array2));
};

module.exports = assertArrayEqual;
