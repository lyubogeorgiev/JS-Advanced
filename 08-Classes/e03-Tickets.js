function solveTickets(ticketsArray, sortingCriteria){
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let tickets = [];

    for (const ticket of ticketsArray) {
        let [destinationName, price, status] = ticket.split('|');

        tickets.push(new Ticket(destinationName, price, status));
    }

    if (sortingCriteria === 'price'){
        tickets = tickets.sort((a, b) => a[sortingCriteria] - b[sortingCriteria]);
    } else {
        tickets = tickets.sort((a, b) => (a[sortingCriteria].localeCompare(b[sortingCriteria])));
    }

    return tickets;
}

console.log(solveTickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
));