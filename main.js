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

startBtn.addEventListener('click', initGame);
function initGame() {
    startBanner.style.display = 'none';
    started = true;
    setTimeout(startGame,1000);
    startTimer();
    }

function startGame(){
    if(started){
        onClickField();
    }
}

function onClickField(){
    gameContainer.addEventListener('click',(event)=>{
        const x = event.clientX;
        const y = event.clientY;

        if(x > 980 && x < 995 && y > 622 && y < 662){
             showTextMessage(LevelUpMessage); 
        }else {
            showTextMessage(TryAgainMessage);        
            setInterval(()=>{
                hideTextMessage(TryAgainMessage);
            },2000);  
        }
    })
}


function showTextMessage(message){
    message.style.display = 'block';
}

function hideTextMessage(message){
    message.style.display = 'none';
}

function startTimer(){
    let setTimeDuration = timeDuration;
    showTimer(setTimeDuration);
   timer = setInterval(() => {
        showTimer(--setTimeDuration);
         if(setTimeDuration === 0){
             clearInterval(timer);
         }
    }, 1000);
}

function showTimer(time){
    const minute = Math.floor(time / 60);
    const second = time % 60;

    gameTimer.innerText = `${minute} : ${second}`;
}


const bgMusic = new Audio(music/clock.wav);