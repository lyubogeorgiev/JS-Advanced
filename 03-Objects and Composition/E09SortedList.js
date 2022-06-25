function createSortedList(){
    return {
        numbers: [],
        size: -1,
        add(number) {
            this.numbers.push(number);
            this.numbers.sort((a,b) => a - b);
            this.size = this.numbers.length;
        },
        get(indexToGet) {
            if (indexToGet >= 0 && indexToGet < this.size){
                return this.numbers[indexToGet];
            }
        },
        remove(indexToRemove) {
            if (indexToRemove >= 0 && indexToRemove < this.size){
                this.numbers.splice(indexToRemove, 1);
                this.numbers.sort((a,b) => a - b);
                this.size = this.numbers.length;
            }
        },
    };
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
