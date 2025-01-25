// singleton
// Object.create
//object literals
const mysym = Symbol("Key1") 

const JSuser ={
    name: "Aakash",
    "full name":"Aakash Singh",
    age:21,
    [mysym] : "mykey1",
    location:"lucknow",
    email: "harshsingh0063@gmail.com",
    isLoggedIn:false
}

// console.log(JSuser.email); //harshsingh0063@gmail.com

// console.log(JSuser["email"]); //harshsingh0063@gmail.com

// console.log(JSuser["full name"]); //Aakash Singh

// console.log(JSuser[mysym]);
// console.log(typeof JSuser[mysym]);

// JSuser.email="ea0062@gmail.com"
// console.log(JSuser["email"]); //ea0062@gmail.com
// Object.freeze(JSuser) //now no changes will occur while changing like JSuser.email="ea0062@gmail.com"
// JSuser.email="ea0062@hotmail.com" //changing but no change in obj officiallly
// console.log(JSuser["email"]); //ea0062@gmail.com

// console.log(JSuser); 
/*{
  name: 'Aakash',
  'full name': 'Aakash Singh',
  age: 21,
  location: 'lucknow',
  email: 'ea0062@gmail.com',
  isLoggedIn: false,
  [Symbol(Key1)]: 'mykey1'
} */

JSuser.greeting=function(){
    console.log("Hellow JS user");
    
}
JSuser.greetingTwo=function()
{
    console.log(`Hello Js user, ${this.name}`);  
}

console.log(JSuser.greeting()); //Hellow JS user //undefined
console.log(JSuser.greetingTwo()); //Hello Js user, Aakash //undefined


