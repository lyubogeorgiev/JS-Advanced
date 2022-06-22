function ticTacToe(playersMoves){
    let board = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    let moves = [];

    for (let i = 0; i < playersMoves.length; i++) {
        moves.push(playersMoves[i].split(' ').map(a => Number(a)));
    }

    let playerOne = 'X';
    let playerTwo = 'O';

    for (let i = 0; i < moves.length; i++) {
        //player 1 turn
        let isPlayerOneTurn = true;
        while (isPlayerOneTurn){
            if (isThisPositionAvailable(moves[i][0], moves[i][1], board)){
                board[moves[i][0]][moves[i][1]] = playerOne;
                i++;
                isPlayerOneTurn = false;
            } else {
                console.log('This place is already taken. Please choose another!');
                i++;
            }

            if (i >= moves.length){
                break;
            }
        }

        if (i >= moves.length){
            break;
        }

        //check if there is a winner
        if (winner(board) !== 'no'){
            break;
        }

        //check if the board is full
        if (!isThereFalseOnBoard(board)){
            break;
        }

        //if there still available space on the board
        //player 2 turn
        let isPlayerTwoTurn = true;
        while (isPlayerTwoTurn){
            if (isThisPositionAvailable(moves[i][0], moves[i][1], board)){
                board[moves[i][0]][moves[i][1]] = playerTwo;
                isPlayerTwoTurn = false;
            } else {
                console.log('This place is already taken. Please choose another!');
                i++;
            }

            if (i >= moves.length){
                break;
            }
        }

        if (i >= moves.length){
            break;
        }

        //check if there is a winner
        if (winner(board) !== 'no'){
            break;
        }

        //check if the board is full
        if (!isThereFalseOnBoard(board)){
            break;
        }
    }

    if (winner(board) === 'no'){
        console.log('The game ended! Nobody wins :(');
    } else {
        console.log(`Player ${winner(board)} wins!`);
    }

    for (let i = 0; i < board.length; i++) {
        console.log(board[i].join('\t'));
    }

    function winner(board){
        //check if there is a winner on any of the diagonals
        let initialValue = board[0][0];
        let diagonalWinner = true;

        for (let i = 0; i < board.length; i++) {
            if (board[i][i] === false || initialValue !== board[i][i]){
                diagonalWinner = false;
                break;
            }
        }

        if (diagonalWinner){
            return initialValue;
        }

        initialValue = board[0][board.length - 1];
        diagonalWinner = false;

        for (let i = 0; i < board.length; i++) {
            if (board[i][board.length - i - 1] === false || initialValue !== board[i][board.length - i - 1]){
                diagonalWinner = false;
                break;
            }
        }

        if (diagonalWinner){
            return initialValue;
        }

        //check any row winner
        for (let i = 0; i < board.length; i++) {
            initialValue = board[i][0];
            let isRowWinner = true;

            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === false || initialValue !== board[i][j]){
                    isRowWinner = false;
                    break;
                }
            }

            if (isRowWinner){
                return initialValue;
            }
        }

        //check for col winner
        for (let i = 0; i < board.length; i++) {
            initialValue = board[0][i];
            let isColWinner = true;

            for (let j = 0; j < board.length; j++) {
                if (board[j][i] === false || initialValue !== board[j][i]){
                    isColWinner = false;
                    break;
                }
            }

            if (isColWinner){
                return initialValue;
            }
        }

        return 'no';
    }

    function isThisPositionAvailable(x, y, board){
        return !board[x][y];
    }

    function isThereFalseOnBoard (board){

        for (let i = 0; i < board.length; i++) {
            if (board[i].some(a => a === false)){
                return true;
            }
        }

        return false;
    }

}

ticTacToe(["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"]
);