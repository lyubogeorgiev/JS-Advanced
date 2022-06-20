function processOddPositions(numbers){
    let resultNumbers = [];

    for (let i = 1; i < numbers.length; i += 2) {
        resultNumbers.push(numbers[i] * 2);
    }

    resultNumbers.reverse();

    return resultNumbers;
}

console.log(processOddPositions([10, 15, 20, 25]));