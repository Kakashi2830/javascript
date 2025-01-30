
function sayMyName(){
    console.log("S");
    console.log("a");
    console.log("g");
    console.log("n");
    console.log("i");
    console.log("k");
}

//sayMyName()

//function addTwoNumbers(number1,Number2){
//    console.log(number1+Number2);
//}

function addTwoNumbers(number1,Number2){
    //let result=number1+Number2
    //return result
    console.log("Sagnik");
    
}

const result=addTwoNumbers(3,5)

//console.log("Result ",result);

function loginUserMessage(username){
    if(username===undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in `
}

//console.log(loggedUserMessage("Sagnik"))
//console.log(loginUserMessage());


function calculateCartPrice(val1,val2,...num1){ //rest operator or spread operator
    return num1
}

//console.log(calculateCartPrice(200,400,500,2000))

const user={
    username:"Sagnik",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray =[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));



