
let num=10;
console.log(num);
//global variable can be accesses anywhere in the program
if(num>5){
    console.log(num);
}

//const x; // SyntaxError: Missing initializer in const declaration
const y=10;
console.log(y);
/*
//block scope variable
let num2=20;
if(num>num2){
    let msg="Done";
    console.log(msg);
}
console.log(msg); //error msg is not defined because it is block scope variable
*/
//but if we use var instead of let then it will be function scope variable and it can be accessed anywhere in the function
let num3=30;
let num2=20;
if(num3>num2){
    var msg2="Done";
    console.log(msg2);
}
console.log(msg2); //it will print Done because msg2 is function scope variable and it can be accessed anywhere in the function

function test(){
    var num4=40;
}
//console.log(num4); //error num4 is not defined because it is function scope variable and it can be accessed only inside the function

//var also has hoisting behavior, which means that the variable declaration is moved to the top of the function scope, but the assignment is not. So if we try to access the variable before it is assigned, it will return undefined instead of throwing an error.
console.log(num5); //undefined
var num5=50;


if(10<5){
    var msg3="Hello";
}
console.log(msg3); //undefined because the if condition is false and msg3 is not assigned any value, but it is still declared because of hoisting behavior of var.but if we use let instead of var then it will throw an error because let does not have hoisting behavior and it is block scope variable.


//***************javascript Functions**************/
function mul(a,b){
    return a*b;
}
let result=mul(5,10);
console.log(result); //50

const greet=function(name){
    return "Hello "+name;
}
greet("John");
console.log(greet); //Hello John

const greet2=function(name){
    return "Hello "+name;
}
let greet5=greet2("Jane");
console.log(greet5); //Hello Jane

//arrow function with explicit return
const greet3=(name)=>{
    return "Hello "+name;
}
console.log(greet3("Doe")); //Hello Doe

//arrow function with implicit return or in one line
const greet4=(name)=>"Hello "+name;
console.log(greet4("Smith")); //Hello Smith

