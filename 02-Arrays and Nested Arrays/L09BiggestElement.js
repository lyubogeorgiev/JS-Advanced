function biggestElement(matrix){
    let biggestElement = matrix[0][0];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (biggestElement < matrix[i][j]){
                biggestElement = matrix[i][j];
            }
        }
    }

    return biggestElement;
}

console.log(biggestElement([[20, 50, 10],
    [8, 33, 145]]
));