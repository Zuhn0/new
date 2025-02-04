const coding=["js", "ruby", "java", "python","cpp"]

//callback//
//automatically gets inside coding items one by one

// coding.forEach( function (item){
//    console.log(item);
// }  )
// // js
// // ruby
// // java
// // python
// // cpp

// coding.forEach((item)=>{
//     console.log(item);
// })
// // js
// // ruby
// // java
// // python
// // cpp

function printme(item){
    console.log(item);
}
coding.forEach(printme);
// js
// ruby
// java
// python
// cpp