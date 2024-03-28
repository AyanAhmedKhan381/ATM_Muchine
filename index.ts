import inquirer from "inquirer";

//Initialize user ce and pin code
let myBalance = 5000;
let myPin = 12345;

//Print welcome message
console.log("Wellcome to Code With Ayan - ATM Machine")

let pinAnswer = await inquirer.prompt ([
    {
        name: "pin",
        type: "number",
        message: "Enter Your Pin Code:"
    }
])
if (pinAnswer.pin ===myPin) {

    console.log("Pin is Correct login Successfully!")
   //console.log(`Current Account Balance is ${myBalance}`)

let oprationAns = await inquirer.prompt([
    {
        name: "operation",
        type: "list",
        message: "Select an operation:",
        choices: ["Withdraw Ammount", "Check Balance"]
    }
])

if (oprationAns.operation === "Withdraw Ammount") {

let ammountAns = await inquirer.prompt ([
    {
        name: "ammount",
        type: "number",
        message: "Enter the ammount to Withdraw"
    }
])
  if (oprationAns.ammount > myBalance) {

    console.log("Insufficient Balance")
  }
     else {
    
        myBalance -= ammountAns.ammount;
        console.log(`${ammountAns.ammount} Withraw Successfully`)
        console.log(`Your Remaining Balance is ${myBalance}`)

   }

}
   else if (oprationAns.operation === "Check Balance") {
   console.log(`Your Account Balance is ${myBalance}`) 
   }

 }

else {
console.log("Pin is Incorrect, Try Agin!");

}