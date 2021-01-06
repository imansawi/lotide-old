const assertNonEmptyArr = function(inputArray) {
  if (inputArray.length > 0) {
    console.log(`✅✅✅ Assertion Passed!`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inputArray} Array Has No Elements!`);
  }
  return;
};
  
// FUNCTION RETURNS TAIL OF AN ARRAY
const tail = function(myArray) {
  assertNonEmptyArr(myArray);
  let firstElement = myArray.shift();
  console.log(myArray);
};
  

tail([1, 2, 3]);
tail([]);
tail(["Hello!"]);
tail([5,6,7]);
tail(["Hello", "Lighthouse", "Labs"]);
