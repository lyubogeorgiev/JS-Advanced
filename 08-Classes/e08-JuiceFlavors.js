function solveFlavors(input){

    let juiceFlavors = new Map();
    let producedBottles = {};

    input.forEach(flavor => {
        let [currentFlavor, currentQuantity] = flavor.split(' => ');

        if (!juiceFlavors.has(currentFlavor)){
            juiceFlavors.set(currentFlavor, 0);
        }

        juiceFlavors.set(currentFlavor,juiceFlavors.get(currentFlavor) + Number(currentQuantity));



        juiceFlavors.forEach((value, key) => {

            let countOfBottleReady = Math.floor(value/1000);
            // console.log(countOfBottleReady);
            // console.log(value);

            if (countOfBottleReady > 0){
                if (!producedBottles[key]){
                    producedBottles[key] = 0;
                    // console.log(key);
                }

                producedBottles[key] += countOfBottleReady;

                let remainingAmount = value % 1000;

                juiceFlavors.set(key, remainingAmount);
            }
        });
    });

    let bottlesArray = Object.entries(producedBottles);

    for (const bottle of bottlesArray) {
        console.log(`${bottle[0]} => ${bottle[1]}`);
    }
}

solveFlavors(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']

);