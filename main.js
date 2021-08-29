'use strict';


const gameContainer = document.querySelector('.game__container');
const startBanner = document.querySelector('.game__start__banner');
const TryAgainMessage = document.querySelector('.game__banner1');
const LevelUpMessage = document.querySelector('.game__banner2');
const FinalWinMessage = document.querySelector('.game__banner3');
const ReplayMessage = document.querySelector('.game__banner4');
const startBtn = document.querySelector('.startBtn');
const gameTimer = document.querySelector('.game__timer');
const gameBackGround = document.querySelector('.game__playground');


let started = false;
const timeDuration = 5;
let timer;
let i = 0;

// Game start
startBtn.addEventListener('click', initGame);

function initGame() {
    started = true;
    startBanner.style.display = 'none';
    setTimeout(startGame,1000);    
    startTimer();
    musicPlay(bgMusic);
    }

function startGame(){
        started === true && onClickField(levelUp[i].lev);
    
}

// onClickFiled & gameWinAndLoose
function onClickField(stage){
    gameContainer.addEventListener('click',(event)=>{
        if(!started){
            return;
        }
        const x = event.clientX;
        const y = event.clientY;
    
        stage(x,y);
        musicPlay(looseSound);
    })
}

function level1(verti,horoz) {
    if(verti > 980 && verti < 995 && horoz > 622 && horoz < 662){
      gameWIn();
   }else {
      gameLoose();
   }
}

function level2(verti,horoz) {
    if(verti > 780 && verti < 797 && horoz > 172 && horoz < 203){
      gameWIn();
   }else {
      gameLoose();
   }
}

function level3(verti,horoz) {
    if(verti > 716 && verti < 737 && horoz > 416 && horoz < 453){
        FinalWin();
   }else {
      gameLoose();
   }
}

function FinalWin(){
    finishGame(FinalWinMessage,finalWinSound);
}

function gameWIn() {
    finishGame(LevelUpMessage,winSound);
}

function finishGame(text,sound){
    started = false;
    showTextMessage(text);
    hideTextMessage(TryAgainMessage);
    clearInterval(timer);
    musicPause(bgMusic);
    musicPlay(sound);
}

function gameLoose() {
    started = false;
    showTextMessage(TryAgainMessage);
    
    TryAgainMessage.addEventListener('click',()=>{
        started = true;
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
             showTextMessage(ReplayMessage);
             started = false;
         }
    }, 1000);
}

function showTimer(time){
    const minute = Math.floor(time / 60);
    const second = time % 60;

    gameTimer.innerText = `${minute} : ${second}`;
}


LevelUpMessage.addEventListener('click', () => {
    started = true;
    i++;
    nextLevel();
    onClickField(levelUp[i].lev);
})

ReplayMessage.addEventListener('click',()=>{
    started = true;
    startTimer();
    musicPlay(bgMusic);
    startGame();
    hideTextMessage(ReplayMessage);
});


function nextLevel (){
    gameBackGround.style.background = levelUp[i].src;
    hideTextMessage(LevelUpMessage);
    startTimer();
    musicPlay(bgMusic);
}


const levelUp = [
    {
        lev : level1,
        src : 'url(imgs/jenny/level1.jpeg) no-repeat center/cover'
    },
    {
        lev : level2,
        src : 'url(imgs/jenny/level2.jpeg) no-repeat center/cover'
    },
    {
        lev : level3,
        src : 'url(imgs/jenny/level3.jpeg) no-repeat center/cover'
    }
]



// Music
const winSound = new Audio('music/뚝배기.mp3');
const bgMusic = new Audio('music/clock.wav');
const looseSound = new Audio('music/바운스.mp3');
const finalWinSound = new Audio('music/final.wav');
function musicPlay(sound){
    sound.play();
}

function musicPause(sound){
    sound.pause();
}


