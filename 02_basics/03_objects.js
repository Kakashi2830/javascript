// singleton

//object literals

const mySym = Symbol("key1")

const JsUser={
    name:"Sagnik",
    "full name":"Sagnik Nandi",
    [mySym]:"mykey1", //defining a symbol
    age: 18,
    location:"Kolkata",
    email:"sagnik@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]

} //object

//console.log(JsUser.email);
//console.log(JsUser["email"]);
JsUser.email="Sagnik@gpt.com"
//Object.freeze(JsUser)//freezes the object permenantly
JsUser.email="Sagnik@microsofr.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log(`Hello Js user`);
    
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user,${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());








