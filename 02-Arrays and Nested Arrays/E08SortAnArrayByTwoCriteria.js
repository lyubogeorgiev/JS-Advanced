function sortArray(words){
    words.sort(function (a, b){
        if (a.localeCompare(b, 'en', {sensitivity:'base'}) === 0
            && a.length - b.length === 0){
            return a.localeCompare((b, 'en', {sensitivity: 'base'}));
        } else {
            return a.length - b.length;
        }
    });

    for (let word of words){
        console.log(word);
    }
}

sortArray(['test',
    'Deny',
    'Omen',
    'Default']);