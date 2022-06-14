function daysInMonth(month, year){
    let numberOfDays = new Date(year, month, 0).getDate();

    console.log(numberOfDays);
}

daysInMonth(1, 2012);