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
    updateName();
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
    if (userName.value != ''){
        user.innerHTML = userName.value;
        document.getElementById('player').innerHTML = userName.value;
        document.getElementById('player-name').innerHTML = userName.value;
        } else {
             user.innerHTML = 'Player';
            document.getElementById('player').innerHTML = 'Player';
            document.getElementById('player-name').innerHTML = 'Player';
        }
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
    userChoice.classList.add('choice-result');

    let computerChoice = document.getElementById('computer-choice');
    computerChoice.innerHTML = comItem.innerHTML;
    computerChoice.classList.add('choice-result');
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
    let result = document.getElementById('status-report');
    if (winList.includes(userComputer)){
        let winner = user.charAt(0).toUpperCase()+user.slice(1);
    result.innerHTML = winner + ' beats ' + computer + '.\n You Won!\n Congratulations!';
    } else if (user == computer){
    result.innerHTML = 'It is a tie. \n Do you want to try again?';
    }
    else {
        let winner = computer.charAt(0).toUpperCase()+computer.slice(1);
        result.innerHTML = winner + ' beats ' + user + '.\n You lost!';
    }
}

