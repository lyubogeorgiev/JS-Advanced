function solution(){
    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    let recipes = {
        apple: {carbohydrate: 1, flavour: 2},
        lemonade: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        eggs: {protein: 5, fat: 1, flavour: 1},
        turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    }

    return function(command) {
        let commandTokens = command.split(' ');

        let task = commandTokens[0];
        let product = commandTokens[1];
        let quantity = Number(commandTokens[2]);

        if (task === "restock"){
            if (ingredients.hasOwnProperty(product)){
                ingredients[product] += quantity;

                // console.log(ingredients[product]);
                return 'Success'
            }
        } else if (task === "prepare"){
            let productsNeeded = recipes[product];

            // console.log(`productsNeeded=>${productsNeeded}`);
            // console.log(Object.entries(productsNeeded));
            // console.log(product);
            // console.log(recipes[product]);
            // console.log(productsNeeded);

            let missingProduct = false;

            for (const key in productsNeeded) {
                // console.log(`key=>${key}`);
                //
                // console.log(ingredients[key]);
                // console.log(quantity * productsNeeded[key]);

                if (ingredients[key] < quantity * productsNeeded[key]){
                    missingProduct = true;
                    return `Error: not enough ${key} in stock`;
                }

            }
            if (!missingProduct){

                for (const key in productsNeeded) {
                    ingredients[key] -= quantity * productsNeeded[key];

                }
            }

            return 'Success';
        } else if(task === "report") {
            let result = '';

            Object.entries(ingredients)
                .forEach(ingredient => result += `${ingredient[0]}=${ingredient[1]} `);
            return result.trim();
        }
    }
}

let manager = solution ();
console.log (manager ("prepare turkey 1"));
console.log (manager ("restock protein 10"));
console.log (manager ("prepare turkey 1"));
console.log (manager ("restock carbohydrate 10"));
console.log (manager ("prepare turkey 1"));
console.log (manager ("restock fat 10"));
console.log (manager ("prepare turkey 1"));
console.log (manager ("restock flavour 10"));
console.log (manager ("prepare turkey 1"));
console.log (manager ("report"));