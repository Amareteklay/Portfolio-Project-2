/* Initialization */
/** Focus input form as page loads so users can type directly*/
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('user-name').focus();
});

// Declare an array of the winning combinations
const winList = ['paperrock', 'rockscissors', 'scissorspaper', 'lizardpaper', 'spockrock', 'rocklizard', 'lizardspock', 'scissorslizard', 'paperspock', 'spockscissors'];

// Initialize scores
let userScore = 0;
let computerScore = 0;

//Initialize variables for buttons 
let play = document.getElementById('play-btn');
let playNow = document.getElementById('now-play');
let rules = document.getElementById('rules-btn');

// Display rules on click
rules.addEventListener('click', showRules);

/** Add evet listener to each choice that the player can make. */
let items = document.getElementsByClassName('choice');
for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', playGame);
}

// Display game screen when play button on home page is clicked
play.addEventListener('click', showGame);

//When play is clicked in the rules page
playNow.addEventListener('click', showGame);

//When play again button is clicked
document.getElementById('play-again').addEventListener('click', showGame);
document.getElementById('play-again').addEventListener('click', resetChoiceColor);

/** Make game screen visible */
function showGame() {
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('rules').style.display = 'none';
    document.getElementById('result').style.display = 'none';
    document.getElementById('play').style.display = 'block';
    updateName();
}

/** Set color of choice icons to green, red or blue for winning, losing and draw respectively */
function resetChoiceColor() {

    // Player's choice
    let userChoice = document.getElementById('user-choice');
    if (userChoice.classList.contains('loser')) {
        userChoice.classList.remove('loser');
    } else if (userChoice.classList.contains('winner')) {
        userChoice.classList.remove('winner');
    } else if (userChoice.classList.contains('draw')) {
        userChoice.classList.remove('draw');
    }

    //Computer's choice
    let comChoice = document.getElementById('computer-choice');
    if (comChoice.classList.contains('winner')) {
        comChoice.classList.remove('winner');
    } else if (comChoice.classList.contains('loser')) {
        comChoice.classList.remove('loser');
    } else if (comChoice.classList.contains('draw')) {
        comChoice.classList.remove('draw');
    }
}

/** Update name and display rules of the game */
function showRules() {
    updateName();
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('rules').style.display = 'block';
    document.querySelector('.question-icon').style.display = 'none';
}

/** Accept input or set default name to be Player*/
function updateName() {
    let userName = document.getElementById('user-name');
    let user = document.getElementById('user');
    if (userName.value != '') {
        user.innerHTML = userName.value;
        document.getElementById('player-name').innerHTML = userName.value;
    } else {
        user.innerHTML = 'Player';
        document.getElementById('player-name').innerHTML = 'Player';
    }
}

/** Show results screen */
function showResult() {
    document.getElementById('play').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    updateName();
}


/** Handle click event on any of the five possible choices. */
function playGame() {
    showResult();
    let item = this.id;
    let comItem = computerPicks();
    displayStrategy(item, comItem);
    determineWinner(item, comItem);
}


/** Display icons of choices made by player amd computer */
function displayStrategy(item, comItem) {
    let userChoice = document.getElementById('user-choice');
    userChoice.innerHTML = document.getElementById(item).innerHTML;
    userChoice.classList.add('choice-result');
    let computerChoice = document.getElementById('computer-choice');
    computerChoice.innerHTML = comItem.innerHTML;
    computerChoice.classList.add('choice-result');
}

/** Computer chooses randomly */
function computerPicks() {
    let randIndex = Math.floor(Math.random() * 5);
    return items[randIndex];
}


/** Evaluate game outcome and determine winner */
function determineWinner(item, comItem) {

    /** Initialization variables */

    let computer = comItem.id;
    let user = item;
    let userComputer = user + computer;
    let winner = document.getElementById('winner');
    let loser = document.getElementById('loser');
    let status = document.getElementById('status');

    /** Evaluate if player wins, loses or ties */
    /** Update score, display feedback */

    if (winList.includes(userComputer)) {
        /** If player wins */
        winner.innerHTML = user.charAt(0).toUpperCase() + user.slice(1);
        loser.innerHTML = computer.charAt(0).toUpperCase() + computer.slice(1);
        status.innerHTML = 'Beats';
        document.getElementById('user-choice').classList.add('winner');
        document.getElementById('computer-choice').classList.add('loser');
        document.getElementById('win-lose').innerHTML = 'You win!';
        userScore += 1;
        document.getElementById('player-score').innerHTML = userScore;
    } else if (user == computer) {
        /** If it is draw */
        document.getElementById('user-choice').classList.add('draw');
        document.getElementById('computer-choice').classList.add('draw');
        status.innerHTML = 'It is a draw.';
        document.getElementById('win-lose').innerHTML = '';
        winner.innerHTML = '';
        loser.innerHTML = '';
    } else {
        /** If the player wins */
        winner.innerHTML = computer.charAt(0).toUpperCase() + computer.slice(1);
        loser.innerHTML = user.charAt(0).toUpperCase() + user.slice(1);
        status.innerHTML = 'Beats';
        document.getElementById('user-choice').classList.add('loser');
        document.getElementById('computer-choice').classList.add('winner');
        document.getElementById('win-lose').innerHTML = 'You lose.';
        computerScore += 1;
        document.getElementById('computer-score').innerHTML = computerScore;
    }
}

/** Question mark icon toggles modal in all pages */
let modal = document.getElementById('modal');
let questionIcon = document.getElementsByClassName('question-icon');
for (let i = 0; i < questionIcon.length; i++) {
    questionIcon[i].addEventListener('click', function () {
        modal.style.display = "block";
    });
}

/** X icon closes modal on click */
let closeModal = document.getElementById('close-icon');
closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
});

/** Close modal by clicking anywhere on the window */
/** Code from https://www.w3schools.com/howto/howto_css_modals.asp */
window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});