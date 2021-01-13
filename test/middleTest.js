const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.strictEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [] for ['5']", () => {
    assert.strictEqual(middle(['5']), []); 
  });
});

it("returns [2, 3] for [1, 2, 3, 4]", () => {
  assert.strictEqual(middle([1, 2, 3, 4]), [2, 3]); 
});

// const   middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual');

// // TEST CODE
// assertArraysEqual(middle([1]), [], true);
// assertArraysEqual(middle([1, 2]), [], true);

// assertArraysEqual(middle([1, 2, 3]), [2], true);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3], true);

// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3], true);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4], false);