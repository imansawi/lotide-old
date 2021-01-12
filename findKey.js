const findKey = function(object, callback) {
  let results = "";
  for (let item in object) {
    if(callback(object[item])) {
      results = item;
      break;
    }
  }
  return results;
};


const findKeyObj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};  // => "noma"

const results1 = findKey(findKeyObj, x => x.stars === 2);
console.log(results1);