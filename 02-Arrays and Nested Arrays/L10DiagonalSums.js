function diagonalSums(numbers){
    let firstDiagonal = 0;
    let secondDiagonal = 0;

    for (let i = 0; i < numbers.length; i++) {
        firstDiagonal += numbers[i][i];

        secondDiagonal += numbers[i][numbers.length - i - 1];
    }

    return (String(`${firstDiagonal} ${secondDiagonal}`));
}

console.log(diagonalSums([[20, 40],
    [10, 60]]
));