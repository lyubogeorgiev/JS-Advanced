function solution(){

    let currentString = '';

    return {
        append: (appendString) => currentString += appendString,
        removeStart: (number) => currentString = currentString.substring(number),
        removeEnd: (number) => currentString = currentString.substring(0, currentString.length - number),
        print: () => console.log(currentString)
 };
}

let firstZeroTest = solution();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
