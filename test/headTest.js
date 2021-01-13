const assertEqual = require('../assertEqual');
const head = require('../head');

// TEST CODE

head([1, 2, 3]);
assertEqual(head([1, 2, 3], 1));
head([]);
assertEqual(head([], null));
head(["Hello!"]);
assertEqual(head(["Hello!"], "H"));
head([5,6,7]);
assertEqual(head([5,6,7], 5));
head(["Hello", "Lighthouse", "Labs"]);
assertEqual(head(["Hello", "Lighthouse", "Labs"], "Hello"));