function fruit(fruit, weight, priceKilo){
    let weightInKilo = Number(weight) * 0.001;
    let money = weightInKilo * Number(priceKilo);

    console.log(`I need $${money.toFixed(2)} to buy ${weightInKilo.toFixed(2)} kilograms ${fruit}.`);
}

fruit('orange', 2500, 1.80);