'use strict';


const gameContainer = document.querySelector('.game__container');
const startBanner = document.querySelector('.game__start__banner');
const TryAgainMessage = document.querySelector('.game__banner1');
const LevelUpMessage = document.querySelector('.game__banner2');
const startBtn = document.querySelector('.startBtn');
const gameTimer = document.querySelector('.game__timer');
const gameBackGround = document.querySelector('.game__playground');


let started = false;
const timeDuration = 60;
let timer;
let i = 0;

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
    started && onClickField(levelUp[i].lev);   
}

// onClickFiled & gameWinAndLoose
function onClickField(stage){
    gameContainer.addEventListener('click',(event)=>{
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


LevelUpMessage.addEventListener('click', () => {
    i++;
    nextLevel();
    onClickField(levelUp[i].lev);
})

function nextLevel (){
    gameBackGround.style.background = levelUp[i].src;
    hideTextMessage(LevelUpMessage);
    startTimer();
    musicPlay(bgMusic);
}

// 이겼을때 트라이어게인 메세지 딸려나오지 않게만들기
// 마지막 이겼을 때 메세지와 게임종료
// 더 효율적인 코드


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

function musicPlay(sound){
    sound.play();
}

function musicPause(sound){
    sound.pause();
}
