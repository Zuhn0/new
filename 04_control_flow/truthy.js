// const userEmail="h@hitesh.ai"

// if(userEmail){
//     console.log("Got user email");}
//     else{
//        console.log("dont");
       
//     }
//      //Got user email
//     const useerEmail=""

// if(useerEmail){
//     console.log("Got user email");}
//     else{
//        console.log("dont");
       
//     }   //dont
   
// //FALSY VALUES

// // false,0,-0,BigInt 0n,"",null,undefined,NaN


// //truthy VALUES

// // "0",'false'," ",[],{},function(){}

//  const emptyObj={}

//  if(Object.keys(emptyObj).length===0){
//     console.log("Object is empty");   
//  }    //Object is empty

 //Nullish Coalecsing Operator (??):null undefined

//  let val1;
//  val1=5 ?? 10

//  console.log(val1); //5

// let val1;
// val1=null ?? 10

// console.log(val1); //10
 
// let val1;
// val1=undefined ?? 15

// console.log(val1); //15

let val1;
val1=undefined ?? 15 ?? 35 //1st value gets assigned

console.log(val1); //15

//TERNIARY OPERATOR 

// condition? true : false

const iceTeaPrice =100 
iceTeaPrice>100 ? console.log("true") : console.log("false"); //false


