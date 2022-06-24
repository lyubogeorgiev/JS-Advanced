function heroicInventory(input){
    let heroes = [];

    for (const entry of input) {

        let hero = {
            name: '',
            level: 0,
            items: []
        };

        let [name, level, items] = entry.split(' / ');
        let itemsArray = items ? items.split(', ') : [];

        hero.name = name;
        hero.level = Number(level);
        hero.items = itemsArray;

        heroes.push(hero);
    }

    let output = JSON.stringify(heroes);

    console.log(output);
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / ']
);