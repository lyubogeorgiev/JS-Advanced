function lowestPricesInCities(input){
    const towns = {};

    for (const entry of input) {
        let entryTokens = entry.split(' | ');

        let townName = entryTokens[0];
        let productName = entryTokens[1];
        let productPrice = Number(entryTokens[2]);

        if (!towns.hasOwnProperty(townName)){
            towns[townName] = {};
        }

        towns[townName][productName] = productPrice;
    }

    const products = {};

    for (const town in towns){
        for (const product in towns[town]) {

            let currentProductPrice = towns[town][product];

            if (!products.hasOwnProperty(product)){
                products[product] = {
                    price: currentProductPrice,
                    priceAtTown: town
                };
            } else {
                if (currentProductPrice < products[product]['price']){
                    //here, hot to take the whole product key-value pair out of the object
                    products[product].price = towns[town][product];
                    products[product].priceAtTown = town;
                }
            }
        }
    }

    for (const product in products) {
        console.log(`${product} -> ${products[product].price} (${products[product].priceAtTown})`);
    }
}

lowestPricesInCities(['Sofia City | Audi | 100000',
'Sofia City | BMW | 100000',
'Sofia City | Mitsubishi | 10000',
'Sofia City | Mercedes | 10000',
'Sofia City | NoOffenseToCarLovers | 0',
'Mexico City | Audi | 1000',
'Mexico City | BMW | 99999',
'Mexico City | Mitsubishi | 10000',
'New York City | Mitsubishi | 1000',
'Washington City | Mercedes | 1000']
);