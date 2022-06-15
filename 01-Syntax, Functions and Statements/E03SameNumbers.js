function sameNumbers(num){
    let numString = String(num);
    let allSame = true;
    let sum = 0;

    for (let i = 0; i < numString.length - 1; i++) {
        if (numString[i] !== numString[i + 1]){
            allSame = false;
        }

        sum += Number(numString[i]);

        if (i === numString.length - 2){
            sum += Number(numString[i + 1]);
        }
    }

    console.log(allSame);
    console.log((sum))
}

sameNumbers(1234);