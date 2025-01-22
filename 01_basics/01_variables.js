const accountId = 144553
let accountEmail="modu@gmail.com"
var accountPassword="1234"
accountCity="Kolkata"
let accountState;

//accountId=2 // not allowed

accountEmail="hc@hc.vom"
accountPassword="21212121"
accountCity="Pune"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

