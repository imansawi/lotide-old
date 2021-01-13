// FUNCTION RETURNS TAIL OF AN ARRAY
const tail = function(myArray) {
  if (myArray.length > 0) {
    let x = myArray.shift();
    x = "";
    return myArray;
  }
};

module.exports = tail;



