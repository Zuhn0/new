///Promise is an object used as asyn and await in ES6

const promiseOne=new Promise(function(resolve,reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();  //connects then with resolve
    },1000);
    console.log('Hello'); 
    
})  

promiseOne.then(function(){
    console.log("Promise Consumed");  
})
// Hello
// Async task is complete
// Promise Consumed

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
});




const PromiseThree=new Promise(function(resolve,reject){
     setTimeout(function(){
        resolve({user:'John',age:30});
     },1000)
})

PromiseThree.then(function(user){
    console.log(user);
})




const PromiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({user:'John',age:30});
        }else{
            reject('Error: Something went wrong');
        }
    },1000)
})

PromiseFour
.then((user)=>{
    console.log(user);
    return user.age;  //return will point to the next then
})
.then((age)=>{
    console.log(age);
})
.catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("Promise is either resolved or rejected");
})



const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:'John',password:"123"});
        }else{
            reject('Error: Something went wrong');
        }
    }
        ,1000)
})

//async and await cannot handle error handling so we need to use try and catch block

async function consumePromiseFive(){
       try{
        const response=await promiseFive;
        console.log(response);
       }catch(error){
        console.log(error);
       }
}

consumePromiseFive();


// async function getAllUsers(){
//     const response=await fetch('https://jsonplaceholder.typicode.com/users');
//     const data=await response.json();    //await is used to wait for the promise to resolve and then return the data
//     console.log(data);
// }



// getAllUsers();


fetch('https://jsonplaceholder.typicode.com/users')
.then(response=>{
    return response.json();
}).then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))

