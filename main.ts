/**
 * @author: Zachary Fowler
 * @version: 1.0.0
 * @date: 2026-1-14
 * @fileoverview: This file run a blackjack card game 
 */



// variables 
let dealerCard1: number = 0
let playerCard1: number = 0
let playerCardName: string = ""
let dealerCardName: string = ""
let playerTotalValue: number = 0
let dealerTotalValue: number = 0
let playerSuit: number = 0
let playerSuitName: string = ""
let dealerSuit: number = 0
let dealerSuitName: string = ""
let playerCardCounter: number = 0
let dealerCardCounter: number = 0
let dealerSuitCounter: number = 0
let playerSuitCounter: number = 0
let stand: number = 0
let startKey: string = ""
let optionKey: string = ""
let doubleDown: number = 0
let firstHandTotal: number = 0
let secondHandTotal: number = 0
let playerace: number = 0
let dealerDraw: number = 0
let softAces: number = 0
let dealersoftAces: number = 0
let firstHandSoftAce: number = 0
let secondHandSoftAce: number = 0
// booleans
let gameover = false
let split = false
let handDone = false
let drawDone = false
// arrays
let playerCards: string[] = []
let dealerCard: string [] = []
let playerTotalSuits: string [] = []
let dealerTotalSuits: string [] = []
let firstHandCards: string [] = []
let secondHandCards: string [] = []
let secondHandSuits: string[] = []
let firstHandSuits: string[] = []


// INPUT
// initial starting input
prompt("\nTo begin the game, enter any key:     ");
startKey = prompt("\nIf you would wish, press the 'i' key to view instructions. If you wish to continue to the game, press the 'c' key, and Good Luck!:     ".toLowerCase().trim()) ||""

while (startKey !== 'c' && startKey !== 'i') {
  console.log("Input a valid key.")
  startKey = (prompt("\nIf you would wish, press the 'i' key to view instructions. If you wish to continue to the game, press the 'c' key, and Good Luck!:     ".toLowerCase().trim()) || "")
};

// instrucitons 
if (startKey == "i") {
  console.log("\n                                                                        INSTRUCTIONS")
  console.log("\n\nObjective:  Acheive a total card value close to 21 without going over.") 
  console.log("            The cards the player has in their hand will add up to a total value, and the player must choose to either add more cards to that total value, or keep that value as their final.")
  console.log("            Face cards such as King, Queen, and Jack are counted as a value of 10, whilst the Ace is counted as either a 1 or a 11 based on what is best for the player.")
  console.log("            Once a player decides to keep the total value that is in their hand, the player will then have to compare their total value to the dealer's hand.")
  console.log("            Whatever hand is closer to 21 without going over will be declared the victor.")
  console.log("\nHit (h):  The hit option is the option to obtain another card to add to the total value.")
  console.log("          A player is allowed to hit as many times as they wish to, until the player exceeds a total value of 21.")
  console.log("\nStand (s):  The stand option is option to keep the current value the player has.")
  console.log("            The player is allowed to use this option whenever they wish to, and cause the final part of the game to occur.")
  console.log("\nSpit (p):  This optoin is a rare option with it only being able to be used when the two initial cards that are dealt to the player are of the same value.")
  console.log("           The player will be able to split their cards into two different hands, and play two consecutive games at once.")
  console.log("           In the final comparison with the dealer, the player will have two chances to win instead of only one.")
  console.log("\nDouble Down (d):  This input allows the user to be able to go 'all or nothing'.")
  console.log("                  This option will cause the player to draw only one card to add to their total value, but then immidietly cause them to stand and enter the comparison round.")
  console.log("                  This option also causes the user to gain two extra points if they are successful, but lose two points if they were to fail.")
  console.log("                  This option can only be used on the very first round of the game, and will no longer be an option after a differnt option is chosen.")
  console.log("\nInstant Win:  A rare occurance of the player starting with the total value of 21, an ace and a ten card value, will allow the player to instantly win 2 points.")
  console.log("\nDraw:  If a player and the dealer were to have the same total value, the game would end in a draw with the player not gaining or losing any points.")
  prompt("\nPress any key to continue to the main game: \n")
}
// Skipped instrctions 
else {
console.log("\nThe game will begin! \n")
}

// introduction
console.log("\n                                                     WELCOME TO BALCKJACK\n\n\n")

//                                                                                  PLAYER
// generate the 2 cards for the player
softAces = 0
secondHandSoftAce = 0
firstHandSoftAce = 0
stand = 0
dealersoftAces = 0
for (playerCardCounter = 0; playerCardCounter < 2; playerCardCounter++) {
  // randomizing number
  playerCard1 = Math.floor(Math.random() * 13) + 1
  // first card's face card edits 
  if (playerCard1 == 1) {
    playerCardName = "Ace"
    playerCard1 = 11
  }
  else if (playerCard1 == 11) {
    playerCardName = "Jack"
    playerCard1 = 10
  }
  else if (playerCard1 == 12) {
    playerCardName = "Queen"
    playerCard1 = 10
  }
  else if (playerCard1 == 13) {
    playerCardName = "King"
    playerCard1 = 10
  }
  else {
    // applying all possible outcomes to one variable
    playerCardName = playerCard1.toString()
  }
  // count aces 
  if (playerCardName === "Ace") {
    softAces++
  }
  // adding to total value 
  playerTotalValue += playerCard1
  // storing values in arrays
  playerCards[playerCardCounter] = String(playerCardName)
}

// generate the 2 suits for the player
for (playerSuitCounter = 0; playerSuitCounter < 2; playerSuitCounter++) {
  playerSuit = Math.floor(Math.random() * 4)

  if (playerSuit == 1) {
    playerSuitName = "Clubs"
  }
  else if (playerSuit == 2) {
    playerSuitName = "Hearts"
  }
  else if (playerSuit == 3) {
    playerSuitName = "Spades"
  }
  else{
    playerSuitName = "Diamonds"
  }
// storing values in arrays
  playerTotalSuits[playerSuitCounter] = String(playerSuitName)
}

// OUTPUT
// displaying stored information in arrays
console.log("Your dealt cards: \n")
for (let i = 0; i < playerCards.length; i++) {
  console.log(`${playerCards[i]} of ${playerTotalSuits[i]}`)
  }
  // total value output
console.log(`Your total current value is: ${playerTotalValue}`)

// instant win
if (playerTotalValue === 21) {
  console.log("\nBLACKJACK! Instant Win!");
  console.log("You were dealt 21 total value.")
  console.log("You win instantly!\n")

  // End current round
  stand = 1;
  gameover = true
}

//                                                                                  DEALER
if (gameover != true) {
  dealersoftAces = 0
  // generate the card for the dealer
  dealerCard1 = Math.floor(Math.random() * 13) + 1;

  // dealer card's face card edits 
  if (dealerCard1 == 1) {
    dealerCardName = "Ace"
    dealerCard1 = 11
  }
  else if (dealerCard1 == 11) {
    dealerCardName = "Jack"
    dealerCard1 = 10
  }
  else if (dealerCard1 == 12) {
    dealerCardName =  "Queen"
    dealerCard1 = 10
  }
  else if (dealerCard1 == 13) {
    dealerCardName = "King"
    dealerCard1 = 10
  }
    // applying all possible outcomes to one variable
  else {
    dealerCardName = dealerCard1.toString()
  }
  // storing in array
  dealerCard[0] = dealerCardName

  // adding to total value 
  dealerTotalValue = dealerCard1

  if (dealerCardName === "Ace") {
    dealersoftAces++
  }


  // generate a card suit for dealer
  dealerSuit = Math.floor(Math.random() * 4)

  if (dealerSuit == 1) {
    dealerSuitName = "Clubs"
  }
  else if (dealerSuit == 2) {
    dealerSuitName = "Hearts"
  }
  else if (dealerSuit == 3) {
    dealerSuitName = "Spades"
  }
  else {
    dealerSuitName = "Diamonds"
  }
  // storing values in arrays
  dealerTotalSuits[0] = String(dealerSuitName)


  // displaying stored information in arrays
  console.log("\n\nDealer's dealt card: \n")
  for (let i = 0; i < dealerCard.length; i++) {
    console.log(`${dealerCard[i]} of ${dealerTotalSuits[i]}`)
  }
  // total value output
  console.log(`The dealer's total current value is: ${dealerTotalValue}\n\n\n`)
}

//                                                                                  OPTIONS
doubleDown = 0
while (stand === 0) {

  optionKey = (prompt("Would you like to: Hit(h), Stand(s)?, Split(p), or Double Down (d): ".toLowerCase().trim()) || "")

  while (optionKey !== 'h' && optionKey !== 's' && optionKey !== 'p' && optionKey !== 'd') {
    console.log("Input a valid key."); optionKey = (prompt("Would you like to: Hit(h) or Stand(s)?: ".toLowerCase().trim()) || "")
  }

  //                                                                      HIT 
  if (optionKey === "h") {
    doubleDown = 1
    // generate card
    playerCard1 = Math.floor(Math.random() * 13) + 1

    if (playerCard1 === 1) {
      playerCardName = "Ace"
      playerCard1 = 11
    }
    else if (playerCard1 == 11) {
      playerCardName = "Jack"
      playerCard1 = 10
    }
    else if (playerCard1 == 12) {
      playerCardName = "Queen"
      playerCard1 = 10
    }
    else if (playerCard1 == 13) {
      playerCardName = "King"
      playerCard1 = 10
    }
    else {
      playerCardName = playerCard1.toString()
    }

    // generate suit
    playerSuit = Math.floor(Math.random() * 4)

    if (playerSuit === 1) {
      playerSuitName = "Clubs"
    }
    else if (playerSuit === 2) {
      playerSuitName = "Hearts"
    }
    else if (playerSuit === 3) {
      playerSuitName = "Spades"
    }
    else {
      playerSuitName = "Diamonds"
    }

    // store in arrays
    playerCards[playerCardCounter] = playerCardName
    playerTotalSuits[playerSuitCounter] = playerSuitName

    playerTotalValue += playerCard1

    // over 21 total value
    // count the amount of aces
    if (playerCardName === "Ace") {
      softAces++
    }
    // downgrade aces to a 1 when needed
    while (playerTotalValue > 21 && softAces > 0) {
      playerTotalValue -= 10
      softAces--
    }
    // display card
    console.log(`\nYou drew: ${playerCardName} of ${playerSuitName}`)
    console.log(`Total value: ${playerTotalValue}\n`)

    // bust
    if (playerTotalValue > 21) {
      console.log("\nBust! You went over 21.")
      stand = 1
      gameover = true
      break
      }
    
    // increase counter by 1
    playerCardCounter++
    playerSuitCounter++
  }
  //                                                                             DOUBLE DOWN
  else if (optionKey === 'd' && doubleDown != 1){
    // generate card
    playerCard1 = Math.floor(Math.random() * 13) + 1

    if (playerCard1 === 1) {
      playerCardName = "Ace"
      playerCard1 = 11
    }
    else if (playerCard1 == 11) {
      playerCardName = "Jack"
      playerCard1 = 10
    }
    else if (playerCard1 == 12) {
      playerCardName = "Queen"
      playerCard1 = 10
    }
    else if (playerCard1 == 13) {
      playerCardName = "King"
      playerCard1 = 10
    }
    else {
      playerCardName = playerCard1.toString()
    }

    // generate suit
    playerSuit = Math.floor(Math.random() * 4)

    if (playerSuit === 1) {
      playerSuitName = "Clubs"
    }
    else if (playerSuit === 2) {
      playerSuitName = "Hearts"
    }
    else if (playerSuit === 3) {
      playerSuitName = "Spades"
    }
    else {
      playerSuitName = "Diamonds"
    }

    // store in arrays
    playerCards[playerCardCounter] = playerCardName
    playerTotalSuits[playerSuitCounter] = playerSuitName

    playerTotalValue += playerCard1
    // display card
    console.log(`\nYou drew: ${playerCardName} of ${playerSuitName}`)

    // over 21 total value
    // count the amount of aces\
    if (playerCardName === "Ace") {
      softAces++
    }
    // downgrade aces to a 1 when needed
    while (playerTotalValue > 21 && softAces > 0) {
      playerTotalValue -= 10
      softAces--
    }
    // display total value
    console.log(`Total value: ${playerTotalValue}\n`)

    // bust
    if (playerTotalValue > 21) {
      console.log("\nBust! You went over 21.")
      stand = 1;
      gameover = true
    }
    // increase counter by 1
    playerCardCounter++
    playerSuitCounter++
    doubleDown = 1
    stand = 1
  }
  else if (optionKey === "d" && doubleDown === 1) {
    console.log("You cannot double down if you have already hit once.\n")
    stand = 0
  }
  //                                                                  STAND 
  else if (optionKey === "s") {
    stand = 1;
    console.log("\nYou chose to stand.")
  }
  //                                                                     SPLIT
  else if (optionKey === "p" && playerCards[0] === playerCards[1]) {
      split = true
      console.log("\nYou chose to split your hand.\n")

        // changing the arrays so that the secodn card is removed until later
        // store first two cards into separate hands
        firstHandCards[0] = playerCards[0]
        firstHandSuits[0] = playerTotalSuits[0]
        secondHandCards[0] = playerCards[1]
        secondHandSuits[0] = playerTotalSuits[1]

        // reset arrays
        playerCards = []
        playerTotalSuits = []
        playerTotalValue = 0
        playerace = 0
        playerCardCounter = 0
        playerSuitCounter = 0

        //                                                              FIRST HAND
        console.log("Playing first hand:\n")

        // put first card back into player arrays
        playerCards[playerCardCounter] = firstHandCards[0]
        playerTotalSuits[playerSuitCounter] = firstHandSuits[0]

        // set value for first card
        if (playerCards[playerCardCounter] === "Ace"){
          playerTotalValue = 11
          firstHandSoftAce = 1
        }
        else if (
          playerCards[playerCardCounter] === "King" ||
          playerCards[playerCardCounter] === "Jack" ||
          playerCards[playerCardCounter] === "Queen"
        ) {
          playerTotalValue = 10
        }
        else playerTotalValue = parseInt(playerCards[playerCardCounter])

        playerCardCounter++
        playerSuitCounter++

        
        while (stand === 0) {
          optionKey = (prompt("First hand: Hit(h) or Stand(s): ".toLowerCase().trim()) || "")
          while (optionKey !== "h" && optionKey !== "s") {
            console.log("Input a valid key.")
            optionKey = (prompt("First hand: Hit(h) or Stand(s): ".toLowerCase().trim()) || "")
          }

          if (optionKey === "h") {
            // draw card
            playerCard1 = Math.floor(Math.random() * 13) + 1
            if (playerCard1 === 1) { 
              playerCardName = "Ace"
              playerCard1 = 11 
            }
            else if (playerCard1 == 11) { 
              playerCardName = "Jack"
              playerCard1 = 10 
            }
            else if (playerCard1 == 12) { 
              playerCardName = "Queen"
              playerCard1 = 10 
            }
            else if (playerCard1 == 13) { 
              playerCardName = "King"
              playerCard1 = 10 }
            else { 
              playerCardName = playerCard1.toString() 
            }

            // generate suit
            playerSuit = Math.floor(Math.random() * 4)
            if (playerSuit === 1) {
              playerSuitName = "Clubs"
            }
            else if (playerSuit === 2) {
            playerSuitName = "Hearts"
            }
            else if (playerSuit === 3) { 
              playerSuitName = "Spades"
            }
            else {
              playerSuitName = "Diamonds"
            }

            // store card and suit
            playerCards[playerCardCounter] = playerCardName
            playerTotalSuits[playerSuitCounter] = playerSuitName

            // add to total value
            playerTotalValue += playerCard1;

            // convert aces to 1 when needed
            if (playerCardName === "Ace") {
              firstHandSoftAce++
            }
            }
            while (playerTotalValue > 21 && firstHandSoftAce > 0) {
              playerTotalValue -= 10
              firstHandSoftAce--
            }

            console.log(`\nYou drew: ${playerCardName} of ${playerSuitName}`)
            console.log(`First hand total: ${playerTotalValue}\n`)
            // prepare for final comparison
            firstHandTotal = playerTotalValue
            playerCardCounter++
            playerSuitCounter++

            if (firstHandTotal > 21) {
              console.log("Bust! First hand went over 21.\n")
              stand = 1
            }
          else if (optionKey === "s") {
            firstHandTotal = playerTotalValue;
            stand = 1
            console.log("You chose to stand on first hand.\n")
          }
        }

        //                                                                   SECOND HAND 
        console.log("Playing second hand:\n")

        // Put second card back into arrays
        playerCards[playerCardCounter] = secondHandCards[0]
        playerTotalSuits[playerSuitCounter] = secondHandSuits[0]

        // set value for first card
        if (playerCards[playerCardCounter] === "Ace") {
          playerTotalValue = 11
          secondHandSoftAce = 1
        }
        else if (
          playerCards[playerCardCounter] === "King" ||
          playerCards[playerCardCounter] === "Jack" ||
          playerCards[playerCardCounter] === "Queen"
        ) {
          playerTotalValue = 10
        }
        else playerTotalValue = parseInt(playerCards[playerCardCounter])

        playerCardCounter++
        playerSuitCounter++

        stand = 0
        while (stand === 0) {
          optionKey = (prompt("Second hand: Hit(h) or Stand(s): ".toLowerCase().trim()) || "")
          while (optionKey !== "h" && optionKey !== "s") {
            console.log("Input a valid key.")
            optionKey = (prompt("Second hand: Hit(h) or Stand(s): ".toLowerCase().trim()) || "")
          }

          if (optionKey === "h") {
            // draw card
            playerCard1 = Math.floor(Math.random() * 13) + 1
            if (playerCard1 === 1) {
              playerCardName = "Ace"
              playerCard1 = 11
            }
            else if (playerCard1 == 11) {
              playerCardName = "Jack"
              playerCard1 = 10
            }
            else if (playerCard1 == 12) {
              playerCardName = "Queen"
              playerCard1 = 10
            }
            else if (playerCard1 == 13) {
              playerCardName = "King"
              playerCard1 = 10
            }
            else {
              playerCardName = playerCard1.toString()
            }

            // generate suit
            playerSuit = Math.floor(Math.random() * 4)
            if (playerSuit === 1) {
              playerSuitName = "Clubs"
            }
            else if (playerSuit === 2) {
              playerSuitName = "Hearts"
            }
            else if (playerSuit === 3) {
              playerSuitName = "Spades"
            }
            else {
              playerSuitName = "Diamonds"
            }

            // store card and suit
            playerCards[playerCardCounter] = playerCardName
            playerTotalSuits[playerSuitCounter] = playerSuitName

            // add to total value
            playerTotalValue += playerCard1

            // convert aces to 1 when needed
            if (playerCardName === "Ace") {
              secondHandSoftAce++
            }
          }
            while (playerTotalValue > 21 && secondHandSoftAce > 0) {
              playerTotalValue -= 10
              secondHandSoftAce--
            }

            // display card and total value
            console.log(`\nYou drew: ${playerCardName} of ${playerSuitName}`)
            console.log(`Second hand total: ${playerTotalValue}\n`)

            // prepare for final comparison
            secondHandTotal = playerTotalValue

            playerCardCounter++
            playerSuitCounter++

            if (secondHandTotal > 21) {
              console.log("Bust! Second hand went over 21.\n")
              stand = 1
            }
          else if (optionKey === "s") {
            secondHandTotal = playerTotalValue
            stand = 1
            console.log("You chose to stand on second hand.\n")
          }
        }
  } 
    else {
      console.log("You do not have the same 2 cards, so you cannot split.\n")
      stand = 0
    }
    
  
}

if (!gameover) {
  console.log("\n\n                                COMPARISON\n\n")

  //                                                                           DEALER DRAW

  dealerCard1 = Math.floor(Math.random() * 13) + 1
  if (dealerCard1 === 1) {
    dealerCardName = "Ace"
    dealerCard1 = 11
    dealersoftAces ++
  }
  else if (dealerCard1 == 11) {
    dealerCardName = "Jack"
    dealerCard1 = 10
  }
  else if (dealerCard1 == 12) {
    dealerCardName = "Queen"
    dealerCard1 = 10
  }
  else if (dealerCard1 == 13) {
    dealerCardName = "King"
    dealerCard1 = 10
  }
  else {
    dealerCardName = dealerCard1.toString()
  }

  // generate suit
  dealerSuit = Math.floor(Math.random() * 4)
  if (dealerSuit === 1) {
    dealerSuitName = "Clubs"
  }
  else if (dealerSuit === 2) {
    dealerSuitName = "Hearts"
  }
  else if (dealerSuit === 3) {
    dealerSuitName = "Spades"
  }
  else {
    dealerSuitName = "Diamonds"
  }

  // store card and suit
  dealerCard[dealerCardCounter] = dealerCardName
  dealerTotalSuits[dealerSuitCounter] = dealerSuitName
  // add to total value
  dealerTotalValue += dealerCard1
  dealerCardCounter ++
  dealerSuitCounter ++

  // display card and total value
  console.log(`\nDealer drew: ${dealerCardName} of ${dealerSuitName}`)
  console.log(`Dealer hand total: ${dealerTotalValue}\n`)

  //                                                                           EXTRA DEALER DRAW
  if (dealerTotalValue < 17){


    dealerDraw = 0
    // loops until dealer busts, or has a value over 16
    while (dealerDraw === 0) {

      //generate card
      if (dealerTotalValue < 21){
        dealerCard1 = Math.floor(Math.random() * 13) + 1
        if (dealerCard1 === 1) {
          dealerCardName = "Ace"
          dealerCard1 = 11
          dealersoftAces ++
        }
        else if (dealerCard1 == 11) {
          dealerCardName = "Jack"
          dealerCard1 = 10
        }
        else if (dealerCard1 == 12) {
          dealerCardName = "Queen"
          dealerCard1 = 10
        }
        else if (dealerCard1 == 13) {
          dealerCardName = "King"
          dealerCard1 = 10
        }
        else {
          dealerCardName = dealerCard1.toString()
        }

        // generate suit
        dealerSuit = Math.floor(Math.random() * 4)
        if (dealerSuit === 1) {
          dealerSuitName = "Clubs"
        }
        else if (dealerSuit === 2) {
          dealerSuitName = "Hearts"
        }
        else if (dealerSuit === 3) {
          dealerSuitName = "Spades"
        }
        else {
          dealerSuitName = "Diamonds"
        }

        // store card and suit
        dealerCard[dealerCardCounter] = dealerCardName
        dealerTotalSuits[dealerSuitCounter] = dealerSuitName
        // add to total value
        dealerTotalValue += dealerCard1
        dealerCardCounter ++
        dealerSuitCounter ++

        // convert aces to 1 when needed
        while (dealerTotalValue > 21 && dealersoftAces > 0) {
          dealerTotalValue -= 10
          dealersoftAces--
        }

        // display card and total value
        console.log(`\nDealer drew: ${dealerCardName} of ${dealerSuitName}`)
        console.log(`Dealer hand total: ${dealerTotalValue}`)

        // test to see if another card is needed
        if (dealerTotalValue > 16) {
          console.log("\nThe dealer will no longer draw any cards.")
        dealerDraw = 1
        }
        else {
          console.log("\nThe dealer is required to hit once again")
        }
      }
    }
  }
  //                                                                        Final comparison

  if (split) {
    console.log("\n              First hand results ")
    if (firstHandTotal > 21) {
      console.log("First hand busted.")
    }
    else if (dealerTotalValue > 21 || firstHandTotal > dealerTotalValue) {
      console.log("First hand wins!")
      console.log("Dealer Busted!")
    }
    else if (firstHandTotal === dealerTotalValue) {
      console.log("First hand ties!")
    }
    else {
      console.log("First hand loses!")
    }

    console.log("\n                Second hand result")
    if (secondHandTotal > 21) {
      console.log("Second hand busted.")
    }
    else if (dealerTotalValue > 21 || secondHandTotal > dealerTotalValue) {
      console.log("Second hand wins!")
      console.log("Dealer Busted!")
    }
    else if (secondHandTotal === dealerTotalValue) {
      console.log("Second hand ties!")
    }
    else {
      console.log("Second hand loses!")
    }
  }
  else {
    if (dealerTotalValue > 21 || playerTotalValue > dealerTotalValue) {
      console.log("\nYou Win!")
      console.log("Dealer Busted!")
    }
    else if (playerTotalValue === dealerTotalValue) {
      console.log("\nTie Game!")
    }
    else {
      console.log("\nYou Lose!")
    }
  }
}