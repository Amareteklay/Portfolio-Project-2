document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('user-name').focus();
});

let play = document.getElementById('play-btn');
play.addEventListener('click', showGame);

let playNow = document.getElementById('now-play');
playNow.addEventListener('click', showGame);


function showGame(){
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('rules').style.display = 'none';
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
    user.innerHTML =userName.value;
}






/**
const computerScore = document.getElementById('compScore')
const userScore = document.getElementById('userScore')

const yourChoice = document.getElementById('user-choice')
const comChoice = document.getElementById('computer-choice')
const winner = document.getElementById('winner')

const strategy = document.getElementsByClassName('choice')
const winList = ['paperrock', 'rockscissors', 'scissorspaper', 'lizardpaper', 'spockrock', 'rocklizard', 'lizardspock', 'scissorslizard', 'paperspock', 'spockscissors'];

let cscore = 0;
let uscore = 0;

document.addEventListener('DOMContentLoaded', updateName);

document.addEventListener('DOMContentLoaded', showCell);

document.addEventListener('DOMContentLoaded', newStyle);

function showCell(){
    document.getElementById('grid-area').style.display = 'grid';
    }

function newStyle(){
    let ppp = document.getElementById('player-name');
    ppp.style.color = 'red';
}

function updateName(){
    let playerName = document.getElementById('player-name');
    playerName.innerHTML = 'PLAYER';
    //playerName.innerHTML = window.prompt('Enter your name', 'Player');
}

function computerPicks() {
    let randIndex = Math.floor(Math.random()*5);
    return strategy[randIndex].id
}

function play(){
    for (let i=0; i<strategy.length; i++) {
        strategy[i].addEventListener('click', determineWinner);
    }
}

function determineWinner(){
    let computer = computerPicks();
    let user = this.id;
    let userComputer = user + computer;
    if (winList.includes(userComputer)){
        uscore +=1;
        userScore.innerHTML = uscore;
        computerScore.innerHTML = cscore;
        yourChoice.innerHTML = user;
        comChoice.innerHTML = computer;
    } else if (user === computer){
        userScore.innerHTML = uscore;
        computerScore.innerHTML = cscore;
        yourChoice.innerHTML = user;
        comChoice.innerHTML = computer;
    }
    else {
        cscore +=1;
        userScore.innerHTML = uscore;
        computerScore.innerHTML = cscore;
        yourChoice.innerHTML = user;
        comChoice.innerHTML = computer;
    }
}

play();



// const playBtn = document.getElementById('play-btn');
// playBtn.addEventListener('click', startGame);

document.addEventListener('DOMContentLoaded', startGame);

function startGame(){
    let welcome = document.getElementById('welcome');
    if(welcome.style.display === 'none'){
        welcome.style.display = 'block';
    } else {
        let play = document.getElementById('play');
        play.style.display = 'block';
    }
}

// startGame();

**/