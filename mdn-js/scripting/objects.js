/* Objects */
var myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;
myCar[3] = "Audi";

console.log(myCar.hasOwnProperty("model")); //true
console.log(myCar[3]);

console.log("/* Accessing object properties */");
console.log(Object.keys(myCar));
console.log(Object.getOwnPropertyNames(myCar));


/* Prototype based object */
console.log("/* Prototype */")
var a={};
console.log(a.length); //undefined
console.log(a.__proto__); // Object
a.__proto__=Array.prototype;
console.log(a.length);  // 0
console.log(a.__proto__); // Array

