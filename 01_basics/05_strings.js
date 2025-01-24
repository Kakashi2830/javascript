const name ="sagnik"
const repocount=50

//console.log(name+repocount+"value"); old method

//new method
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('Sagniknec')

console.log(gameName.__proto__);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "  Sagnik  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://modu.com/modu%20mawda"

console.log(url.replace('%20','-'))

console.log(gameName.split('-'));












