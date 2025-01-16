// #primitive

// 7types=STRING,NUMBER,BOOLEAN,NULL,UNDEFINED,SYMBOL,BigInt
const score=100  //NUmber
const scorevalue=100.3 //Number

let userEmail; //undefined or userEmail=undefined

const id=Symbol('123')
const anotherId= Symbol('123')

console.log(id===anotherId); //False

const BigNumber=598n //big int


//reference type(non primitive)
// Array,objects,Functions

const heros=["harsh", "Aakash","doga"]


let myObj={
name:"Aakash",
age: 21,
}

const myfunction=function(){
    console.log("Hello world"); 
}

console.log(typeof (myfunction))

// *************************************************8

//stack(primitive)=gives copy ,heap(non primitive)=gives reference

let myYoutubename="Aakash"

let anothername=myYoutubename

anothername="HARSH"

console.log(anothername)
console.log(myYoutubename)

let userOne={
    email:"harshsingh0063@gmail.com",
    upi:"harshsingh0063@oksbi",
}
let userTwo=userOne;
userTwo.email="ea0062@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)