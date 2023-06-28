//1. Deposit the money
//2. number of lines to bet
//3.collect the bet amount
//4.Spin the machine
//5.Check if the user won
//6. give them their win or until they run out of money
//7. play again

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    A : 2,
    B : 4,
    C : 6, 
    D : 8,
};

const SYMBOL_VALUE = {
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
     for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)){
          for(let i = 0; i < count; i++) {
            symbols.push(symbol);
          }
     }

const reels = [];
for (let i = 0; i < COLS; i++) {
    reels.push([]);
    const reelSymbols = [...symbols];

    for (let j = 0; j < ROWS; j++){
        const randomIndex = Math.floor(Math.random() * reelSymbols.length);
        const selectedSymbol = reelSymbols[randomIndex]
        reels[i].push(selectedSymbol);
        reelSymbols.splice(randomIndex, 1);
    }
}

    return reels;
};

//If the user won: 

const transpose = (reels) => {
    const rows = [];
  
    for (let i = 0; i < ROWS; i++) {
      rows.push([]);
      for (let j = 0; j < COLS; j++) {
        rows[i].push(reels[j][i]);
      }
    }
  
    return rows;
  };
  
  const printRows = (rows) => {
    for (const row of rows) {
      let rowString = "";
      for (const [i, symbol] of row.entries()) {
        rowString += symbol;
        if (i != row.length - 1) {
          rowString += " | ";
        }
      }
      console.log(rowString);
    }
  };

  //-----------------------------------------------------------//

  const getWinnings = (rows, bet, lines) => {
    let winnings = 0;
  
    for (let row = 0; row < lines; row++) {
      const symbols = rows[row];
      let allSame = true;
  
      for (const symbol of symbols) {
        if (symbol != symbols[0]) {
          allSame = false;
          break;
        }
      }
  
      if (allSame) {
        winnings += bet * SYMBOL_VALUE[symbols[0]];
      }
    }
  
    return winnings;
  };

  const game = () => {
    let balance = deposit();
  
    while (true) {
      console.log("You have a balance of $" + balance);
      const numberOfLines = linestobet();
      const bet = getbet(balance, numberOfLines);
      balance -= bet * numberOfLines;
      const reels = spin();
      const rows = transpose(reels);
      printRows(rows);
      const winnings = getWinnings(rows, bet, numberOfLines);
      balance += winnings;
      console.log("You won, $" + winnings.toString());
  
      if (balance <= 0) {
        console.log("You ran out of money!");
        break;
      }
  
      const playAgain = prompt("Do you want to play again (y/n)? ");
  
      if (playAgain != "y") break;
    }
  };
  
  
  
  game();


