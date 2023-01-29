"use strict";
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
  let newMap = new Map();
  for (const val of arr) {
    let newKey = val.toLowerCase().split("").sort().join("");
    newMap.set(newKey, val);
  }

  return Array.from(newMap.values());
}

console.log(aclean(arr));
