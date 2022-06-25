function jansNation(input){
    let stack =[];

    //test if the input is a number or operator
    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i])){
            if (stack.length < 2){
                console.log('Error: not enough operands!');
                return;
            }
            switch (input[i]){
                case '+':
                    add(stack);
                    break;
                case '-':
                    subtract(stack);
                    break;
                case '*':
                    multiply(stack);
                    break;
                case '/':
                    divide(stack);
                    break;
            }
        } else {
            stack.push(Number(input[i]));
        }
    }

    function add(stack){
        let first = stack.pop();
        let second = stack.pop();

        stack.push(first + second);
    }

    function subtract(stack){
        let first = stack.pop();
        let second = stack.pop();

        stack.push(second - first);
    }

    function multiply(stack){
        let first = stack.pop();
        let second = stack.pop();

        stack.push(second * first);
    }

    function divide(stack){
        let first = stack.pop();
        let second = stack.pop();

        stack.push(second / first);
    }

    if (stack.length > 1){
        console.log('Error: too many operands!')
    } else {
        console.log(stack[0]);
    }
}

jansNation([3,
    '+']
);