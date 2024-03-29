class Stringer{
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    increase(number){
        this.innerLength += number;
    }

    decrease(number){
        this.innerLength -= number;

        if (this.innerLength < 0){
            this.innerLength = 0;
        }
    }

    toString(){
        if (this.innerLength < this.innerString.length){
            return this.innerString.substring(0, this.innerLength) + "...";
        }

        return this.innerString;
    }
}

let test = new Stringer("Test", 3);
console.log(test.toString()); // Test

// test.decrease(3);
// console.log(test.toString()); // Te...
//
// test.decrease(5);
// console.log(test.toString()); // ...
//
// test.increase(4);
// console.log(test.toString()); // Test
