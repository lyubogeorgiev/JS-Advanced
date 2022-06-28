function sumTable() {
    let table = document.querySelector('table');
    let numbersToSum = Array.from(table.querySelectorAll('tr td:nth-of-type(2)'));

    // console.log(numbersToSum);

    numbersToSum.pop();

    document.getElementById('sum').textContent = String(numbersToSum.reduce((a, b) => {
        let currentValue = Number(b.textContent) || 0;
        console.log(currentValue);
        return a + currentValue}, 0));
}