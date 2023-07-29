// singleton
// object.create


// object literals

const mySym = Symbol("key1"); //for using symbol in object declare it like this in object => [mySym]: "mykey1"

const myObj = {
    name: "Aryan",
    "full name": "Aryan Tyagi", 
    [mySym]: "mykey1",
    age: 21,
    email: "aryan@gmail.com",
    isLoggedIn: false,
    loggedInDays: ["Monday", "Tuesday"]
}

// console.log(myObj.name); // syntax 1st of accessing object property
// console.log(myObj["name"]); // syntax 2st of accessing object property

// console.log(myObj["full name"]); //for this type of property we can not access it with myObj.full name syntax so this syntax is used
// console.log(myObj[mySym]);

myObj.email = "aryan@123.com"
// Object.freeze(myObj);
myObj.email = "aryan@google.com"

// console.log(myObj);

myObj.greetings = function(){
    console.log("Hello my name is  aryan tyagi and my mailId is", this.email);
}
myObj.greetingsTwo = function(){
    console.log(`Hello my name is ${this.name}`);
}

console.log(myObj.greetings());

console.log(myObj.greetingsTwo());