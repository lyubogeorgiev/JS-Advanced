function add(number){
    let sum = 0;

    function inner(num2){

        sum += num2;
        return inner;
    }
    inner.toString = ()=>{
        return sum.toString();
    }

    return inner(number);

}

console.log(add(2)(4)(5).toString());