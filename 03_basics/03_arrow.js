// const user={
//     username:"Aakash",
//     price:999,
//     WelcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
//     }
    
// }

// user.WelcomeMessage(); //Aakash , welcome to website
// user.username="sam"
// user.WelcomeMessage(); //sam , welcome to website
// console.log(this); //{}


// function chai(){
//     let username="Aakash"
//     console.log(this.username); //undefined //cant use in function  only for objects
// }
// chai();

///////////////////ARROW FUNCTION


// const chai= () =>{
//     let username="Aakash"
//     console.log(this); //{}
// }
// chai()

// const chai= () =>{
//     let username="Aakash"
//     console.log(this.username); //undefined
// }
// chai()

//  /////////// METHOD 1///////////
// const addTwo=(num1,num2) => {
//     return num1 +num2
// }

// console.log(addTwo(3,5)); //8

/////////////METHOD 2 //////////////

// const addTwo =  (num1,num2) =>  (num1 + num2)
// console.log(addTwo(3,7)) //10

//For object we have to use parenthesis

const addTwo=(num1,num2) => ({username:"Aakash"})

console.log(addTwo(4,5));  //{ username: 'Aakash' }
