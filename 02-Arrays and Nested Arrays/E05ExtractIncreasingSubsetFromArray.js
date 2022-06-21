function extractIncreasingSubset(array){
    let biggestElement = array[0];
    let resultArray =[];

    for (let i = 0; i < array.length; i++) {
        if (array[i] >= biggestElement){
            resultArray.push(array[i]);
            biggestElement = array[i];
        }
    }

    return resultArray;
}

console.log(extractIncreasingSubset([1,
    2,
    3,
    4]
));