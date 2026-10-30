const accountId = 144553
let accountEmail = "kuwar@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2  - not allowed

accountEmail = "hc@hc.com"
accountPassword = "7854621"
accountCity = "Banglore"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
