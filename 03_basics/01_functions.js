//Function

function sayMyName()
{
    console.log("A");
    console.log("A");
    console.log("K");
    console.log("A");
    console.log("S");
    console.log("H");
    
}
// sayMyName()  
// /*A
// A
// K
// A
// S
// H */

// function addTwoNum(number1,number2)
// {
//    console.log(number1+number2);
// }

// // addTwoNum(3,"a") //3a
// // addTwoNum(3,null) //3
// const result=addTwoNum(3,4)  //7
// console.log("Result: ", result); //Result:  undefined

// function addTwoNum(number1,number2)
// {
//   return (number1+number2);
// }
// const result=addTwoNum(3,4)
// // console.log("result: " , result);  //result:  7
 
// function loginUserMessaege(username)
// {
//     return `${username} just logged in`
// }
// console.log(loginUserMessaege("Aakash")); //Aakash just logged in
// console.log(loginUserMessaege());  //undefined just logged in

// function loginUserMessaege(username)
// {
//     if(! undefined) //undefined and empty string is considered as false in js
//     {
//         console.log("Please enter a Username");
//     }
//     else{
//     return `${username} just logged in` 
//     }
// }
// console.log(loginUserMessaege()); //Please enter a Username

// function loginUserMessaege(username="harsh") //now even if we dont pass any value then also "harsh"= default will be there
// {
    
//     return `${username} just logged in` 
// }
// console.log(loginUserMessaege()); //harsh just logged in
// console.log(loginUserMessaege("Aakash")); //Aakash just logged in

// function calculateCartPrice(...num)
// { 
//     return num;
// }

// console.log(calculateCartPrice(200,300,400,2000)); //[ 200, 300, 400 ]

// function calculateCartPrice(val1,val2,...num)
// { 
//     return num;
// }

// console.log(calculateCartPrice(200,300,400,2000)); //[ 400, 2000 ]

// const user={
//     username:"Aakash",
//     price:999
// }
// function handleObject(anyobject)
// {
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); 
// }
// handleObject(user) //Username is Aakash and price is 999
// //  OR  ,DIRECT OBJECT PASSING
// handleObject({
//     username:"Sam",
//     price:399
// })   //Username is Sam and price is 399