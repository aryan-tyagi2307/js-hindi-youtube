const userEmail = []

if (userEmail) {
    console.log("got email");
}else{
    console.log("dont have email");
}

// falsy values
// false, 0, -0, null, undefined, NaN, "", BigInt 0n

// truthy values
// "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("empty array");
}