const score = "33"; // this is a string and will be converted into number(type of = number) and value will be  33 ( "33" => 33 )

console.log(typeof score); //string
console.log(typeof(score)); // it is another method of showing typeof (method)

const n = Number(score);

console.log(typeof n); // number
console.log(n); // "33" => 33



const score2 = "33abc"; // this is a combination of string and number and will be converted into number(type of = number) but will show value = NaN

console.log(typeof score2); // string

const n2 = Number(score2);

console.log(typeof n2); // number
console.log(n2); // "33abc" => NaN


// similarly there will be more types of conversion like Boolean to number, Number to boolean, String to number and reverse etc.


// conversion of number to boolean
let bool = 1;
let boolNumber = Boolean(bool); // 1 => true
console.log(boolNumber);

// 
let num = 33;
let numStr = String(num); //number converted into string value of 33 => 33
console.log(numStr);
console.log(typeof numStr);