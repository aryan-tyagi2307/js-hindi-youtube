const isLoggedIn = true;
const name = "Aryan Tyagi";

if(isLoggedIn){
    console.log(`Yes user logged in, ${name}`);
}

//  <, >, >=, <=, != ,== ,=== for strict check of datatypes

const num = 500;

if(num>400){
    const name = `aryan`;
    console.log(`Number is greater than 400, ${name}`);
}


// && and || operators

const userName = true;
const loggedIn = true;
const loggedInGoogle = true;
const loggedInGmail = false;

if(userName && loggedIn){
    console.log('Logged In')
}

if(loggedInGoogle && loggedInGmail){
    console.log('Logged In with')
}
