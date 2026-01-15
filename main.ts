/**
 * @author: Zachary Fowler
 * @version: 1.0.0
 * @date: 2026-1-14
 * @fileoverview: This file run a blackjack card game 
 */


// variables 
let playerCard1: string = ""
let playerCard2: string = ""
let dealerCard: string = ""
let dealerFlippedCard: string = ""
let newPlayerCard: string = ""
let newDealerCard: string = ""

// INPUT
// initial starting input
prompt("\nTo begin the game, enter any key:     ");
let startKey: string = prompt("\nIf you would wish, press the 'i' key to view instructions. If you wish to continue to the game, press the 'c' key, and Good Luck!:     ") ||"".toLowerCase().trim();

while (startKey !== 'c' && startKey !== 'i') {
  console.log("Input a valid key.")
  startKey = (prompt("\nIf you would wish, press the 'r' key to view instructions. If you wish to continue to the game, press the 'c' key, and Good Luck!:     ") || "").toLowerCase().trim();
};

// instrucitons 
if (startKey == "i") {
  console.log("\n                                                                        INSTRUCTIONS")
  console.log("\n\nObjective:  Acheive a total card value close to 21 without going over.") 
  console.log("            The cards the player has in their hand will add up to a total value, and the player must choose to either add more cards to that total value, or keep that value as their final.")
  console.log("            Face cards such as King, Queen, and Jack are counted as a value of 10, whilst the Ace is counted as either a 1 or a 11 based on what is best for the player.")
  console.log("            Once a player decides to keep the total value that is in their hand, the player will then have to compare their total value to the dealer's hand.")
  console.log("            Whatever hand is closer to 21 without going over will be declared the victor.")
  console.log("            Obtain as many wins / points as you can to set a record.")
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
  console.log("\nPoints:  Each player will start with 5 points every game, and will try to acheive the most points they can until the user wants to finish.")
  console.log("         If a player is to have 0 or less points, they will instantly lose the game.")

}