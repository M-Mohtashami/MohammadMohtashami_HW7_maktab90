"use strict";
let salaries = {
  John: 100,
  Pete: 300,
  Mete: 300,
  Mary: 250,
};

function maxSalary(obj) {
  let result = {};
  let max = Math.max(...Object.values(obj));
  for (const [key, value] of Object.entries(obj)) {
    if (value === max) {
      result[key] = value;
    }
  }
  return result;
}

console.log(maxSalary(salaries));
