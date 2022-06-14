function mathOperations(a, b, sign){
    let result = 0;

    switch (sign){
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
        case '%':
            result = a % b;
            break;
        case '**':
            result = a ** b;
            break;
    }

    console.log(result);
}

mathOperations(5, 6, '+');