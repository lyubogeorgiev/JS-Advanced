function rotateArray(array, n){
    for (let i = 0; i < n; i++) {
        array.unshift(array.pop());
    }

    return array.join(' ');
}

console.log(rotateArray(['Banana',
        'Orange',
        'Coconut',
        'Apple'],
    15
));