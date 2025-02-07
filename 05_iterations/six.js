//////////////FILTER MAP////////////


// const coding=["js", "ruby", "java", "python","cpp"]

// const values=coding.forEach(item=>{
//     console.log(item);
// })
// console.log(values); //undefined

const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums.filter((num)=>num>4)

// console.log(newNums);
// //[ 5, 6, 7, 8, 9, 10 ]

// const nnewNums=myNums.filter((num)=>
//     {num>4
//     })

// console.log(nnewNums);
// //[]   //we have to write return statement as we have started a scope

// const nnewwNums=myNums.filter((num)=>
//     { return num>4
//     })

// console.log(nnewwNums); 
// //[ 5, 6, 7, 8, 9, 10 ]

//BY USING FOR EACH

const newNums=[]

myNums.forEach((num)=>{
    if(num>4)
    {
        newNums.push(num)
    }
}
)
console.log(newNums); 
//[ 5, 6, 7, 8, 9, 10 ]
