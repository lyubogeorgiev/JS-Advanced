function carStorage(input){

    let carWarehouse = new Map();

    for (const inputElement of input) {

        let [carBrand, carModel, producedCars] = inputElement.split(' | ');

        if (!carWarehouse.has(carBrand)){
            carWarehouse.set(carBrand, {});
        }

        if (!carWarehouse.get(carBrand)[carModel]){

            carWarehouse.get(carBrand)[carModel] = 0;
        }

        carWarehouse.get(carBrand)[carModel] += Number(producedCars);
    }

    carWarehouse.forEach((value, key) => {
        console.log(key)
        for (const entry of Object.entries(value)) {
            console.log(`###${entry[0]} -> ${entry[1]}`);
        }
    });

}

carStorage(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
);