/* IIFE */
 (function(){
 	console.log('Immediately invoked');
 })();
/* Diff b/w func declaration and expression */
console.log("/* Diff b/w func declaration and expression */");
test_declaration();
function test_declaration(){
	console.log('Function declaration...');
}
//test_expression();
var test_expression=function(){
	console.log('Function expression...');
};

/* Explore function */
console.log('Function explore...');
calling_function();
function calling_function(){
	var arg1=5;
	var arg2="type";	
	explore_function(arg1,arg2);
}
function explore_function(a){
	
	console.log(arguments); //[5,"type"] 	
}

/* Default parameters */
console.log("/* Default parameters */");
function test_default(a,b=2){
	return a*b;
}
console.log(test_default(5));  //10
console.log(test_default(5,3)); //15

/* Comparison operators */
console.log("/* Comparison operators */");
var compare_a=3;
var compare_b="test";
/*console.log(compare_a=="3"); //true
console.log(compare_a==="3");//false
console.log(undefined==null);//true
console.log(0==false);     // true
console.log(0==null);      // false
console.log(0==undefined); // false
console.log(null==undefined); // true*/
var object1 = {"value":"key"}, object2={"value":"key"};
var object3=object1; 
console.log("Object Comparison:"+(object1 === object2));//false

/* Unary operators */
console.log("/* delete */");
var Employee = {
  age: 28,
  name: 'abc',
  designation: 'developer'
}

console.log(delete Employee.name);   // returns true
console.log(delete Employee.age);    // returns true

// When trying to delete a property that does 
// not exists, true is returned 
console.log(Employee.name);  //undefined
console.log(delete Employee.salary);

var_a=5;
var var_b=5;
//delete var_a;  // true
delete var_b;  // false
console.log(var_a); 

console.log("/* typeof */");
var myFun = function(){};
var shape = "round";
var size = 1;
var today = new Date();

console.log(typeof myFun);     // returns "function"
console.log(typeof shape);     // returns "string"
console.log(typeof size);      // returns "number"
console.log(typeof today);     // returns "object"
console.log(typeof dontExist); // returns "undefined"
console.log(typeof true); // returns "boolean"
console.log(typeof null);  // returns "object"
console.log(typeof undefined);

console.log("/* in */");
var trees = ["redwood", "bay", "cedar", "oak", "maple"];
console.log(0 in trees);        // returns true
console.log(3 in trees);        // returns true
console.log(6 in trees);        // returns false
console.log("bay" in trees);    // returns false


console.clear();
console.log("/* String objects */");
var s1 = "2 + 2"; // Creates a string literal value
var s2 = new String("2 + 2"); // Creates a String object
console.log(typeof s1); // Returns the number 4
console.log(typeof s2); // Returns the string "2 + 2"