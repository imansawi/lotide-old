// FUNCTION ASSERT ARRAY HAS ELEMENTS
const assertNonEmptyArr = function(inputArray) {
  if (inputArray.length > 0) {
    console.log(`✅✅✅ Assertion Passed!`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inputArray} Array Has No Elements!`);
  }
return;
};
  
// FUNCTION RETURNS HEAD OF AN ARRAY
const head = function(myArray) {
  assertNonEmptyArr(myArray);
  let firstElement = myArray.shift();
  console.log(firstElement);
};

head([1, 2, 3]);
head([]);
head(["Hello!"]);
head([5,6,7]);
head(["Hello", "Lighthouse", "Labs"]);