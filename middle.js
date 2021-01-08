// FUNCTION IMPLEMENTATION
/* const eqArrays = function(array1, array2, ) {
  let isEqual = true;
  if ((array1.length !== 0) && (array2.length !== 0) && (array1.length === array2.length)) {
    for (i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        isEqual = false;
        break;
      }
    }
  } else {
    isEqual = false;
  }
  return isEqual;
};

const assertEqual = function(actual, expected) {
  //let mesg = "qqqqq";
  if (actual !== expected) {
  //  mesg = "🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected;
  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
  //  mesg = "✅✅✅ Assertion Passed: " + actual + " === " + expected;
  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  //console.log(mesg);
  return;
};

// TEST CODE
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, -2);


const assertEqual = function(passed) {
  if (passed === true) {
  console.log("✅✅✅ Assertion Passed!");
} else {
  console.log("🛑🛑🛑 Assertion Failed!");
}
};


assertEqual(eqArrays([1, 2, 3], [1, 2, 3])); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1])); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS */


// FUNCTION IMPLEMENTATION
const middle = function(myArray) {
  let middleElement = [];
  if  (myArray.length < 3) {
    return false;
  } else if (myArray.length % 2 === 0) {
    middleElement.push(myArray[myArray.length / 2 - 1]);
    middleElement.push(myArray[myArray.length / 2]);
  } else {
    middleElement.push(myArray[(myArray.length / 2).toFixed() - 1]);
  }
  console.log(middleElement);
  return middleElement;
};

// TEST CODE
middle([1]); // => []
middle([1, 2]); // => []

middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]5

middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]