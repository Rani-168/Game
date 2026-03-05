let cells = document.querySelectorAll(".cell");
let result = document.getElementById("info3");

let board = ["", "", "", "", "", "", "", "", ""];
let player = "🐧";
let computer = "🤖";
let gameOver = false;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// Player click
cells.forEach((cell,index)=>{
    cell.addEventListener("click", function(){

        if(board[index] === "" && !gameOver){

            board[index] = player;
            cell.textContent = player;

            if(checkWin(player)){
                result.textContent = "You Win 🎉";
                 confettiEffect();  
                gameOver = true;
                return;
            }

            if(checkDraw()){
                result.textContent = "Draw 😊";
                gameOver = true;
                return;
            }

            computerMove();
        }

    });
});


// Computer move
function computerMove(){

    let empty = [];

    board.forEach((val,i)=>{
        if(val === ""){
            empty.push(i);
        }
    });

    if(empty.length === 0) return;

    let randomIndex = empty[Math.floor(Math.random()*empty.length)];

    board[randomIndex] = computer;
    cells[randomIndex].textContent = computer;

    if(checkWin(computer)){
        result.textContent = "🤖 Computer Wins 🎉";
        confettiEffect();
        gameOver = true;
        return;
    }

    if(checkDraw()){
        result.textContent = "Draw 😊";
        gameOver = true;
        return;
    }

}

// Check win
function checkWin(symbol){

    return winPatterns.some(pattern=>{
        return pattern.every(index=>{
            return board[index] === symbol;
        });
    });

}


// Check draw
function checkDraw(){
    return board.every(cell => cell !== "");
}


document.getElementById("restart").onclick = function(){
    location.reload();
}


function confettiEffect(){

    for(let i=0;i<30;i++){

        let confetti=document.createElement("div");
        confetti.classList.add("confetti");

        confetti.innerHTML="🎉";

        confetti.style.left=Math.random()*100+"vw";
        confetti.style.animationDuration=(Math.random()*2+2)+"s";

        document.body.appendChild(confetti);

        setTimeout(()=>{
            confetti.remove();
        },3000);

    }

}