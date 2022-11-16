function solve(numbers, startIndex, endIndex){
    let isNumbersArray = Array.isArray(numbers);

    if (!isNumbersArray){
        return NaN;
    }

    let validStartIndex = Math.max(startIndex, 0);
    let validEndIndex = Math.min(endIndex, numbers.length - 1);

    return numbers.slice(validStartIndex, validEndIndex + 1).reduce((a, element) => a + Number(element) , 0);
}

console.log(solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));