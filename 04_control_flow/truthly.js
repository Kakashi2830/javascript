const userEmail = "h@Sagnik.ai"

if (userEmail){
    console.log("got user email");
    
}else{
    console.log("Don't have user email");
    
}
//falsy values

//false,0,-0,,BigInt On,"",null, undefined,NaN

//TRUTHY values
// "0", 'false'," ",[],{},function(){}

if (userEmail.length==0){
    console.log("Array is Empty");
    
}

const emptyObj={}

//if (Object.keys(emptyObj).length===0){
//    console.log("Object is empty");
//}

//Nullish Coalescing Operator (??): null undefined

let val1;
//val1=5 ?? 10
//val=null ?? 10
val1 = undefined ?? 15

console.log(val1);

//Terniary operator
// condition ? true : false

const iceTeaPrice =100
iceTeaPrice >= 80 ? console.log("less than 80"): console.log("more than 80 ");

