function spiralMatrix(m, n){
    let matrix = new Array(m);

    for (let i = 0; i < m; i++) {
        matrix[i] = new Array(n);
    }

    let numberToFill = 1;
    let limit = m * n;

    //set constraints
    let left = 0;
    let right = matrix.length - 1;
    let bottom = matrix.length - 1;
    let top = 0;

    let currentRow = 0;
    let currentCol = 0;

    while (numberToFill <= limit){

        //go right
        for (let i = currentCol; i <= right ; i++) {
            matrix[currentRow][i] = numberToFill;
            numberToFill++;
            currentCol = i;
        }

        currentRow++;
        top++;

        //go down
        for (let i = currentRow; i <= bottom; i++) {
            matrix[i][currentCol] = numberToFill;
            numberToFill++;
            currentRow = i;
        }

        currentCol--;
        right--;

        //go left
        for (let i = currentCol; i >= left ; i--) {
            matrix[currentRow][i] = numberToFill;
            numberToFill++;
            currentCol = i;
        }

        currentRow--;
        bottom--;

        //go up
        for (let i = currentRow; i >= top; i--) {
            matrix[i][currentCol] = numberToFill;
            numberToFill++;
            currentRow = i;
        }

        currentCol++;
        left++;
    }

    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '));
    }
}

spiralMatrix(5, 5)