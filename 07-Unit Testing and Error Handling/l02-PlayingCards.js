function createCard(face, suit){
    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suits = {S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'};

    if (!(faces.some(f => f === face)) || !(suits[suit])){
        throw new Error();
    }

    let card = {
        face,
        suit: suits[suit],
        toString() {
            return `${this.face}:${this.suit}`;
        }
    };

    return card;
}

let card = createCard(1, 'S');
console.log(card.toString());