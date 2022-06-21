function diagonalAttack(numbers){
    let areEqual = true;

    //transform matrix to 2D matrix of Numbers
    let numbersNew = [];
    for (let i = 0; i < numbers.length; i++) {
        numbersNew[i] = numbers[i].split(' ').map(a => Number(a));
    }

    //get the sum of the diagonals and check if they are equal
    let sumFirstDiagonal = 0;
    let sumSecondDiagonal = 0;

    for (let i = 0; i < numbersNew.length; i++) {
        sumFirstDiagonal += numbersNew[i][i];
        sumSecondDiagonal += numbersNew[i][numbersNew.length - i - 1];
    }

    if (sumFirstDiagonal === sumSecondDiagonal){
        //make all other elements equal to the sum of diagonal

        for (let i = 0; i < numbersNew.length; i++) {
            for (let j = 0; j < numbersNew[i].length; j++) {
                if (i !== j && j !== numbersNew.length - i - 1){
                    numbersNew[i][j] = sumFirstDiagonal;
                }
            }
        }
    }
    for (let i = 0; i < numbersNew.length; i++) {
        console.log(numbersNew[i].join(' '));
    }
}

diagonalAttack(['1 1 1',
    '1 1 1',
    '1 1 0']
);

diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);