// Immediately Invoked  Function Expressions (IIFE)
// this is used to reduce global skope pollution


function chai(name){
    console.log(`DB CONNECTED ${name} `);
} // normal function
chai(`mongo`);


(function chaiTwo(){
    console.log("DB CONNECTED TWO"); // IIFE function
}) ();

( (name) => {
    console.log(`DB connected three ${name}`); //arrow function in IIFE
} ) (`mySQL`)