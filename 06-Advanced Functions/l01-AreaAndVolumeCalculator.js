function area() {
    return Math.abs(this.x * this.y);
}

function vol() {
    return Math.abs(this.x * this.y * this.z);
}

function solve(area, vol, input){
    console.log('test');

    let resultArray = [];
    let inputArr = JSON.parse(input);

    for (const element of inputArr) {

        let elementVolume = vol.call(element);
        let elementArea = area.call(element);

        resultArray.push({area: elementArea, volume: elementVolume});
    }

    return resultArray;
}

solve(area, vol, `[
{"x":"1","y":"2","z":"10"},
{"x":"7","y":"7","z":"10"},
{"x":"5","y":"2","z":"10"}
]`
);