const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(`Welcome to the password validator`)

reader.question("Please create a password?", function (input) {
    if(input.length < 10) {
        console.log(`Failed! Password must be at least 10 characters long`)
    } else {
        console.log(`Succes! password created`)
    }
})