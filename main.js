'use strict';

//음악넣기
//타이머넣기
const startBanner = document.querySelector('.game__start__banner');
const startBtn = document.querySelector('.startBtn');
startBtn.addEventListener('click', startGame);

function startGame(){
    startBanner.style.display = 'none';
}

document.addEventListener('click',(event)=>{

    const x = event.clientX;
    const y = event.clientY;


     if(x > 710 && x < 725){
         if(y > 625 && y < 655){
             console.log('hi');
             // 배너보여주기
         }

     }
    // console.log(event.clientX,event.clientY)
    // clientx :709-724 , clientY : 607-636
})