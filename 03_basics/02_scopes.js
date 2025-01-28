//global scope
// var c=300
let a=300
//local scope
if(true){
  let a=10
const b=20
var c=30  
console.log("INNER:", a);

}

// console.log(a); //ERROR
// console.log(b); //ERROR
console.log(c);  // 30 (EVEN defined inside scope still print 30)

console.log(a);


