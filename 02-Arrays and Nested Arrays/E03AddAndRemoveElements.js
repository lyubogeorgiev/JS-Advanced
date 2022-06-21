function addRemoveElements(array){
    let resultArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'add'){
            resultArray.push(i + 1);
        } else {
            resultArray.pop();
        }
    }

    if (resultArray.length === 0){
        console.log('Empty');
    } else {
        for (let element of resultArray){
            console.log(element)
        }
    }
}

addRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']
);