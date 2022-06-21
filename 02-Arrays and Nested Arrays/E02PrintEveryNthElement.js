function printEveryNthElement(array, n){
    let resultArray = [];

    for (let i = 0; i < array.length; i += n) {
        resultArray.push(array[i]);
    }

    return resultArray;
}

console.log(printEveryNthElement(['5',
        '20',
        '31',
        '4',
        '20'],
    2
));