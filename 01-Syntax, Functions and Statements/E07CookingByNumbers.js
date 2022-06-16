function cookingByNumbers(number, o1, o2, o3, o4, o5, o6){
    let inputNumber = Number(number);
    let operations = [o1, o2, o3, o4, o5, o6];

    for (let i = 0; i < 5; i++) {
        let operation = operations[i];

        switch (operation){
            case 'chop':
                inputNumber /= 2;
                break;
            case 'dice':
                inputNumber = Math.sqrt(inputNumber);
                break;
            case 'spice':
                inputNumber += 1;
                break;
            case 'bake':
                inputNumber *= 3;
                break;
            case 'fillet':
                inputNumber *= 0.8;
                break;
        }

        console.log(inputNumber);
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');