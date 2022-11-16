function printDeckOfCards(cards){
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

    let cardsDeck = [];

    for (const card of cards) {
        let cardFace = card.slice(0, card.length - 1);
        let cardSuite = card.charAt(card.length - 1);

        try {
            let createdCard = createCard(cardFace, cardSuite);
            cardsDeck.push(`${createdCard.face}${createdCard.suit}`);

        } catch {
            console.log(`Invalid card: ${cardFace}${cardSuite}`);
        }
        // let currentCard = createCard(cardFace, cardSuite);
        // cardsDeck.push(currentCard);
    }

    console.log(cardsDeck.join(' '));
}

printDeckOfCards(['5S', '3D', 'QD', '1C']);