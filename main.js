'use strict';

//음악넣기
//타이머넣기

const gameContainer = document.querySelector('.game__container');
const startBanner = document.querySelector('.game__start__banner');
const gameTextMessage = document.querySelector('.game__banner');
const startBtn = document.querySelector('.startBtn');

let started = false;

startBtn.addEventListener('click', initGame);
function initGame() {
    startBanner.style.display = 'none';
    started = true;
    setTimeout(startGame,1000);
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

         if(x > 830 && x < 846){
             if(y > 622 && y < 662){
                console.log('hi');
             }
         }
        showTextMessage();
    })
}
  

function showTextMessage(){
    gameTextMessage.style.display = 'block';
    setTimeout(gameTextMessage.style.display = 'none',1000);
}