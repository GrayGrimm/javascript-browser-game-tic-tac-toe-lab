//
// Display an empty tic-tac-toe board when the page is initially displayed.
// A player can click on the nine cells to make a move.
// Every click will alternate between marking an X and O.
// Display whose turn it is (X or O).
// The cell cannot be played again once occupied with an X or O.
// Provide win logic and display a winning message.
// Provide logic for a cat’s game (tie), also displaying a message.
// Provide a Reset Game button that will clear the contents of the board.

//1) Define the required variables used to track the state of the game.
// playerChoice, computerChoice, matchResult,
//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.


/*-------------------------------- Constants --------------------------------*/

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [2, 5, 8],
    [1, 4, 7]
]

/*---------------------------- Variables (state) ----------------------------*/

let board;
let turn;
let winner;
let tie;

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.sqr')
console.dir(squareEls)

const newMessage = document.querySelector('#message')
console.dir(newMessage)

/*-------------------------------- Functions --------------------------------*/
const render = () => {
    updateBoard()
    updateMessage()
}
const init = () => {
    board = ['', '', '', '', '', '', '', '', ''];
    turn = 'X';
    winner = false;
    tie = false;
    render()
}
const updateBoard = () => {
    board.forEach((element, index) => {
        if (element === 'X') {
            squareEls[index].innerText = 'X'
        } else if (element === 'O') {
            squareEls[index].innerText = 'O'
        } else {
            squareEls[index.innerText = '']
        }
    })
}
const updateMessage = () => {
    if (winner === false && tie === false) {
        newMessage.innerText = "X's Turn";
        console.dir(newMessage.innerText)
    } else if (winner === false && tie === true) {
        newMessage.innerText = "It's a Tie!";
        console.dir(newMessage.innerText)
    }
}
const handleClick = (event) => {
    const squareIndex = event.target.id
    if (winner === true) {
        return;
    };
    if (board[squareIndex] === 'X' || board[squareIndex] === 'C')
        return;
    console.log(squareIndex)
};
init()


/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach((square) => {
    square.addEventListener('click', (event) => {
        handleClick(event);
    })
})

