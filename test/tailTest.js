const tail = require('../tail');
const assertArraysEqual = require('../assertArraysEqual');

// TEST CODE

assertArraysEqual(tail([1, 2, 3]), [2,3], true);
assertArraysEqual(tail([]), [], true);
assertArraysEqual(tail(["Hello!"]), [], false);
assertArraysEqual(tail([5,6,7]), [6,7], true);
assertArraysEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"], true);