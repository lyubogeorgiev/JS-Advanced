function ticTacToe(playersMoves){
    let board = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    let isThereMoreSpace = true;
    let winner = 'no';

    for (let i = 0; i < playersMoves.length; i += 2) {
        let playerOneTurnTaken = false;
        while (!playerOneTurnTaken){

            let rowNumberPlayerOne = Number(playersMoves[i].split(' ')[0]);
            let colNumberPlayerOne = Number(playersMoves[i].split(' ')[1]);

            if (board[rowNumberPlayerOne][colNumberPlayerOne] === false){
                board[rowNumberPlayerOne][colNumberPlayerOne] = 'X';

                playerOneTurnTaken = true;
            } else {
                console.log('This place is already taken. Please choose another!');
                i++;
            }

            if (checkWinner(board) !== 'no'){
                winner = checkWinner(board);
                break;
            }
        }



        console.log(isThereFalse(board));

        if (!isThereFalse(board) || checkWinner(board) !== 'no'){
            isThereMoreSpace = false;
            break;
        }

        let playerTwoTurnTaken = false;
        while (!playerTwoTurnTaken){
            let rowNumberPlayerTwo = Number(playersMoves[i].split(' ')[0]);
            let colNumberPlayerTwo = Number(playersMoves[i].split(' ')[1]);

            if (board[rowNumberPlayerTwo][colNumberPlayerTwo] === false){
                board[rowNumberPlayerTwo][colNumberPlayerTwo] = 'O';

                playerOneTurnTaken = true;
            } else {
                console.log('This place is already taken. Please choose another!');
                i++;
            }

            if (checkWinner(board) !== 'no'){
                winner = checkWinner(board);
            }
        }

        if (!isThereFalse(board) || checkWinner(board) !== 'no'){
            isThereMoreSpace = false;
            break;
        }
    }

    if (winner !== 'no'){
        console.log(`Player ${winner} wins!`);
    } else {
        console.log('The game ended! Nobody wins :(');
    }

    for (let i = 0; i < board.length; i++) {
        console.log(`${board[i].join('\t')}`);
    }

    function checkWinner(board){
        let winner = 'no';

        //check diagonals
        let firstSymbol = board[0][0];
        let isWinning = true;

        for (let i = 0; i < board.length; i++) {
            if(board[i][i] !== firstSymbol || firstSymbol === false){
                isWinning = false;
                break;
            }
        }

        if (isWinning){
            return firstSymbol;
        }

        firstSymbol = board[0][board.length - 1];
        isWinning = true;

        for (let i = 0; i < board.length; i++) {
            if(board[i][board.length - i] !== firstSymbol || firstSymbol === false){
                isWinning = false;
                break;
            }
        }

        if (isWinning){
            return firstSymbol;
        }

        //check rows
        isWinning = true;

        for (let i = 0; i < board.length; i++) {
            firstSymbol = board[i][0];

            for (let j = 0; j < board[i].length; j++) {
                if(board[i][j] !== firstSymbol || firstSymbol === false){
                    isWinning = false;
                    break;
                }
            }
        }

        if (isWinning){
            return firstSymbol;
        }

        //check cols
        isWinning = true;

        for (let i = 0; i < board.length; i++) {
            firstSymbol = board[0][i];

            for (let j = 0; j < board[i].length; j++) {
                if(board[j][i] !== firstSymbol || firstSymbol === false){
                    isWinning = false;
                    break;
                }
            }
        }

        if (isWinning){
            return firstSymbol;
        }

        return 'no';
    }

    function isThereFalse(array){
        for (let i = 0; i < array.length; i++) {
            if (array[i].some(a => a === false)){
                return true;
            }
        }

        return false;
    }
}

ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]
);