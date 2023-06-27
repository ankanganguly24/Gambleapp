//1. Deposit the money
//2. number of lines to bet
//3.collect the bet amount
//4.Spin the machine
//5.Check if the user won
//6. give them their win or until they run out of money
//7. play again

const prompt = require("prompt-sync")();

const rows = 3;
const cols = 3;

const symbol_count = {
    A : 2,
    B : 4,
    C : 6, 
    D : 8,
};

const symbol_value = {
    A : 5,
    B : 4,
    C : 3,
    D : 2,
};


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

//2. number of lines to bet
const linestobet = () => {
    while(true){
    const linestobet = prompt("Enter your number of lines to bet on(1-3) : ")
    const lines = parseFloat(linestobet);

    if(isNaN(lines) || lines <= 0 || lines > 3) {
        console.log("Invalid bet");
    }
    else {
        return lines;
    }
}
}

//3. amount to bet ac to balance
const getbet = (balance, yourbet) => {
        while(true){
        const betamount = prompt("Enter your bet amount : ")
        const bet = parseFloat(betamount);
    
        if(isNaN(bet) || bet <= 0 || bet > balance/yourbet) {
            console.log("Invalid bet");
        }
        else {
            return bet;
        }
    }
}

//4. Spin the slot
const spin = () => {
    const symbols = [];
     for (const [symbols,count] of Object.entries(symbol_count)){
          for(let i = 0; i < count; i++) {
            symbols.push(symbols);
          }
     }
}

const reels = [];
for (let i = 0; i <cols; i++) {
    reels.push([]);
    const reelsymbol = [...symbols];
    for (let j = 0; j < rows; j++){
        const randomIndex = Math.floor(Math.random() * reelsymbol.length);
        const selectedsymbol = reelsymbol[randomIndex]
        reels[i].push(selectedsymbol);
        reelsymbol.splice(randomIndex,1);
    }

    return reels;
}

let balance = deposit();
const yourbet = linestobet();
const yourbetamount = getbet(balance, yourbet);
const reel = spin();

