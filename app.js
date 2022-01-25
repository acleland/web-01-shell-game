// import functions and grab DOM elements

const coin1 = document.getElementById('coin-1');
const coin2 = document.getElementById('coin-2');
const coin3 = document.getElementById('coin-3');

const totalDisplay = document.getElementById('totalDisplay');
const winsDisplay = document.getElementById('winsDisplay');
const lossesDisplay = document.getElementById('lossesDisplay');

const button1 = document.getElementById('shell-1-button');
const button2 = document.getElementById('shell-2-button');
const button3 = document.getElementById('shell-3-button');

// let state
let total = 0;
let wins = 0;
const coins = [coin1, coin2, coin3];

function getCorrect() {
    let index = Math.floor(Math.random() * 3);
    return coins[index];
}

function testGetCorrect() {
    for (let i = 0; i < 20; i++) {
        console.log(getCorrect());
    }
}

// Set event listeners
function onButton(e, userGuess) {
    // reset display
    for (let coin of coins) {
        coin.classList.remove('reveal');
    }
    // Get correct coin to reveal
    const correctCoin = getCorrect();

    // use user input to update state 
    total++;
    correctCoin.classList.add('reveal');

    if (userGuess === correctCoin) {
        wins++;
    }
    
    // update DOM to reflect the new state
    winsDisplay.innerText = wins;
    totalDisplay.innerText = total;
    lossesDisplay.innerText = total - wins; 

}

button1.addEventListener('click', (e) => {
    onButton(e, coin1);
});
button2.addEventListener('click', (e) => {
    onButton(e, coin2);
});
button3.addEventListener('click', (e) => {
    onButton(e, coin3);
});
