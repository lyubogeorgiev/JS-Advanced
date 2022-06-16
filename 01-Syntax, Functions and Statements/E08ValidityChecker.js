function validityChecker(inputX1, inputY1, inputX2, inputY2){

    checkDistance(inputX1, inputY1, 0, 0);
    checkDistance(inputX2, inputY2, 0, 0);
    checkDistance(inputX1, inputY1, inputX2, inputY2);

    function checkDistance(x1, y1, x2, y2){

        let distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
        let isValid = false;

        if (distance % 1 === 0){
            isValid = true;
        }

        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid ? 'valid' : 'invalid'}`);
    }
}

validityChecker(3, 0, 0, 4);