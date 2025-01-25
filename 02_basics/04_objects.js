// const tinderUser = new Object(); //singleton object

// const tinderUser ={}; // non singelton object
// tinderUser.id="123abc"
// tinderUser.name="Aakash"

// // console.log(tinderUser); //{ id: '123abc', name: 'Aakash' }

// const regularUser = {
//      email: "harshsingh0063@gmail.com",
//      fullname: {
//         userfullname: {
//             firstname: "Aakash",
//             lastname: "singh"
//         }
//      }
// }
// console.log(regularUser.fullname); //{ userfullname: { firstname: 'Aakash', lastname: 'singh' } }
// console.log(regularUser.fullname.userfullname.lastname); //singh

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"a",
    4:"b"
}
const obj3={
    5:"a",
    6:"b"
}

// const obj3={obj1 , 
//     obj2}

// console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj4=Object.assign({},obj1,obj2,obj3) 
// console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj4={...obj1,...obj2,...obj3}

console.log(obj4) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
