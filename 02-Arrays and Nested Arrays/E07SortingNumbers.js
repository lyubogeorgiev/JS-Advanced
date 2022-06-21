function sortingNumbers(numbers){
    numbers.sort(function (a, b){
        return a - b;
    });

    let numbersLength = numbers.length;

    let resultArray = [];

    for (let i = 0; i < numbersLength / 2; i++) {
        resultArray.push(numbers[i]);

        let secondIndex = numbersLength - i - 1;
        if (i !== numbersLength - i -1){
            resultArray.push(numbers[secondIndex]);
        }
    }

    return resultArray;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, -4]));