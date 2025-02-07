const coding=["js", "ruby", "java", "python","cpp"]

// //callback//
// //automatically gets inside coding items one by one

// // coding.forEach( function (item){
// //    console.log(item);
// // }  )
// // // js
// // // ruby
// // // java
// // // python
// // // cpp

// // coding.forEach((item)=>{
// //     console.log(item);
// // })
// // // js
// // // ruby
// // // java
// // // python
// // // cpp

// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme);
// // js
// // ruby
// // java
// // python
// // cpp

// coding.forEach((item,index,arr)=>{
// console.log(item,index,arr);
// }
// )
// // js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// // ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// // java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// // python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// // cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]

// const mycoding=[
//     {
//       languageName:"Javascript",
//       languageFileName:"js"
//     },
//     {
//         languageName:"c++",
//         languageFileName:"cpp"
//       },
//       {
//         languageName:"html",
//         languageFileName:"html"
//       }
// ]
// mycoding.forEach(item=>{

//     console.log(item.languageName);
// }
// )
// // Javascript
// // c++
// // html