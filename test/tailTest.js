const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.strictEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns [] for ['5']", () => {
    assert.strictEqual(tail(['5']), []); 
  });
});

it("returns ['b', 'c'] for ['a', 'b', 'c']", () => {
  assert.strictEqual(tail(['a', 'b', 'c']), ['b', 'c']); 
});


// const tail = require('../tail');
// const assertArraysEqual = require('../assertArraysEqual');

// // TEST CODE

// assertArraysEqual(tail([1, 2, 3]), [2,3], true);
// assertArraysEqual(tail([]), [], true);
// assertArraysEqual(tail(["Hello!"]), [], false);
// assertArraysEqual(tail([5,6,7]), [6,7], true);
// assertArraysEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"], true);