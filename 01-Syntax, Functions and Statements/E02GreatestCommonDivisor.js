function gcd(a, b){
    let gcd;

    if (a > b){
        for (let i = b; i > 0 ; i--) {
            if (a % i === 0 && b % i === 0){
                gcd = i;
                break;
            }
        }
    } else {
        for (let i = a; i > 0 ; i--) {
            if (a % i === 0 && b % i === 0){
                gcd = i;
                break;
            }
        }
    }

    console.log(gcd);
}

gcd(15, 5);
gcd(2154, 458);