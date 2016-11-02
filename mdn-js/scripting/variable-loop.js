/* Default Values */
console.log("/* Default Values */");
var default_a;
let default_b;
const default_c=0;
console.log(default_a+"\n");
console.log(default_b+"\n");
console.log(default_c+"\n");

/* Evaluating variables */
console.log("/* Evaluating variables */");

var evaluate_a;
console.log("The value of a is " + evaluate_a); // The value of a is undefined

console.log("The value of c is " + evaluate_c); // The value of c is undefined
var evaluate_c;

//console.log("The value of x is " + evaluate_x); // Uncaught ReferenceError: x is not defined
let evaluate_x;

//console.log("The value of b is " + evaluate_b); // Uncaught ReferenceError: b is not defined

/* Variable Scope */
console.log("/* Variable Scope */");
if (true) {
  var scope_x = 5;
}
console.log(scope_x); // x is 5

if (true) {
  let scope_y = 5;
}
//console.log(scope_y);  // ReferenceError: y is not defined

/* Variable hoisting */
console.log("/* Variable hoisting */");

console.log(hoist_a); // undefined
var hoist_a=5;

var hoist_b=8;
(function() {
  console.log(hoist_b); // undefined //If u comment next line then o/p will be 8
  var hoist_b = "local value";
})();

/* Converting string to number */
console.log("/* Type Conversion */");
console.log("37"-7);
console.log("37"+7);
console.log((+"1.12")+(+"1.23"));

/* Object Literals */
console.log("/* Object Literals */");
var obj_test={name:"Federer",3:"Roger"};
console.log(obj_test[3]+" "+obj_test.name);

/* Boolean Literals */
console.log("/* Boolean Literals */");
var boolean_a=true;
if(boolean_a){
	console.log("True");	
}
var boolean_b=new Boolean(true);
if(boolean_b){
	console.log("True");
}

/* String interpolation */
console.log("/* String interpolation */");
var name="Aga";
console.log(`WTA Champion: ${name}`);

/* Special Characters*/
var text="Muthu \ kumaran";
console.log(text);

/* for..in for..of */
console.log("/* for..in for..of */");
let arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // logs "3", "5", "7"
}

