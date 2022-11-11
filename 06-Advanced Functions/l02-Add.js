function solution(number){

    return function (addNumber){
        return number + addNumber;
    }
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
