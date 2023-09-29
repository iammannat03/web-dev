let gameSeq=[];
let userSeq=[];
let highScore=0;
let h2=document.querySelector("h2");
let body=document.querySelector("body");

let btns=["red","green","yellow","purple"]

let started = false;
let level=0;

document.addEventListener('keypress',function(){
    if(started==false){
        
        console.log("game started");
        started=true;
        levelUp();
    }
})

function gameFlash(btn){
    btn.classList.add("gameFlash");
    setTimeout(function(){
        btn.classList.remove("gameFlash")
    },200);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash")
    },200);
}


function levelUp(){
    userSeq=[];
    level++;
    
    h2.innerText=`Level ${level}`;

    //random button choose
    let random4=(Math.floor(Math.random()*4));
    let randColor=btns[random4];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);

    setTimeout(() => {
        gameFlash(randBtn);
    }, 500);
}
function checkAns(idx){
    // console.log("user level= "+ level);

    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            levelUp();
            if(highScore<level){
                highScore=level-1;
            }
        }
    }else{
            body.classList.toggle("gameOverBG");
            setTimeout(function(){
                body.classList.toggle("gameOverBG");
            },100);
            h2.innerHTML=`Game Over: your score was <b>${level-1}</b><br>High Score: ${highScore}<br>Press any key to start`;
            
            reset();
        }
    }

function btnPress(){
    let btn =this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    gameSeq=[];
    started=false;
    level=0;
}
