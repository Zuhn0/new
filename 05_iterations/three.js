// //for of

// //["", "", ""]
// //[{}, {}, {}]

// const arr=[1,2,3,4,5]
// for(const num of arr)
// {
//   console.log(num);
// }  //1
// // 2
// // 3
// // 4
// // 5

// const greetings="HEllo world!"
// for (const greet of greetings) {
//     console.log(greet);   
// }
// //H
// // E
// // l
// // l
// // o
 
// // w
// // o
// // r
// // l
// // d
// // !

 /// // MAPS ///////
 const map=new Map()
 map.set('IN', "India")
 map.set('USA', "United states of am")
 map.set('In', "India")

//  console.log(map);
//  Map(3) {
//   'IN' => 'India',
//   'USA' => 'United states of am',
//   'In' => 'India'
// }

// for (const it of map) {
//     console.log(it);
// }
// // [ 'IN', 'India' ]
// // [ 'USA', 'United states of am' ]
// // [ 'In', 'India' ]

// for (const [key,value] of map) {
//     console.log(key, ':-', value);
// }
// // IN :- India
// // USA :- United states of am
// // In :- India

//OBJECTS ARE NOT ITERABLE EX:

// const myobject ={
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key,value] of myobject) {
//     console.log(key, ':-', value);
// }  
// //myobject is not iterable
