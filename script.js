const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let gameover = false;

// Function to handle user clicks
function handleClick(event) {
    if (!gameover) {
        const cell = event.target;
        if (cell.textContent === '') {
            cell.textContent = currentPlayer;
            if (checkWin(currentPlayer)) {
                gameover = true;
                alert(`Player ${currentPlayer} wins!`);
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    }
}

// Function to check for winning conditions
function checkWin(player) {
    const wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < wins.length; i++) {
        const [a, b, c] = wins[i];
        if (cells[a].textContent === player && cells[b].textContent === player && cells[c].textContent === player) {
            return true;
        }
    }
    return false;
}

// Add event listener to each cell
cells.forEach(cell => cell.addEventListener('click', handleClick));