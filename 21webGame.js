document.addEventListener("DOMContentLoaded", () => {
    configureButtonListener()
})
const configureButtonListener = () => {
    getStartButtonInfo().addEventListener("click", loadCardDeck)
}

const loadCardDeck = () => {
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
        .then(response => {
            return response.json()
        })
        .then(deckData => {
            console.log(deck)
        })
        .catch(error => {
            console.log(error)
        })
}