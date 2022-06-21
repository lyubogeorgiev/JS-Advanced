function orbit(input){
    let matrix = [];
    matrix.length = Number(input[1]);

    for (let i = 0; i < Number(input[1]); i++) {
        matrix[i] = [];
        for (let j = 0; j < Number(input[0]); j++) {
            matrix[i].push(0);
        }
    }

    let x = Number(input[2]);
    let y = Number(input[3]);

    let numberToPut = 1;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            // if (i > x || j > y){
            //
            //     matrix[i][j] = Math.abs(0 - (i > j ? i : j) + numberToPut);
            // } else {
            //
            //     matrix[i][j] = Math.abs((x >= y ? x : y) - (i >= j ? i : j) + numberToPut);
            // }

            if (x > i) {

                matrix[i][j] = x - i + numberToPut;
            } else if(y > j) {

                matrix[i][j] = y - j + numberToPut;
            // } else if (x > i && y > j){
            //     matrix[i][j] = -1;
            } else {
                matrix[i][j] = Math.abs(x - (i > j ? i : j)) + numberToPut;


            }
        }
    }
    matrix.forEach(a => console.log(a.join(' ')));
}

orbit([4, 4, 0, 0]);
orbit([5, 5, 2, 2]);