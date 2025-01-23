// data types(primitive)
// 7 types: String,Numbe,Boolean,null,undefined,symbol,BigInt

const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id==anotherId);

const bigNumber=345678765433456654322222345n

//Reference (Non Primitive)
//Array,Objects,Functions return type function 

const heroes=["shaktiman","naagraj","doga"]
let myObj=
{
    name: "sagnik",
    age: 21,

}

const myFunction=function(){
    console.log("Hello world");
}

//type of
// Undefined => "undefined"
//Null => "object"
//Boolean => "boolean"
//Number => "number"
//string => "string"
//objec(does not call/implement) => "object"
//object(native or host and does implement) => "function"
//object(host and does not implement)=>"boolean","number","string"