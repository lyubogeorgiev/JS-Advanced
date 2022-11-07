function attachEventsListeners() {

    let daysElement = document.getElementById("days");
    let hoursElement = document.getElementById("hours");
    let minutesElement = document.getElementById("minutes");
    let secondsElement = document.getElementById("seconds");

    let rations = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    };


    //take buttons as a collection and attach event listener to all of them by using a for of loop
    let buttons = document.querySelectorAll("input[type=button]");

    for (const button of buttons) {
        button.addEventListener('click', calculate);
    }

    function convert(value, unit){
        let days = Number(value) / rations[unit];

        return {
            days: days,
            hours: days * rations.hours,
            minutes: days * rations.minutes,
            seconds: days * rations.seconds
        }
    }

    function calculate(e){
        let input = e.target.parentElement.querySelector("input[type='text']");

        let result = convert(Number(input.value), input.id);

        [daysElement.value, hoursElement.value, minutesElement.value, secondsElement.value] =
            [result.days, result.hours, result.minutes, result.seconds];
    }
}