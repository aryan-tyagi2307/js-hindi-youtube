
function add(num1,num2){
    return num1 + num2
}
function loggedIn(username){
    return `${username} just logged in`
}
function loggedInb(username){
    console.log("logged in by ", username);
}

console.log(add(5465,445646546544665));
// let value = loggedInb("aryan tyagi")
console.log(loggedIn("aryan tyagi"));
loggedInb("aryan");


const myObj = {
    userName: "Aryan",
    price: 599
}
const myObject = {
    userName: "Aryan",
    prices: 999
}

function accessObj(anyobject){
    console.log(`Username is ${anyobject.userNames} and price of product is ${anyobject.prices}`);
}

// accessObj(myObj)
accessObj({
    userNames: "Aryan Tyagi",
    prices: 1099
})

const myArr = [200,599,999,1099]

function arrayIndex(anyArr) {
    return anyArr[1]
}

console.log(arrayIndex(myArr));


