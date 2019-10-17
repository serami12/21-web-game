document.addEventListener("DOMContentLoaded", () => {
    configureButtonListener()
})

//})

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
    -two to three card images: should be shown
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
          winner === 21
          loser--Busted -any number > 21
          Tie- === 21

        
        //CSS\\
    - As close to the demo as possible.
    