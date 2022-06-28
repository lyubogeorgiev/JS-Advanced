function colorize() {
    let rowsToColorize = document.querySelectorAll('tr:nth-of-type(2n)');
    for (const row of rowsToColorize) {
        row.style.backgroundColor = 'teal';
    }
}