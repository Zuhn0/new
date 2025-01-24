 const marvel_heros=["thor","spiderman","Ironman"]
const dc=["superman","flash","batman"]

// marvel_heros.push(dc);
// console.log(marvel_heros); //[ 'thor', 'spiderman', 'Ironman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heros[3]); //[ 'superman', 'flash', 'batman' ]
// console.log(marvel_heros[3][1]); //flash
// console.log(marvel_heros[4]); //undefined


// console.log(marvel_heros.concat(dc)); //[ 'thor', 'spiderman', 'Ironman', 'superman', 'flash', 'batman' ]

// const all_heros =[...marvel_heros,...dc]
// console.log(all_heros); //[ 'thor', 'spiderman', 'Ironman', 'superman', 'flash', 'batman' ]

// const another_array=[1,2,3,[4,2,4],[2,4,[4,1,7,3]]]
// const real_another_array=another_array.flat(Infinity)
// console.log(real_another_array); // [ 1, 2, 3, 4, 2, 4, 2, 4, 4, 1, 7, 3] 


// console.log(Array.isArray("Aakash")); //false
// console.log(Array.from("Aakash")); //[ 'A', 'a', 'k', 'a', 's', 'h' ]

// console.log(Array.from({name: "Aakash"})); //interesting case output :[]

const score1=100;
const score2=200;
const score3=300;

console.log(Array.of(score1,score2,score3));


