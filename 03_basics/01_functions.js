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

function loginUserMessaege(username="harsh") //now even if we dont pass any value then also "harsh"= default will be there
{
    
    return `${username} just logged in` 
}
console.log(loginUserMessaege()); //harsh just logged in
console.log(loginUserMessaege("Aakash")); //Aakash just logged in


