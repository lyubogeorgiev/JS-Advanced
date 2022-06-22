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

    matrix[x][y] = 1;

//fill to the right

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if(i !== x || j !== y){
                let distanceX = Math.abs(i - x);
                let distanceY = Math.abs(j - y);
                let distance =  distanceX > distanceY ? distanceX : distanceY;

                matrix[i][j] = numberToPut + distance;
            }
        }
    }

    matrix.forEach(a => console.log(a.join(' ')));
}

orbit([4, 4, 0, 0]);
orbit([5, 5, 2, 2]);