const user={
    username:"Aakash",
    price:999,
    WelcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
    
}

// user.WelcomeMessage(); //Aakash , welcome to website
// user.username="sam"
// user.WelcomeMessage(); //sam , welcome to website
// console.log(this); //{}
