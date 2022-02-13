document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('user-name').focus();
});

let play = document.getElementById('play-btn');
play.addEventListener('click', showGame);

let playNow = document.getElementById('now-play');
playNow.addEventListener('click', showGame);

document.getElementById('play-again').addEventListener('click', showGame);

function showGame(){
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('rules').style.display = 'none';
    document.getElementById('result').style.display = 'none';
    document.getElementById('play').style.display = 'block';
}

let rules = document.getElementById('rules-btn');
rules.addEventListener('click', showRules);

function showRules(){
    updateName();
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('rules').style.display = 'block';
}

function updateName(){
    let userName = document.getElementById('user-name');
    let user = document.getElementById('user');
    user.innerHTML = userName.value;
    document.getElementById('player').innerHTML = userName.value;
}

let items = document.getElementsByClassName('choice');
for (let i=0; i<items.length; i++) {
        items[i].addEventListener('click', playGame)
} 

function showResult(){
    document.getElementById('play').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    updateName();
}

function playGame(){
    showResult();
    let item = this.id;
    let comItem = computerPicks();
    displayStrategy(item, comItem);
    determineWinner(item, comItem);
}

function displayStrategy(item, comItem){
    let userChoice = document.getElementById('user-choice');
    userChoice.innerHTML = document.getElementById(item).innerHTML;
    userChoice.classList.add('choice');

    let computerChoice = document.getElementById('computer-choice');
    computerChoice.innerHTML = comItem.innerHTML;
    computerChoice.classList.add('choice');
}

function computerPicks() {
    let randIndex = Math.floor(Math.random()*5);
    return items[randIndex];
}

const winList = ['paperrock', 'rockscissors', 'scissorspaper', 'lizardpaper', 'spockrock', 'rocklizard', 'lizardspock', 'scissorslizard', 'paperspock', 'spockscissors'];

function determineWinner(item, comItem){
    let computer = comItem.id;
    let user = item;
    let userComputer = user + computer;
    let result = document.getElementById('userScore');
    if (winList.includes(userComputer)){
    result.innerHTML = user + ' beats ' + computer + '. You Won!';
    } else if (user == computer){
    result.innerHTML = 'It is a tie!';
    }
    else {
        result.innerHTML = computer + ' beats ' + user + '. You lost!';
    }
}

