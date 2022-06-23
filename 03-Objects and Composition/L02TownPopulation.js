function townPopulation(input){
    let registry = {};

    for (let entry of input){
        let entryArray = entry.split(' <-> ');

        if (!registry[entryArray[0]]){
            registry[entryArray[0]] = 0;
        }

        registry[entryArray[0]] += Number(entryArray[1]);

    }

    for (let key in registry){
        console.log(`${key} : ${registry[key]}`);
    }
}

townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']

);