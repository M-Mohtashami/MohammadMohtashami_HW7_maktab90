"use strict";

let map = new Map();
map.set("name", "John");
let keys = map.keys();
// console.log(keys);
// Error: keys.push is not a function
// keys.push("more");
// چون خروجی تابع
// map.keys()
// یک آرایه نیست و یک
// mapIterator
// است و برای اجرای توابع مربوط به آرایه باید ابتدا تبدیل به یک آرایه شود.

let newKeys = Array.from(keys);
newKeys.push("more");
console.log(newKeys);
