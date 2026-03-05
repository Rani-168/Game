const result = document.getElementById("info3");
const yourChoice = document.getElementById("info1");
const computer = document.getElementById("info2");

const choice = ["rock", "paper", "scissor"]

function playGame(userChoice){
  let random = Math.floor(Math.random() * 3);
  let computerChoice = choice[random];

 yourChoice.innerText=userChoice;
 computer.innerText = computerChoice; 

  
 
  if(userChoice == computerChoice ){
    result.innerText = " Draw😊"
}else if((userChoice == "rock" && computerChoice == "scissor") || (userChoice == "scissor" && computerChoice == "paper") ||(userChoice == "paper" && computerChoice == "rock") ){
    result.innerText = " you won🙄"
}else{
    result.innerText = "you lost😀"
}

}





