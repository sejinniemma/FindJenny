'use strict';

//음악넣기
//타이머넣기

const gameContainer = document.querySelector('.game__container');
const startBanner = document.querySelector('.game__start__banner');
const gameTextMessage = document.querySelector('.game__banner');
const startBtn = document.querySelector('.startBtn');

let started = false;

startBtn.addEventListener('click', initGame);
function initGame(){
    started = true;
    startBanner.style.display = 'none';
    startGame();
}

function startGame(){
    onClickField();
}

function onClickField(){
    if(started){
        return;
    }
    gameContainer.addEventListener('click',(event)=>{
        const x = event.clientX;
        const y = event.clientY;

         if(x > 830 && x < 846){
             if(y > 622 && y < 662){
                console.log('hi');
             }
         }
        gameTextMessage.style.display = 'block';
    })
}
  

