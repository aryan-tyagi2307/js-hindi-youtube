
if (true) {
    let a=10;
    const b=20;
    var c=30;
}

// console.log(a); as it is in block scope i.e. it is declared under if statement

// console.log(b); as it is also in block scope i.e. it is declared under if statement

console.log(c); // it does not follow scoping


if (true) {
    const username = "Aryan";
    if (true) {
        const website = "Youtube";
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


function one() {
    const user = "Aryan";
    function two() {
        const browser = "Chrome";
        console.log(browser );
    }
    console.log(two());
    console.log(user);    
}
console.log(one());
