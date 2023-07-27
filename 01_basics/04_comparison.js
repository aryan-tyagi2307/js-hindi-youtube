// console.log(2 > 1);
// console.log(2 == 1);
// console.log(2 >= 1);
// no problem until datatype is same 

// console.log("2" > 1);
// console.log("2" == 2); // it will give true as its datatype is converted according to the preference(precedence)
// console.log("2" >= 1);
// now confusion occurs when datatype is changed b/w operators which are going to be compared

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);  // it give true because null will be converted into zero


console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);


console.log(2 === "2"); // === will strictly check i.e. does not convert the operators into other datatypes that's why it will give false

// this is mainly for interview purpose