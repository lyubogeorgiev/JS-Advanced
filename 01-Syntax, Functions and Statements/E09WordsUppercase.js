function wordsUppercase(word){
    let words = word.split(/[\W]+/).filter(a => {
        return a !== null && a !== '' && a !== ' ';
    });

    let resultWords = [];

    for (let i = 0; i < words.length; i++) {
        resultWords[i] = words[i].toUpperCase();
    }

    let resultString = resultWords.join(", ");

    console.log(resultString);
}

wordsUppercase('Hi, how are you?');