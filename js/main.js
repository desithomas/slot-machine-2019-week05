/** 
 * Slot Machine 
 * 
 * Slot machine has 5 symbols on each reel 
 * 
 * There are 3 reels total 
 * 
 * the player places bets when before they spin the reel
 * 
 * After they spin the reel, the will either match all three symbols across the reels ot they will not
 * 
 * if the player matches all three items, they will win and their bet will be added to their balance 
 * 
 * the minimum bet is $5 
 * 
 * the minimum bet is $50 
 * 
 * There is a Balance 
 * 
 * How does it know when to start the game? 
 * 
 * How does it know when the player is interacting with it?
 * 
 * How does it know which reel the player is betting on? 
 * 
 * How can it verify the bet amount?
 * 
 * How will it track the balance and not let the Player spin if the balance is at zero?
 * 
 * How does it know which line the player is betting on, if all 3 reels show 5 symbols at once?
 */


// //Reels and their contents 
// const reelOne = ["A", "B", "C", "D", "E"] //indexes start at zero; arrays call via the indexes 

// const reelTwo = ["A", "B", "C", "D", "E"]

// const reelThree = ["A", "B", "C", "D", "E"]

// //The indexes from these arrays have to go at random to a new array 

// //let result = [] //this is the empty array 

// //Players will need a starting balance. Make the balance zero? But then the minimum bet is 5 - 50, so would zero be the right starting balance? No the starting balance is the 100 that Leon mentioned 
// // 
// startingBalance = "0"
// bet = //takes user input; slot machine gives them 2x amount that they bet





//Take a random index from each slot and put it into spinTheReel



//Functions down here 


// //should be responsible for returning just the three symbols. no money handling or deciding whether Player won or lost 
// pickRandomSymbolsFromReels = (reelOne, reelTwo, reelThree) => {
//     const result = [] //what is going inside of the result when the function is finished running? It should be three symbols total; one symbol from each reek 


//     //Loops through each array passed into the function 

//     for (const reelOne of arrays){

//         const randomReelOne = Math.floor(Math.random()) * reelOne.length
    

//         result.push(randomReelOnereelOne[randomSymbol])
//         const reelOneResult = reelOne[randomSymbol]

//     }

//     return result
// }

// console.log(result)

/**
 * Thoughts and conflictions 
 * 
 * start function 
 * 
 * make an empty array to hold the randomized symbols 
 * 
 * player makes a bet 
 * 
 * reel machine runs the function 
 * 
 * 
 * 
 * random symbols are chosen and placed into the empty reel
 * 
 * function checks if the reel symbols match 
 * 
 * if they match, the player wins and gains money
 * 
 * if they do not match the player loses and loses money 
 * 
 */

// const reelOne = ["A", "B", "C", "D", "E"] //indexes start at zero; arrays call via the indexes 

// const reelTwo = ["A", "B", "C", "D", "E"]

// const reelThree = ["A", "B", "C", "D", "E"]

 //example 

//  const reels = ["A", "B", "C", "D", "E"] //These are the symbols that I am using 

//  function pickSymbol(characterBasket){
//     const randomCharacterIndex = Math.floor(Math.random().characterBasket.length) //grabs the random character from the array

//     return characterBasket[randomCharacterIndex]
//  }

//  const selectedCharacter = pickSymbol(selectedSymbols)

//  console.log(selectedCharacter)

//  const reelOne = ["A", "B", "C", "D", "E"] //indexes start at zero; arrays call via the indexes 
//  const reelTwo = ["A", "B", "C", "D", "E"]
//  const reelThree = ["A", "B", "C", "D", "E"]

//  function pickFromThreeBaskets(firstReel, secondReel, thirdReel){
//     const result = []

//     result.push(pickSymbol(firstReel))
//      result.push(pickSymbol(secondReel))
//       result.push(pickSymbol(thirdReel))

//       return result
//  }

//  const pickSymbol = pickFromThreeBaskets(reelOne, reelTwo, reelThree)

//  console.log()

//--------------------------------------------------------------------------------------
/** 
 * FINAL TEMPLATE FOR SLOT MACHINE 
 * 
 * CORE ROLES FOR MY GAME
 * 
 * Slot machine is comprised of 3 reels at minimum; aiming for 6 reels 
 * There are 5 symbols on each reel
 * The user must pick which reel they are betting on 
 * User must bet money; cannot have empty input
 * There must be a balance for the user to see 
 * The user has a minimum and maximum that they are allowed to bet
 * 
 * 
 * How to Get to Heaven From Belfast -> Murder mystery show; make game murder mystery themed?? 
 * 
 * yes, i am a GENIUS IT WORKS  YEE HAWWWWWWW
 */

//Slot machine logic 

//State: tracking variables goes here; is the users bet valid
let currentBalance = 100; 
const userMinBet = 5
const userMaxBet = 50




//HOOKS
//where they enter the bet
const userBetInput = document.getElementById('userBetInput')

//button user uses to spin the reel 
const userSpinsReelButton = document.getElementById('userSpinsReelButton')

//display message for the game 
const gameMessageToUser = document.getElementById('gameMessageToUser')


const userBalanceDisplay = document.getElementById('userBalance')
//the reels themselves 

const reelSymbols = ["A", "B", "C", "D", "E"]
const allReels = [reelSymbols, reelSymbols, reelSymbols]

const reels = [
   document.getElementById('reelOne'), 
   document.getElementById('reelTwo'), 
   document.getElementById('reelThree')
]

//now that JS knows these inputs exist; how would the user interact with them? How does the spin button know what to do? click events 


//use the arrow function; there is no hoisting with arrow functions 
const reelSpin = () => { 
   //function body goes in here 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
let currentBet = parseInt(userBetInput.value)

if (currentBet < userMinBet || currentBet > userMaxBet){
   gameMessageToUser.innerText = "You must place a bet between $5 and $50. "
   return

}

if (currentBet > currentBalance){
   gameMessageToUser.innerText = "You do not have enough money to place this bet. Sucks to be you."
   return
}

   currentBalance -= currentBet

    userBalanceDisplay.innerText = `Your balance is: $${currentBalance}`

   let spinResults = []

   for(let i = 0; i < 3; i++){
      const currentReel = allReels[i]
      const randomIndex = Math.floor(Math.random() * currentReel.length)

      spinResults.push(currentReel[randomIndex])
      reels[i].innerText = spinResults[i]
   }

   if(spinResults[0] === spinResults[1] && spinResults[1] === spinResults[2]){
      currentBalance += currentBet * 2
      gameMessageToUser.innerText = `You win! Escape now before they murder you, detective.`
   }else{
      gameMessageToUser.innerText = `You lose. Uh oh.`
   }
}


// if (isNan(currentBet)){
//    gameMessageToUser.innerText = "You must enter a bet to play."
// }
userSpinsReelButton.addEventListener('click', reelSpin) //how does the computer know what to do? Instructions -> function 


if (isNan(currentBet)){
   gameMessageToUser.innerText = "You must enter a bet to play."
}