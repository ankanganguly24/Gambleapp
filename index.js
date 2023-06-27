//1. Deposit the money
//2. Collect the bet, number of lines to bet
//3.collect the bet
//4.Spin the machine
//5.Check if the user won
//6. give them their win or until they run out of money
//7. play again

const prompt = require("prompt-sync")();


//1. Deposit the money
const deposit = () => {
    while(true){
   const depositAmount = prompt("Enter a deposit amount: ")
   const aNumber = parseFloat(depositAmount);
 
   if(isNaN(aNumber) || aNumber <= 0){
    console.log("Invalid amount, try again")
   }
   else {
    return aNumber;
   }
} 

};

//2. Collect the bet, number of lines to bet





const yourDeposit = deposit();

