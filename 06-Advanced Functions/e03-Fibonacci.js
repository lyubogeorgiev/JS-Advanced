function getFibonator(){
    let previousFibonacci = 0;
    let currentFibonacci = 1;

    return function fibonacci(){
        let newFibonacci = previousFibonacci + currentFibonacci;
        previousFibonacci = currentFibonacci;
        currentFibonacci = newFibonacci;

        return previousFibonacci;
    }
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
