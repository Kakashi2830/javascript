// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
    
})();//iife  to remove pollution of global scope used iife

//or 

( (name) =>{
    console.log(`DB CONNECTED TWO ${name}`);
    
})('Sagnik');
