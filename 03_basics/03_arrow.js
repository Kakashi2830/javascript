const user ={
    username:"Sagnik",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username}, Weclome to website`);
        //console.log(this);
        
    }
}

//user.welcomeMessage()
//user.username="sam"
//user.welcomeMessage()

//console.log(this);

//function chai(){
//    let username="Sagnik"
//    console.log(this);
    
//}

//chai()

//const chai=function(){
//    let username="Sagnik"
//    console.log(this.username);
    
//}

const chai=() =>{
    let username="Sagnik"
    console.log(this);
    
}



//chai()

//const addTwo = (num1,num2) => {
//    return num1+num2
//}

const addTwo = (num1,num2) => (num1+num2) //is used in react very very important

console.log(addTwo(3,4));
