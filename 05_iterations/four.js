// HOW TO ITERATE IN OBJECTS USING //FORIN

const myobject={
    js: 'javascript',
    cpp: 'c++',
    rb:"ruby",
    swift:"swift by apple"
}

// for(const key in myobject)
// {
//     console.log(key)
// }
// // js
// // cpp
// // rb
// // swift

for (const key in myobject) {
        console.log(`${key} shortcut is for ${myobject[key]}`);
    }
    //js shortcut is for javascript
// cpp shortcut is for c++
// rb shortcut is for ruby
// swift shortcut is for swift by apple


 