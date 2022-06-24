function storeCatalogue(input){
    let items = [];

    input.sort( (a, b) => a.localeCompare(b));

    for (const entry of input) {
        let [name, price] = entry.split(' : ');


        items.push({
            name: name,
            price: Number(price)
        });
    }

    let charTitle = '';

    for (const item of items) {
        let currentChar = item.name[0];

        if (charTitle !== currentChar){
            charTitle = currentChar;
            console.log(charTitle);
        }

        console.log(`  ${item.name}: ${item.price}`);
    }
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);