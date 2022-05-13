const gameBoard = (() => {
    const board = 
        [
            'X','X',' ',
            'X','X','X',
            ' ',' ',' '
        ]

    return { board };
})();

// const checkWinner = (() => {
//     const msg = 'You win!'
//  //    return { msg } 
//  })();

const checkWinner = () => console.log('You win!')

let winningArr = [[0,1,2], 
                [3,4,5], 
                [6,7,8], 
                [0,3,6], 
                [1,4,7], 
                [2,5,8], 
                [0,4,8],
                [2,4,6]
                        ];

const hajime = (() => {
    const toggle = (cell) => {
        if (cell.classList.contains('color')){
            cell.classList.remove('color')
        } else {
            cell.classList.add('color')
        }    
    }
    
    const placeMarks = (cellID, symbol) => {
        cell = document.getElementById(cellID)
        if (cell.textContent == symbol) {
            cell.textContent = cellID
        } else {
            cell.textContent = symbol
        }
    }
    
    const nodeList = document.getElementsByClassName('cell')
    cells = Array.from(nodeList)
    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            toggle(cell)
            // gameBoard.board[cell.id - 1] = cell.id
            updateBoard(cell.id, 'X')
            placeMarks(cell.id, 'X')
        
        })
    });

    const updateBoard = (cellID, symbol) => {
        gameBoard.board[cellID - 1] = symbol
    }

    

    const x = gameBoard.board  
    if (
        x[0] == 'X' && x[1] == 'X' && x[2] == 'X' ||
        x[3] == 'X' && x[4] == 'X' && x[5] == 'X' 
    ) {
        checkWinner()
    } 

    console.log(gameBoard.board)

    // return { checkWinner }
})();

const Player = (name, symbol) =>{
    const getSymbol = () => symbol
    const getName = () => name

    return { name, symbol, getSymbol, getName }
}

// const checkWinner = () => 'You win!'

const cellss = [...document.querySelectorAll('.cell')]

cons

// const playerOne = hajime('Jack', 'X')

// for (i in gameBoard.board) {
//     console.log(x[i])
// }

// const player1 = Player('Jack', 'X')
// const player2 = Player('Jill', 'O')

