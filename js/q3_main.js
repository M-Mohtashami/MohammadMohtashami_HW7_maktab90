"use strict";

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

function unique(arr) {
  let uniqueSet = new Set(arr);
  return Array.from(uniqueSet);
}

console.log(unique(values));
