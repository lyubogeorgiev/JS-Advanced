function printArrayWithGivenDelimiter(array, delimiter){
    return array.join(delimiter);
}

console.log(printArrayWithGivenDelimiter(['One',
        'Two',
        'Three',
        'Four',
        'Five'],
    '-'
));