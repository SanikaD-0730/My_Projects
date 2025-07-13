//alert("WLC TO GAME");

let boxes = document.querySelectorAll(".box");
let RestartBtn = document.querySelector("#rs");
let NewGameBtn = document.querySelector("#new_game_btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

let turnO= true;

//store the winning patterns

const winPatterns = [
    [0, 1 ,2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 3, 8],
    [0, 4, 8],
    [2, 4, 6]
];


const resetGame = () => {
    turnO= true;
    msgContainer.classList.add("hide");
    enableBoxes();
};

boxes.forEach((box) => {
    box.addEventListener("click" , () =>{
        console.log("box is clicked");
        if (box.innerText === "") {
            if(turnO) {
                box.innerText = "O";
                turnO = false;
            }
            else {
                box.innerText = "X";
                turnO = true;
            }
            box.disabled = true;

            checkWinner();
            drawGame();
        }
    });
});

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const drawGame = () => {
    const allFilled = [...boxes].every(box => box.innerText !== "");
    if (allFilled) {
        msg.innerText = `It's a draw`;
        msgContainer.classList.remove("hide");
        disableBoxes();
    }
};


const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const showWinner = (Winner) => {
    msg.innerText = `Congratulations ! Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for ( let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner",pos1Val);
                boxes.disabled;
                showWinner(pos1Val);
            }
        }
    }
};

document.getElementById("rs_btn").addEventListener("click", resetGame);
document.getElementById("new_game_btn").addEventListener("click", resetGame);
