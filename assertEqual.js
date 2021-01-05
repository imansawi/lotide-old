// FUNCTION IMPLEMENTATION
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