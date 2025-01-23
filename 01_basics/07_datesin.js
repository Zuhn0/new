//DATES
let myDate=new Date()
// console.log(myDate.toUTCString()); //Thu, 23 Jan 2025 11:22:16 GMT
// console.log(myDate.toDateString()); //Thu Jan 23 2025
// console.log(myDate.toLocaleDateString()); //1/23/2025
// console.log(typeof myDate) //object

// let myCreatedDate=new Date(2025,0,25,5,3) //month start from 0 in js
// console.log(myCreatedDate);
let myCreatedDate=new Date("2025-01-23")
// console.log(myCreatedDate.toString()); //Thu Jan 23 2025 00:00:00 GMT+0000
// console.log(myCreatedDate.toLocaleDateString()); //1/23/2025
// console.log(myCreatedDate.toLocaleString()); //1/23/2025, 12:00:00 AM
let myTimeStamp=Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(myTimeStamp/1000)); //toget in seconds

let newDate = new Date()
// console.log(newDate.getMonth()+1);

// console.log(`${newDate.getDay()} and the time is ${newDate.getTime()}`);

newDate.toLocaleString( 'default' ,{
   weekday:"long",
})




