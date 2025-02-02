const userEmail="h@hitesh.ai"

if(userEmail){
    console.log("Got user email");}
    else{
       console.log("dont");
       
    }
     //Got user email
    const useerEmail=""

if(useerEmail){
    console.log("Got user email");}
    else{
       console.log("dont");
       
    }   //dont
   
//FALSY VALUES

// false,0,-0,BigInt 0n,"",null,undefined,NaN


//truthy VALUES

// "0",'false'," ",[],{},function(){}

 const emptyObj={}

 if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");   
 }    //Object is empty