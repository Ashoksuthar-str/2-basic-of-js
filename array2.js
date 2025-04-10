const marvel_heroes = ["Thor","Ironman","SpiderMan"]
const dc_heroes = ["Batman","SUperman","Robin"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][2]);

// const allHero = marvel_heroes.concat(dc_heroes)
// console.log(allHero);

const allNewHeros = [...marvel_heroes,...dc_heroes]
console.log(allNewHeros);

const anotherArray = [1,2,3,[4,5,6],7,[8,9.,[10,11]]]
const anotherArray2 = anotherArray.flat(2)
console.log(anotherArray2);

console.log(Array.isArray("Ashok"))
console.log(Array.from("Ashok"))
console.log(Array.from({name:"Ashok"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
