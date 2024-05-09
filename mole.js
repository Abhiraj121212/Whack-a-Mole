let currentMoleTile;
let currentPlanTile;
let score=0;
let gameOver=false;
window.onload= function() {
    setGame();
}
function setGame(){
    for(let i=0;i<9;i++){
       let tile=document.createElement("div");
       tile.id=i.toString();
       tile.addEventListener("click",selectTile);
       document.getElementById("board").appendChild(tile);
    }
    setInterval(setMole,3000);
    setInterval(setPlant,2000);
}
function getRandomTile(){
    let num=Math.floor(Math.random()*9);
    return num.toString();
}
function setMole(){
    if(gameOver){
        return;
    }
    if(currentMoleTile){
        currentMoleTile.innerHTML="";
    }
    let mole=document.createElement("img");
        mole.src="./Images/monty-mole.png";
        let num=getRandomTile();
        if(currentPlanTile && currentPlanTile.id==num){
            return;
        }
        currentMoleTile=document.getElementById(num);
        currentMoleTile.appendChild(mole);
    
}
function setPlant(){
    if(gameOver){
        return;
    }
    if(currentPlanTile){
        currentPlanTile.innerHTML="";
    }
    let plant=document.createElement("img");
    plant.src="./Images/piranha-plant.png";
    let num=getRandomTile();
    if(currentMoleTile && currentMoleTile.id==num){
        return;
    }
    currentPlanTile=document.getElementById(num);
    currentPlanTile.appendChild(plant);
}
function selectTile(){
    if(gameOver){
        return;
    }
    if(this==currentMoleTile){
        score+=10;
        document.getElementById("score").innerText=score.toString();
    }
    else if(this==currentPlanTile){
        document.getElementById("score").innerText="Game Over:" + score.toString();
        gameOver=true;
    }
}