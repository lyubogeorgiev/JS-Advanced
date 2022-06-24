function carFactory(input){
    let car = {};

    let availableParts = {
        engine: {
            smallEngine: {power: 90, volume: 1800},
            normalEngine: {power: 120, volume: 2400},
            monsterEngine: {power: 200, volume: 3500}
        },
        carriage: {
            hatchback: {type: 'hatchback', color: ''},
            coupe: {type: 'coupe', color: ''}
        },
        wheels: []
    };

    car.model = input.model;

    if (input.power <= 90){
        car.engine = availableParts.engine.smallEngine;
    } else if (input.power <= 120){
        car.engine = availableParts.engine.normalEngine;
    } else {
        car.engine = availableParts.engine.monsterEngine;
    }

    if (input.carriage === 'hatchback'){
        car.carriage = availableParts.carriage.hatchback;
    } else {
        car.carriage = availableParts.carriage.coupe;
    }

    car.carriage.color = input.color;

    car.wheels = availableParts.wheels;

    if (input.wheelsize % 2 === 0){
        input.wheelsize--;
    }

    for (let i = 0; i < 4; i++) {
        car.wheels.push(input.wheelsize);
    }

    return car;
}

console.log(carFactory({ model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 }
));