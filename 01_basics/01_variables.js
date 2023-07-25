// variables in JavaScript 

const accountId = 12345;
let accountEmail = "aryan@google.com";
var accountPassword = "aryan123"; 
/*
 Not used now a days due to problem in block scope and functional scope 
*/
// var har jagha change ho jata tha kyuki Javascript ko scope {} samajh me nhi aata tha

accountCity = "Ghaziabad"; //this is also possible prr use nhi krna kabhi
let accountState;  // it's value will undefined until a value is assigned to it


console.log(accountId);
console.table([accountId , accountEmail ,accountPassword , accountCity]);

// accountId = 2; // It's not possible to change the value of a constant variable

accountEmail = "tyagi@google.com";
accountPassword = "12345";
accountCity = "Noida";

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

