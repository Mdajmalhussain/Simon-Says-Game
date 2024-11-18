let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(started==false){
        console.log("game is started");
        started=true;

        leveUp();
    }
    

});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },250)
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    },250)
}

 function leveUp(){
    level++;
    h2.innerText=`Level ${level}`;

    let randIndx=Math.floor(Math.random()*4);
    let randcolor= btns[randIndx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);
    console.log(gameSeq);
    gameFlash(randbtn);
 }

 function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(leveUp,1000);
        }
    }else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br> Press any key To start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor="white";
        },200);
        reset();
    }
 }


 function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
 }

 let allBtn=document.querySelectorAll(".btn");
 for(btn of allBtn){
    btn.addEventListener("click", btnPress);
 }

 function reset() {
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
 }