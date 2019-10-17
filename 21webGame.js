document.addEventListener("DOMContentLoaded", () => {
    configureButtonListener();

})

let mainDeckId = null;
let playerHand = [];
let computerHand = [];

const configureButtonListener = () => {
    const startGameButton = getStartButtonInfo();
    startGameButton.addEventListener("click", loadCardDeck)
}
const getStartButtonInfo = () => {
    let startGameButton = document.querySelector("#startGameButton")
    return startGameButton;
}
const removeElement = (el) => {
    el.remove();

}

const loadCardDeck = () => {
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
        .then(response => {
            return response.json()
        })
        .then(deckData => {
            mainDeckId = deckData.deck_id
            // console.log(mainDeckId)
            const startGameButton = getStartButtonInfo();
            removeElement(startGameButton);
            drawCard(2)

            const hitButton = getHitButtonCard();
            drawCard(1)

            const stayButton = getStayButtonCard();
            drawCard(3)

        })
        .catch(error => {
            console.log(error)
        })
}

const drawCard = (count) => {
    const urlForTwoCards = `https://deckofcardsapi.com/api/deck/${mainDeckId}/draw/?count=${count}`;
    // console.log(count)
    fetch(urlForTwoCards)
        .then(response => {
            return response.json()
        })
        .then(deckData => {
            const cards = deckData.cards
            for (let i = 0; i < cards.length; i++) {
                playerHand.push(cards[i])
            }
        })
        .catch(error => {
            console.log(error)
        })

}
const configureHitListener = () => {
    const hitButton = getHitButtonCard();
    hitButton.addEventListener("click", loadHitCard)
}
const getHitButtonCard = () => {
    let hitButton = document.createElement("BUTTON");
    let hitB = document.createTextNode("Hit");
    hitButton.appendChild(hitB);
    document.body.appendChild(hitButton);
    return hitButton
}
const loadHitCard = (cards) => {
    for (let i = 0; i < cards.length; i++) {
        playerHand.push(cards[i])

    }
}

//condition that indicates if the player needs to draw another card

const configureStayListener = () => {
    const stayButton = getStayButtonCard();
    stayButton.addEventListener("click", loadStayCard)
}
const getStayButtonCard = () => {
    let stayButton = document.createElement("BUTTON");
    let stayB = document.createTextNode("Stay");
    stayButton.appendChild(stayB);
    document.body.appendChild(stayButton);
    return stayButton
}
const loadStayCard = () => {
    // const cards = deckData.cards
    // for (let i = 0; i < cards.length; i++) {
    //     computerHand.push(cards[i])

}
// }



// const removePreviousCards = () => {
//     let userHand = document.querySelector("#start-game")
//     let newPlayerHand = document.createElement("div")
//     while (userHand.firstChild) {
//         userHand.replaceChild(userHand, newPlayerHand)
//     }
// })
// }

/* Brainstorming 
 Game info indicates to complete the following:
        //HTML\\
1-A header(h1) that reads "Simple 21"
2-A div, with a start game button inside
3-includes the standard html tags like title,head,body etc. 

        //Javascript\\
1-Initialize the DomContentLoaded 
    - a button that displays "Start Game" and your website 
    should make a network request to get a **SHUFFLED NEW DECK.
    -clicks on the "START GAME" button, the button should be 
    replaced with the list below.To get this information you need
    to make a **DRAW A CARD request.
2-Start to create a startGameButton that when user 'click,' 
it will be 'replaced'(<--keyword) with the following: 
    -two to three card images: 
        should be shown like a list <ol> or <p>
    -two current score buttons--(must sum cards values)
        userHand vs computerHand:
        Need if and else statements to make sum equal to 21.
    -HIT button
        -If the sum of their value is greater than 21,
        -**replace** the entire div of cards, score and buttons with a header 
        that display "BUSTED".
            -If not, the current score should be updated to reflect 
            the value of the new card.(DRAW A NEW CARD request)
            -The two buttons should still be there
            for the player will choose again.
    -STAY button
        -three cards from the deck should be fetched
        -and those will be the computer's cards. 
        -Display the computer's cards  
        -and their score to right of the player's cards in a new div.

        computer:
        -If the computer 's score, is greater than 21 then display "YOU WIN". 
         If not, whichever score is closer to 21 wins.
        -Displays who wins under the game title and remove the buttons.
          
        Math:
          Number cards: 2 - 9 = Face Value 
          Letter cards: J, Q, K = 10 points
                        A = 1 point special card
          Options --
          winner hand === 21
          loser hand --(Busted)  > 21
          Tie hand- userHand and computerHand = 21

        //CSS\\
    - As close to the demo as possible.
    */