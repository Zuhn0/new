//Immediately invoked function Expresion( IIFE)
// SYNTAX
// (FUNCTION DECLERATION)(); //SEMICOLON IS NECESSARY TO END IT 

(function chai(){
    //named iife
    console.log(`DB connected`);
})();    //DB connected

//BY ARROW FUNCTION

( () => {
    console.log(`DB CONNECTED TWO`);
}
) ();   //DB CONNECTED TWO

((name)=>{
      //unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
})
('Aakash');  //DB CONNECTED TWO Aakash
