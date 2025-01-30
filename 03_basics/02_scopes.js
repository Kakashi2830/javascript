let a =10 //global scope
const b=20
var c = 30


if (true){
    let a = 10
    const b = 20
    //var c = 30
    //console.log("Inner",a); //block scope
    
}  //curly braces are scope

//for (let i = 0 ; i< Array.length;i++){
//    const element = Array[i]
//}

//console.log(a);
//console.log(b);
//console.log(c);


function one(){
    const username="Sagnik"

    function two(){
        const website="youtube"
        //console.log(username);
        
    }
    //console.log(website);
    //child function can access the parent object
    //two()
}

//one()

if (true){
    const username="Sagnik"
    if (username=="Sagnik"){
        const website="youtube"
        //console.log(username+website);
        
    }
    //console.log(website);
    
}
//console.log(username);


//++++++++++++++++++++++++++++++interesting++++++++++++++++++++++++++++++++++++++

addone(5) //hoistig issue doesn't gives error
function addone(num){
    return num+1    
}



addTwo(5)                         //hoisting issue gives error here
const addTwo= function(num){       // in this variable type function u cannot return result when the return statement is given before
    return num+2                 
}

