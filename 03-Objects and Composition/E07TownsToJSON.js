function townsToJSON(input){
    let [title1, title2, title3] = input[0].split('|').map(a => a.trim()).filter(a => a !== '');

    let objectsArray = [];

    for (let i = 1; i < input.length; i++) {
        let [town, latitude, longitude] = input[i].split('|').map(a => a.trim()).filter(a => a !== '');

        latitude = Number(latitude);
        longitude = Number(longitude);

        objectsArray.push(
            {
                [title1]: town,
                [title2]: Number(latitude.toFixed(2)),
                [title3]: Number(longitude.toFixed(2))
            }
        );
    }

    console.log(JSON.stringify(objectsArray));
}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);