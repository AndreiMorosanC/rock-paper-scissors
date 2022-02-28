const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const scorePlayer = document.getElementById("scorePlayer")
const scoreComputer = document.getElementById("scoreComputer")
const btn =document.getElementById("btn")
let scoreP = 0;
let scoreC = 0;

var chose = "";
var computerchoice = ""


rock.addEventListener("click", () => {
   chose = "rock";
   brain()
   score()
});
paper.addEventListener("click", () => {
     chose = "paper";
     brain()
     score()
  });
scissors.addEventListener("click", () => {
     chose = "scissors";
     brain()
     score()
  });
    





function brain(){
     
     function random(min, max){
          return Math.floor(Math.random()* (max - min)) + min;
     }
     
     var computerchoice = random(1,4)
     if(computerchoice === 1){
          computerchoice = "rock";
     }else if (computerchoice === 2){
          computerchoice = "scissors";
     }else{
          computerchoice = "paper";
     }

     if(chose === computerchoice){
          alert("is a tie")
          console.log(computerchoice)
          scoreP++
          scoreC++
          
     }
     else if(chose ==="rock"){
          if(computerchoice === "scissors"){
               alert("you win")
               console.log("scissorcs")
               scoreP++
               
          }
          else if(computerchoice === "paper"){
               alert("you lost ")
               console.log("paper");
               scoreC++
          }
     }else if(chose === "paper"){
          if(computerchoice === "scissors"){
               alert("you lost")
               console.log("scissorcs");
               scoreC++
          }
          else if(computerchoice === "rock"){
               alert("you win")
               console.log("rock")
               scoreP++
          }
     }else if(chose === "scissors"){
          if(computerchoice === "paper"){
               alert("you win")
               console.log("paper")
               scoreP++
          }
          else if(computerchoice === "rock"){
               alert("you lost")
               console.log("rock")
               scoreC++
          }

     }
     
}

function score(){
     scorePlayer.innerHTML = scoreP
     scoreComputer.innerHTML = scoreC

}

btn.addEventListener("click", function restart(){
     scoreComputer.innerHTML = 0;
     scorePlayer.innerHTML = 0;   
});

