function lastKNumberSequence(n, k){
    let sequence = [1];

    for (let i = 1; i < n; i++) {
        let nextElement = 0;

        for (let j = i - 1; j >= i - k ; j--) {
            if (j < 0){
                break;
            }

            nextElement += sequence[j];
        }

        sequence.push(nextElement);
    }

    return sequence;
}

console.log(lastKNumberSequence(6, 3));