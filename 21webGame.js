document.addEventListener("DOMContentLoaded", () => {
    configureStartButtonListener();
    hideMainDiv();

    let cardContainer = document.querySelector("#cardContainer")
    console.log(cardContainer)
    let hitStayContainer = document.querySelector("#hitStayContainer")

    hitStayContainer.addEventListener("click", (event) => {
        if (event.target.innerText === "Hit") {
            loadHitCard();
        } else {
            loadStayCard();

        }
    })

})

let mainDeckId = null;
let playerHandArr = [];
let computerHand = [];
let playerScore = 0;
let compScore = 0;

const configureStartButtonListener = () => {
    const startGameButton = document.querySelector("#startGameButton")
    startGameButton.addEventListener("click", () => {
        hideStartButton();
        displayMainDiv();
        loadCardDeck();

    })
}

const hideMainDiv = () => {
    document.querySelector("#mainDiv").style.display = "none"
}
const displayMainDiv = () => {
    document.querySelector("#mainDiv").style.display = ""
}

const hideStartButton = () => {
    document.querySelector("#start-game").style.display = "none"
}

const loadCardDeck = () => {
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
        .then(response => {
            return response.json()
        })
        .then(deckData => {
            mainDeckId = deckData.deck_id

            drawCardForPlayer(2);

        })
        .catch(error => {
            console.log(error)
        })
}

let cardContainer = document.querySelector("#cardContainer")
let points = document.querySelector("#scoreBox")

const drawCardForPlayer = (count) => {
    const urlForTwoCards = (`https://deckofcardsapi.com/api/deck/${mainDeckId}/draw/?count=${count}`);

    fetch(urlForTwoCards)
        .then(response => {
            return response.json()
        })
        .then(deckData => {
            const cardsArr = deckData.cards
            displayPlayerCard(cardsArr);
            calculatePlayerScore(cardsArr);
        })
        .catch(error => {
            console.log(error)
        })
}

const calculatePlayerScore = (cardsArr) => {
    for (let i = 0; i < cardsArr.length; i++) {
        if (cardsArr[i].value === "KING" ||
            cardsArr[i].value === "QUEEN" ||
            cardsArr[i].value === "JACK") {
            cardsArr[i].value = 10;
        } else if (cardsArr[i].value === "ACE") {
            cardsArr[i].value = 1;
        } else {
            cardsArr[i].value = parseInt(cardsArr[i].value)
        }
        console.log("cardsArr[i].value", cardsArr[i].value)
        console.log("cardsArr", cardsArr)
        playerScore += cardsArr[i].value
    }
    let playerScoreTracker = document.querySelector("#playerScoreTracker")
    playerScoreTracker.innerText = `Player Score: ${playerScore}`

}

const displayPlayerCard = (cardsArr) => {
    let playerCardContainer = document.querySelector("#playerCardContainer")
    for (let i = 0; i < cardsArr.length; i++) {
        let cardImg = document.createElement("img")
        cardImg.src = cardsArr[i].image
        playerCardContainer.append(cardImg);
    }
}
const loadHitCard = () => {
    let result = 0;
    if (playerScore < 21) {
        drawCardForPlayer(1);
        result += playerScore
    }
    let playerScoreTracker = document.querySelector("#playerScoreTracker")
    playerScoreTracker.innerText = `Comp Score: ${playerScore}`
}



const drawCardForComputer = (count) => {
    const urlForTwoCards = (`https://deckofcardsapi.com/api/deck/${mainDeckId}/draw/?count=${count}`);
    fetch(urlForTwoCards)
        .then(response => {
            return response.json()
        })
        .then(deckData => {
            const cardsArr = deckData.cards
            displayCompCard(cardsArr);
            calculateComputerScore(cardsArr);
        })

        .catch(error => {
            console.log(error)
        })
}

const calculateComputerScore = (cardsArr) => {
        for (let i = 0; i < cardsArr.length; i++) {
            if (cardsArr[i].value === "KING" ||
                cardsArr[i].value === "QUEEN" ||
                cardsArr[i].value === "JACK") {
                cardsArr[i].value = 10
            } else if (cardsArr[i].value === "ACE") {
                cardsArr[i].value = 1
            } else {
                cardsArr[i].value = parseInt(cardsArr[i].value)
            }

            compScore += cardsArr[i].value
        }

        let compScoreTracker = document.querySelector("#compScoreTracker")
        compScoreTracker.innerText = `Comp Score: ${compScore}`