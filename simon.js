let gameSqn=[];
let userSqn=[];
let colors=["red","yellow","green","blue"];
let started=false;
let level=0;
let score=0;
let highScore=0;

document.addEventListener("keydown",function(){
    if(started==false){
     console.log("Game started");
     started=true;
     document.getElementById("hide").style.display="none";
     levelUp();
    }
   
});

let h2=document.querySelector("h2");

function levelUp(){
    userSqn=[];
    level++;
    h2.innerText=`Level ${level}`;
    let rndIdx=Math.floor(Math.random()*4);
    let rndColor=colors[rndIdx];
    let btn=document.querySelector(`.${rndColor}`);
    gameSqn.push(rndColor);
    console.log(gameSqn);
    let delay=0;
    for(clr of gameSqn){
        let color=document.querySelector(`.${clr}`);
        setTimeout(()=>{
            gameFlash(color);
        },delay);
        delay+=600;
        
    }
    
}



function gameFlash(btn){
    //console.log("button clicked");
    btn.classList.add("gameFlash");
    setTimeout(function(){
        btn.classList.remove("gameFlash");
    },200);

}

let btns=document.querySelectorAll(".btns");
for(btn of btns){
    btn.addEventListener("click",function(){
        userFlash(this);
        userSqn.push(this.getAttribute("id"));
        check();
    });

}

function userFlash(btn){
    //console.log("button clicked");
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },100);

}

function check(){
    let idx=userSqn.length-1;
    if(gameSqn[idx]==userSqn[idx]){
        if(gameSqn.length==userSqn.length){
             setTimeout(levelUp,500);
             score++;
             if(highScore<score){
        highScore=score;
    }
        }
           
    
    }
    else{
        h2.innerHTML=`Game is over! Your score is ${score}`;
        document.querySelector("p").innerHTML=`Your High-Score is <b>${highScore}</b> </p>`;
        document.getElementById("hide").style.display="block";
        reset();
    }
}

function reset(){
    started=false;
    gameSqn=[];
    userSqn=[];
    level=0;
    score=0;
    
    
}