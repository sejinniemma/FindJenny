'use strict';

//음악넣기
//타이머넣기

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
    
//클릭할때는 작동이 안되게 하고 클릭하고나서는 onClickField가 작동이 될 수 있도록

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
    gameTimer.innerText = setTimeDuration;
   timer = setInterval(() => {
        showTimer(--setTimeDuration);
         if(timeDuration === 0){
             clearInterval(timer);
         }
    }, 1000);
}

function showTimer(time){
    const minute = Math.floor(time / 60);
    const second = time % 60;

    gameTimer.innerText = `${minute} : ${second}`;
}


