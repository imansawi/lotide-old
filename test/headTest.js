// const assertEqual = require('../assertEqual');
// const head = require('../head');

// // TEST CODE

// head([1, 2, 3]);
// assertEqual(head([1, 2, 3], 1));
// head([]);
// assertEqual(head([], null));
// head(["Hello!"]);
// assertEqual(head(["Hello!"], "H"));
// head([5,6,7]);
// assertEqual(head([5,6,7], 5));
// head(["Hello", "Lighthouse", "Labs"]);
// assertEqual(head(["Hello", "Lighthouse", "Labs"], "Hello"));

const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
});

it("returns 'a' for ['a', 'b', 'c']", () => {
  assert.strictEqual(head(['a', 'b', 'c']), 'a'); 
});