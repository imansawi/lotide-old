// FUNCTION IMPLEMENTATION
const eqArrays = function(array1, array2, ) {
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


const assertEqual = function(passed) {
    if (passed === true) {
    console.log("Assertion Passed!");
  } else {
    console.log("Assertion Failed!");
  }
};
  

assertEqual(eqArrays([1, 2, 3], [1, 2, 3])); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1])); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS