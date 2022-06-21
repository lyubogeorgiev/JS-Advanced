function magicMatrices(matrix){

    let sumRow = matrix[0].reduce((accumulator, next) => accumulator + next, 0);

    for (let i = 0; i < matrix[0].length; i++) {
        let sumCurrentCol = 0;

        for (let j = 0; j < matrix.length; j++) {
            sumCurrentCol += matrix[i][j];
        }

        if (sumCurrentCol !== sumRow){
            return false;
        }
    }

    return true;
}

console.log(magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
));