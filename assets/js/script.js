document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('user-name').focus();
});

let play = document.getElementById('play-btn');
play.addEventListener('click', showGame);

let playNow = document.getElementById('now-play');
playNow.addEventListener('click', showGame);

document.getElementById('play-again').addEventListener('click', showGame);
document.getElementById('play-again').addEventListener('click', resetChoiceColor);

function showGame() {
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('rules').style.display = 'none';
    document.getElementById('result').style.display = 'none';
    document.getElementById('play').style.display = 'block';
    updateName();
}

function resetChoiceColor() {
    let userChoice = document.getElementById('user-choice');
    if (userChoice.classList.contains('loser')) {
        userChoice.classList.remove('loser');
    } else if (userChoice.classList.contains('winner')) {
        userChoice.classList.remove('winner');
    } else if (userChoice.classList.contains('draw')) {
        userChoice.classList.remove('draw');
    }
    let comChoice = document.getElementById('computer-choice');
    if (comChoice.classList.contains('winner')) {
        comChoice.classList.remove('winner');
    } else if (comChoice.classList.contains('loser')) {
        comChoice.classList.remove('loser');
    } else if (comChoice.classList.contains('draw')) {
        comChoice.classList.remove('draw');
    }
}

// part of intialization
let rules = document.getElementById('rules-btn');
rules.addEventListener('click', showRules);

function showRules() {
    updateName();
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('rules').style.display = 'block';
}

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

let items = document.getElementsByClassName('choice');
for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', playGame);
}

function showResult() {
    document.getElementById('play').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    updateName();
}

function playGame() {
    showResult();
    let item = this.id;
    let comItem = computerPicks();
    displayStrategy(item, comItem);
    determineWinner(item, comItem);
}

function displayStrategy(item, comItem) {
    let userChoice = document.getElementById('user-choice');
    userChoice.innerHTML = document.getElementById(item).innerHTML;
    userChoice.classList.add('choice-result');

    let computerChoice = document.getElementById('computer-choice');
    computerChoice.innerHTML = comItem.innerHTML;
    computerChoice.classList.add('choice-result');
}

function computerPicks() {
    let randIndex = Math.floor(Math.random() * 5);
    return items[randIndex];
}

const winList = ['paperrock', 'rockscissors', 'scissorspaper', 'lizardpaper', 'spockrock', 'rocklizard', 'lizardspock', 'scissorslizard', 'paperspock', 'spockscissors'];

let userScore = 0;
let computerScore = 0;

function determineWinner(item, comItem) {
    let computer = comItem.id;
    let user = item;
    let userComputer = user + computer;
    let winner = document.getElementById('winner');
    let loser = document.getElementById('loser');
    let status = document.getElementById('status');
    if (winList.includes(userComputer)) {
        winner.innerHTML = user.charAt(0).toUpperCase() + user.slice(1);
        loser.innerHTML = computer.charAt(0).toUpperCase() + computer.slice(1);
        status.innerHTML = 'Beats';
        document.getElementById('user-choice').classList.add('winner');
        document.getElementById('computer-choice').classList.add('loser');
        document.getElementById('win-lose').innerHTML = 'You win!';
        userScore += 1;
        document.getElementById('player-score').innerHTML = userScore;
    } else if (user == computer) {
        document.getElementById('user-choice').classList.add('draw');
        document.getElementById('computer-choice').classList.add('draw');
        status.innerHTML = 'It is a draw.';
        document.getElementById('win-lose').innerHTML = '';
        winner.innerHTML = '';
        loser.innerHTML = '';
    } else {
        winner.innerHTML = computer.charAt(0).toUpperCase() + computer.slice(1);
        loser.innerHTML = user.charAt(0).toUpperCase() + user.slice(1);
        status.innerHTML = 'Beats';
        document.getElementById('user-choice').classList.add('loser');
        document.getElementById('computer-choice').classList.add('winner');
        document.getElementById('win-lose').innerHTML = 'You lose!';
        computerScore += 1;
        document.getElementById('computer-score').innerHTML = computerScore;
    }
}

let modal = document.getElementById('modal');
let questionIcon = document.getElementsByClassName('question-icon');
for (let i = 0; i < questionIcon.length; i++) {
    questionIcon[i].addEventListener('click', function () {
        modal.style.display = "block";
    });
}

let close = document.getElementById('close-icon');
close.addEventListener('click', function () {
    modal.style.display = 'none';
});

// Code from https://www.w3schools.com/howto/howto_css_modals.asp
window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});