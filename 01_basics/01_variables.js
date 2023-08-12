const accountId = 144553;
let accountEmail = "apsingh1381@gmail.com";
var accountPassword =  "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 //not allowed

accountEmail = "ap@ap.com"
accountPassword = "212121"
accountCity = "Bengaluru"

/*
Prefer not to use
because of issue in block scope and functional scope

*/



console.log(accountId);

console.table([accountId , accountEmail , accountPassword , accountCity , accountState])
