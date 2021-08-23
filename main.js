'use strict';

const gameContainer = document.querySelector('.game__container');
const startBanner = document.querySelector('.game__start__banner');
const TryAgainMessage = document.querySelector('.game__banner1');
const LevelUpMessage = document.querySelector('.game__banner2');
const startBtn = document.querySelector('.startBtn');
const gameTimer = document.querySelector('.game__timer');

let started = false;
const timeDuration = 60;
let timer;

// Game start
startBtn.addEventListener('click', initGame);
function initGame() {
    startBanner.style.display = 'none';
    started = true;
    setTimeout(startGame,1000);
    startTimer();
    musicPlay(bgMusic);
    }

function startGame(){
    started && onClickField();   
}

// onClickFiled & gameWinAndLoose
function onClickField(){
    gameContainer.addEventListener('click',(event)=>{
        const x = event.clientX;
        const y = event.clientY;

        gameWInAndLoose(x,y);
        musicPlay(looseSound);
    })
}

function gameWInAndLoose(verti,horoz) {
    if(verti > 980 && verti < 995 && horoz > 622 && horoz < 662){
      gameWIn();
   }else {
      gameLoose();
   }
}

function gameWIn() {
    showTextMessage(LevelUpMessage); 
    hideTextMessage(TryAgainMessage);
    clearInterval(timer);
    musicPause(bgMusic);
    musicPause(looseSound) 
    musicPlay(winSound);
}

function gameLoose() {
    showTextMessage(TryAgainMessage);
    
    TryAgainMessage.addEventListener('click',()=>{
       TryAgainMessage.style.display = 'none'; 
    })   
} 

// Show Text Message
function showTextMessage(message){
    message.style.display = 'block';
}

function hideTextMessage(message){
    message.style.display = 'none';
}

// Timer
function startTimer(){
    let setTimeDuration = timeDuration;
    showTimer(setTimeDuration);
   timer = setInterval(() => {
        showTimer(--setTimeDuration);
         if(setTimeDuration === 0){
             clearInterval(timer);
             musicPause(bgMusic);
         }
    }, 1000);
}

function showTimer(time){
    const minute = Math.floor(time / 60);
    const second = time % 60;

    gameTimer.innerText = `${minute} : ${second}`;
}


// Music
const winSound = new Audio('music/뚝배기.mp3');
const bgMusic = new Audio('music/clock.wav');
const looseSound = new Audio('music/바운스.mp3');

function musicPlay(sound){
    sound.play();
}

function musicPause(sound){
    sound.pause();
}
