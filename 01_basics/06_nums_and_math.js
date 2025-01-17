const score= 400
const balance=new Number(100)
console.log(balance) //[Number: 100]

console.log(balance.toString().length); //balance now string
console.log(balance.toFixed(2)); //100.00

const otherNumber=23.8532
console.log(otherNumber.toPrecision(3)); //23.9

const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN')); //10,00,000



