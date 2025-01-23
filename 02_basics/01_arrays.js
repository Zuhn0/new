//array
//js array are resizable
const myArr=[0,1,2,3,4,5] 
const myArray=[0,1,"Aakash",3]
// console.log(myArr[1]);
// console.log(myArray[2]); //Aakash
const myArr1=new Array(1,2,3,4)
// console.log(myArr1[2]);
// console.log(myArr.length);
// myArr.push(6)
// console.log(myArr);
// myArr.pop();
// console.log(myArr);
// myArr.unshift(55) //adds element in beginning
// console.log(myArr);
// myArr.shift() //removes 1st element
// console.log(myArr.includes(3)); //3
// console.log(myArr.indexOf(40)); //-1
// const newArr=myArr.join() //changes arr to string type
// console.log(myArr); [ 0, 1, 2, 3, 4, 5 ]
// console.log(newArr); //0,1,2,3,4,5
// console.log(typeof newArr); //string

// SLICE , SPLICE
console.log("A " , myArr); //A  [ 0, 1, 2, 3, 4, 5 ]

const myn1=myArr.slice(1,3);
console.log(myn1); // [ 1, 2 ]
console.log("B " , myArr); //B  [ 0, 1, 2, 3, 4, 5 ]

const myn2=myArr.splice(1,3) //[ 1, 2, 3 ]
console.log(myn2); //[ 1, 2, 3 ]
console.log("C " , myArr); //C  [ 0, 4, 5 ]




