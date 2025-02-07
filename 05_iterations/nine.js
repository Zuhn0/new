const myNums=[1,2,3]

// const myTotal=myNums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currvalue:${currval}`)
//     return acc+currval
// },0)
// //acc:0 and currvalue:1
// // acc:1 and currvalue:2
// // acc:3 and currvalue:3

const myTotal=myNums.reduce((acc,curr)=>acc+curr,0)

console.log("total=",myTotal); //total= 6

const shoppingCart=[
    {
        item:"js course",
        price:999
    },
    {
        item:"py course",
        price:2999
    },
    {
        item:"c++ course",
        price:5999
    },
]
const total=shoppingCart.reduce((acc,item)=>acc+item.price,0)

console.log(total);
