function solve(...input){

    let resultString = '';
    let typesObject = {};

    input.forEach(x => {
        resultString += (`${typeof x}: ${x}\n`);
        if (!(typeof x in typesObject)){
            let typeValue = typeof x;
            typesObject[typeValue] = 0;
        }

        typesObject[typeof  x]++;
    });

    typesObject = Object.entries(typesObject).sort((a, b) => {return (a.value - b.value)});

    typesObject.forEach((x) => {resultString += `${x[0]}: ${x[1]}\n`});

    return resultString;
}

console.log(solve('cat', 42, function () { console.log('Hello world!');}));