
console.log("HEllo,world!");

function getComputerChoice(){
    let randvalue =  3*Math.random(0);
    let ComputerChoice = 
        (randvalue<1)?"rock":
        (randvalue<2)?"paper":"scissors";
    return ComputerChoice;
}

function getHumanChoice(){
    let userChoice = window.prompt("Enter user choice:\n");
    return userChoice.toLowerCase();
}

let humanScore=0,computerScore=0;

function playRound(h,c){
    let win=(h,c)=>{
        humanScore++;
        return "You won! "+h+" beat "+c+".\n";
    };
    let lose=(h,c)=>{
        computerScore++;
        return "You lost! "+c+" beat "+h+".\n";
    };
    let draw=(h,c)=>{
        return "Its a draw! You both chose "+h+".\n";
    }

    if (h==="rock"){
        if (c==="paper"){
            return lose(h,c);
        }else if (c==="scissors"){
            return win(h,c);
        }else{
            return draw(h,c);
        }
    }else if (h==="paper"){
        if (c==="rock"){
            return win(h,c);
        }else if(c==="scissors"){
            return lose(h,c);
        }else{
            return draw(h,c);
        }
    }else if(h==="scissors"){
        if (c=="paper"){
            return win(h,c);
        }else if (c==="rock"){
            return lose(h,c);
        }else{
            return draw(h,c);
        }
    }else{
        return "Its a rock/paper/scissor game fool!";
    }
}



const rockButton = document.querySelector(".rock");
// console.log(rockButton);
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const resultDiv = document.querySelector(".result");

resultDiv.textContent = "Make your move!";

function playDisplayer(humanChoice){
    const res = playRound(humanChoice, getComputerChoice());
    resultDiv.textContent = res;

}
rockButton.addEventListener("click", ()=>playDisplayer("rock"));
paperButton.addEventListener("click", ()=>playDisplayer("paper"));
scissorsButton.addEventListener("click", ()=>playDisplayer("scissors"));


