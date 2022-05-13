const people = (name, marker) => {
    return { name, marker }
};

const gameBoard = (() => {
    
    let cells = [...document.querySelectorAll('.cell')];
    const board = []

    for (let i=0; i < 9; i++) {
        board.push(i)
    }

})()

player1 = people('Jill', 'X')
player1 = people('Jack', 'O')