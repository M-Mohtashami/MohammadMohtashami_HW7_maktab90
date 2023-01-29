"use strict";

function sortArray(...args) {
  let newArray = [];
  for (const arg of args) {
    newArray.push(...arg);
  }

  return newArray.sort((a, b) => b - a);
}

console.log(sortArray([1, 5, 4, 9], [6, 5, 7, 2], [7, 6, 7, 10]));
