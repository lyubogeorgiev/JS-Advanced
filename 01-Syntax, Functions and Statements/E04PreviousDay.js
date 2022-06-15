function previousDay(year, month, day){

    let dateInput = `${year}-${month}-${day}`;

    // let date = new Date(year, month, day);
    let date = new Date(dateInput);

    // let previous = new Date(date.getTime());
    // previous.setDate(date.getDate() - 1);

    date.setDate(date.getDate() - 1);

    // console.log(`${previous.getFullYear()}-${previous.getMonth()}-${previous.getDate()}`);
    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
}

previousDay(2016, 10, 1);
previousDay(2016, 9, 30);