const marvelHeros = ["spiderman", "ironman", "thor"];
const dcHeros = ["batman", "superman", "flash"];
const uniqueHero = ["udit", "abhi", "nikhil"];
// marvelHeros.push(dcHeros);
// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);


// const newHero = marvelHeros.concat(dcHeros);
// console.log(newHero);


const nwHero = [...marvelHeros, ...dcHeros, ...uniqueHero]; // spread operator [...marvelHeros, ...dcHeros, ...uniqueHero, ...etc]
// console.log(nwHero);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

console.log(Array.isArray("aryan"));
console.log(Array.from("aryan"));
console.log(Array.from({name: "hitesh"})) // interesting (defined with key,index or value of array)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
