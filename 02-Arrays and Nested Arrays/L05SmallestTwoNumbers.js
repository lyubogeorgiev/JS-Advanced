function smallestTwoNumbers(numbers){
    let sortedNumbers = numbers.sort((a, b) => a - b);
    let slicedArray = sortedNumbers.slice(0, 2);

    let resultString = slicedArray.join(' ');

    console.log(resultString);
}

smallestTwoNumbers([30, 15, 50, 5]);