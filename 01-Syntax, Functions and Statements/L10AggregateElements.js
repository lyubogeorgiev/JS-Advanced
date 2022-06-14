function aggregateElements(a){
    let sum = 0;
    let inverseSum = 0;
    let concat = "";

    for (let i = 0; i < a.length; i++) {
        sum += Number(a[i]);
        inverseSum += 1/Number(a[i]);
        concat += String(a[i]);
    }

    console.log(sum);
    console.log(inverseSum);
    console.log(concat);
}

aggregateElements([1, 2, 3]);