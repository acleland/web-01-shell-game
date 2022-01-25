// import functions and grab DOM elements
const shellContainer1 = document.getElementById('shellContainer1');
const shellContainer2 = document.getElementById('shellContainer2');
const shellContainer3 = document.getElementById('shellContainer3');

const coin1 = document.getElementById('coin-1');
const coin2 = document.getElementById('coin-2');
const coin3 = document.getElementById('coin-3');

const totalDisplay = document.getElementById('totalDisplay');
const winsDisplay = document.getElementById('winsDisplay');
const lossesDisplay = document.getElementById('lossesDisplay');


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

testGetCorrect();



  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
