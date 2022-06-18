function negativePositiveNumbers(array){
    let resultArray = [];

    for (let number of array){
        if (number < 0){
            resultArray.unshift(number);
        } else {
            resultArray.push(number);
        }
    }

    for (let number of resultArray){
        console.log(number);
    }
}

negativePositiveNumbers([7, -2, 8, 9]);