function solve(array, value){
    let result = [];

    if (value === "asc"){
        result = array.sort((a, b) => a - b);
    } else {
        result = array.sort((a,b) => b - a);
    }

    return result;
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));