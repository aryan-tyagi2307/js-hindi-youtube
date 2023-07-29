// singleton
// object.create


// object literals

const mySym = Symbol("key1");

const myObj = {
    name: "Aryan",
    "full name": "Aryan Tyagi", 
    age: 21,
    email: "aryan@gmail.com",
    isLoggedIn: false,
    loggedInDays: ["Monday", "Tuesday"]
}

console.log(myObj.name); // syntax 1st of accessing object property
console.log(myObj["name"]); // syntax 2st of accessing object property

console.log(myObj["full name"]); //for this type of property we can not access it with myObj.full name syntax so this syntax is used
