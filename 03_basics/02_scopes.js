// //global scope
// // var c=300
// let a=300
// //local scope
// if(true){
//   let a=10
// const b=20
// var c=30  
// console.log("INNER:", a);
// }

// // console.log(a); //ERROR
// // console.log(b); //ERROR
// console.log(c);  // 30 (EVEN defined inside scope still print 30)

// console.log(a);

// function one(){
//   const username="Aakash"
//   function two(){
//     const website="youtube"
//     console.log(username);
//   }
//   // console.log(website); //error as scope is limited to inner function
//   two()
// }
// one()

// ++++++++++++++++++++++++++++++ INTERESTING +++++++++++++++++++++++++++++++++++++++++
console.log(addone(5)); //6

function addone(num){
  return num+1;
}
 
// addTwo(5) //error
const addTwo = function(num){
  return num + 2
}
console.log(addTwo(5));
 //7
