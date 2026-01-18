/*
	* Author: Zachary Fowler
	* Version: 1.0.0
	* Date: 2026-1-14
	* This file run a blakcjack card game, but without the split or double down 
	*/

package main

import (
	"fmt"
	"math/rand"
	"strings"
	"time"
)

func main() {

	// instructions
	fmt.Println("WELCOME TO BLACKJACK!")
	fmt.Println("\nPress Enter to start the game:")
	fmt.Scanln()

	fmt.Println("\nPress Enter to view instructions or continue to the game:")
	fmt.Scanln()

	fmt.Println("\n                                  INSTRUCTIONS")
	fmt.Println("Objective: Get as close to 21 as possible without going over.")
	fmt.Println("- Number cards (2-10) are worth their face value.")
	fmt.Println("- Face cards (Jack, Queen, King) are worth 10.")
	fmt.Println("- Ace can be 1 or 11 depending on what helps you the most.")
	fmt.Println("\nOptions during your turn:")
	fmt.Println("- Hit (h): Draw another card")
	fmt.Println("- Stand (s): End your turn")
	fmt.Println("\nDealer rules:")
	fmt.Println("- Dealer shows one card initially.")
	fmt.Println("- Dealer draws until total >= 17")
	fmt.Println("\nWinning rules:")
	fmt.Println("- Bust over 21 = lose")
	fmt.Println("- Dealer bust = you win")
	fmt.Println("- Higher total without bust = win")
	fmt.Println("\nPress Enter to continue to the game...")
	fmt.Scanln()

	fmt.Println("\nThe game will begin!\n")

	// variables
	var playerCards [10]string
	var playerSuits [10]string
	var dealerCards [10]string
	var dealerSuits [10]string

	var playerCardIndex int
	var dealerCardIndex int

	var playerTotal int
	var playerSoftAces int

	var dealerTotal int
	var dealerSoftAces int

	var optionKey string

	var playerCard int
	var playerCardName string
	var playerCardValue int
	var playerSuitName string

	var dealerCard int
	var dealerCardName string
	var dealerCardValue int
	var dealerSuitName string

	var gameOver bool
	gameOver = false
	var stand bool
	stand = false

	var suits [4]string
	suits[0] = "Diamonds"
	suits[1] = "Clubs"
	suits[2] = "Hearts"
	suits[3] = "Spades"

	// random card each playthrough. This is the only way i could find to do this 
	rand.Seed(time.Now().UnixNano())

	//                                              PLAYER
	playerCardIndex = 0
	playerTotal = 0
	playerSoftAces = 0

	for i := 0; i < 2; i++ {
		playerCard = rand.Intn(13) + 1
		playerSuitName = suits[rand.Intn(4)]

		if playerCard == 1 {
			playerCardName = "Ace"
			playerCardValue = 11
			playerSoftAces++
		} else if playerCard == 11 {
			playerCardName = "Jack"
			playerCardValue = 10
		} else if playerCard == 12 {
			playerCardName = "Queen"
			playerCardValue = 10
		} else if playerCard == 13 {
			playerCardName = "King"
			playerCardValue = 10
		} else {
			playerCardName = fmt.Sprintf("%d", playerCard)
			playerCardValue = playerCard
		}

		playerCards[playerCardIndex] = playerCardName
		playerSuits[playerCardIndex] = playerSuitName
		playerCardIndex++
		playerTotal += playerCardValue
	}

	fmt.Println("Your cards:")
	for i := 0; i < playerCardIndex; i++ {
		fmt.Println(playerCards[i], "of", playerSuits[i])
	}
	fmt.Println("Your total:", playerTotal)

	// dealer first card 
	dealerCardIndex = 0
	dealerTotal = 0
	dealerSoftAces = 0

	dealerCard = rand.Intn(13) + 1
	dealerSuitName = suits[rand.Intn(4)]

	if dealerCard == 1 {
		dealerCardName = "Ace"
		dealerCardValue = 11
		dealerSoftAces++
	} else if dealerCard == 11 {
		dealerCardName = "Jack"
		dealerCardValue = 10
	} else if dealerCard == 12 {
		dealerCardName = "Queen"
		dealerCardValue = 10
	} else if dealerCard == 13 {
		dealerCardName = "King"
		dealerCardValue = 10
	} else {
		dealerCardName = fmt.Sprintf("%d", dealerCard)
		dealerCardValue = dealerCard
	}

	dealerCards[dealerCardIndex] = dealerCardName
	dealerSuits[dealerCardIndex] = dealerSuitName
	dealerCardIndex++
	dealerTotal += dealerCardValue

	fmt.Println("\nDealer shows:")
	fmt.Println(dealerCards[0], "of", dealerSuits[0])

	//                                                     PLAYER OPTIONS
	stand = false
	for !stand && !gameOver {
		fmt.Println("\nType 'h' to hit or 's' to stand:")
		fmt.Scanln(&optionKey)
		optionKey = strings.ToLower(strings.TrimSpace(optionKey))

		if optionKey == "h" {
			// draw card
			playerCard = rand.Intn(13) + 1
			playerSuitName = suits[rand.Intn(4)]

			if playerCard == 1 {
				playerCardName = "Ace"
				playerCardValue = 11
				playerSoftAces++
			} else if playerCard == 11 {
				playerCardName = "Jack"
				playerCardValue = 10
			} else if playerCard == 12 {
				playerCardName = "Queen"
				playerCardValue = 10
			} else if playerCard == 13 {
				playerCardName = "King"
				playerCardValue = 10
			} else {
				playerCardName = fmt.Sprintf("%d", playerCard)
				playerCardValue = playerCard
			}

			playerCards[playerCardIndex] = playerCardName
			playerSuits[playerCardIndex] = playerSuitName
			playerCardIndex++
			playerTotal += playerCardValue

			// downgrade aces if over 21
			for playerTotal > 21 && playerSoftAces > 0 {
				playerTotal -= 10
				playerSoftAces--
			}

			fmt.Println("You drew:", playerCardName, "of", playerSuitName)
			fmt.Println("Your total:", playerTotal)

			if playerTotal > 21 {
				fmt.Println("Bust! You went over 21. Dealer wins.")
				gameOver = true
			}

		} else if optionKey == "s" {
			stand = true
		}
	}

	//                                                 DEALER 
	if !gameOver {
		fmt.Println("\nDealer's turn:")
		for dealerTotal < 17 {
			dealerCard = rand.Intn(13) + 1
			dealerSuitName = suits[rand.Intn(4)]

			if dealerCard == 1 {
				dealerCardName = "Ace"
				dealerCardValue = 11
				dealerSoftAces++
			} else if dealerCard == 11 {
				dealerCardName = "Jack"
				dealerCardValue = 10
			} else if dealerCard == 12 {
				dealerCardName = "Queen"
				dealerCardValue = 10
			} else if dealerCard == 13 {
				dealerCardName = "King"
				dealerCardValue = 10
			} else {
				dealerCardName = fmt.Sprintf("%d", dealerCard)
				dealerCardValue = dealerCard
			}

			dealerCards[dealerCardIndex] = dealerCardName
			dealerSuits[dealerCardIndex] = dealerSuitName
			dealerCardIndex++
			dealerTotal += dealerCardValue

			for dealerTotal > 21 && dealerSoftAces > 0 {
				dealerTotal -= 10
				dealerSoftAces--
			}

			fmt.Println("Dealer drew:", dealerCardName, "of", dealerSuitName)
			fmt.Println("Dealer total:", dealerTotal)
		}
	}

	//                                                     COMPARISON
	if !gameOver {
		fmt.Println("\nComparison:")
		fmt.Println("Your total:", playerTotal)
		fmt.Println("Dealer total:", dealerTotal)

		if dealerTotal > 21 {
			fmt.Println("Dealer busts! You win!")
		} else if dealerTotal > playerTotal {
			fmt.Println("Dealer wins.")
		} else if dealerTotal < playerTotal {
			fmt.Println("You win!")
		} else {
			fmt.Println("Draw. Both sides are equal")
		}
	}
}
