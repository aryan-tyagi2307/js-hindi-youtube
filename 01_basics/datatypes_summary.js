// JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.


// datatypes are divided into two types
// 1. Primitive 2. Non primitive(Reference)

// Primitive are of 7 types : number, string, bigint, boolean, symbol, undefined, null

// Non primitive are of 3 types : array, functions, objects


// symbol datatype example
const id = Symbol('123');
console.log(typeof id);
const anotherId = ('123');
console.log(id === anotherId); //false


// bigint example
const bigNum = 5466546546211544451516565656n;
console.log(typeof bigNum);
console.log(bigNum);


// array example
const gods = ["ram", "krishna", "hanuman"];
console.log(typeof gods); // typrof => object but it is array


// function example
let myFunction = function(){
    console.log("hello");
}


// object example
let myObj = {
    name: "aryan",
    age: 21,
    email: "aryan@gmail.com"
}


console.log(typeof myFunction); // typeof => object function but it is function
console.log(typeof myObj); // typeof => object and it is object


/* 
Return type of variables in JavaScript
1) Primitive Datatypes
Number => number
String  => string
Boolean  => boolean
null  => object
undefined  =>  undefined
Symbol  =>  symbol
BigInt  =>  bigint

2) Non-primitive Datatypes
Arrays  =>  object
Function  =>  function
Object  =>  object
*/