// FUNCTION RETURNS HEAD OF AN ARRAY
const head = function(myArray) {
  if (myArray.length > 0) {
    let firstElement = myArray.shift();
    console.log(firstElement);
  }
};

module.exports = head;
