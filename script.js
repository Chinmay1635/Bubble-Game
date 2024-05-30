var timer = 30;
var score = 0;
var gameArea = document.querySelector("#pbtm");
var timerDisplay = document.querySelector("#timer");
var scoreDisplay = document.querySelector("#score")
var hitDisplay = document.querySelector("#hit");
var hitrn;
var infoBtn = document.querySelector("#info");
var closeBtn = document.querySelector("#close");



function bubbleMaker(){
    var clutter = '';

for(var i=1; i<=132; i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`
}

    gameArea.innerHTML=clutter;
}

function timerFunction(){
  var timeInt =  setInterval(function(){
        if(timer>=0){
            timerDisplay.textContent = timer;
            timer--;
        }else{
            clearInterval(timeInt);
            gameArea.innerHTML = `<h1>Game Over</h1>`
        }
    },1000)
}

function scoreUpdater(){
    score +=10;
    scoreDisplay.textContent = score;
}

function hitMaker(){
    hitrn = Math.floor(Math.random()*10);
    hitDisplay.textContent = hitrn;
}

infoBtn.addEventListener("click",function(){
    gameArea.innerHTML='';
    gsap.to("#information",{
        scale:1,
        visibility:"visible",
        duration:0.5,
    })
})
closeBtn.addEventListener("click",function(){
    gsap.to("#information",{
        scale:0,
        // visibility:"hidden",
        duration:0.5,
    })
    setTimeout(function(){
        bubbleMaker();
    },500);
})



bubbleMaker();
timerFunction();
hitMaker();
function mainFunction(){
    gameArea.addEventListener("click",function(data){
        var userNumber = Number(data.target.textContent);
        if(userNumber===hitrn){
            data.target.style.backgroundColor="rgb(0, 255, 0)";
            setTimeout(function(){
                scoreUpdater();
                bubbleMaker();
                hitMaker();
            },500)
        }
        else if(userNumber!=hitrn && data.target.id!="pbtm"){
            data.target.style.backgroundColor="rgb(255, 0, 0)";
            setTimeout(function(){
                bubbleMaker();
                hitMaker();
            },500)
        }

    })
}
mainFunction()



