const name="Aakash"
const repoCount=50

// console.log(name + repoCount+" is good") //badway

// console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);

//decleration 2
const gamename=new String('Aakash-as-singh')
// console.log(name[0])
// console.log(gamename) //output:[String: 'Aakash']
// console.log(gamename.__proto__)

// console.log(gamename.toUpperCase())

console.log(gamename.charAt(2))
console.log(gamename.indexOf('a'))

const newString =gamename.substring(0,4)
console.log(gamename)
console.log(newString)
const anotherString=gamename.slice(-1,1)
console.log(anotherString)
const url="https://aakash.com/aakash%20choudhary"

console.log(url.replace('%20' ,'_'))
console.log(url.includes('sh')) //true

console.log(gamename.split('-'));
//[ 'Aakash', 'as', 'singh' ]


 