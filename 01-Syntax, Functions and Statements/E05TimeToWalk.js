function timeToWalk(steps, footprintLength, studentSpeedKmH){
    let studentSpeedMtS = studentSpeedKmH * 1000 / 3600;
    let distanceInMeters = steps * footprintLength;
    let breaks = Math.floor(distanceInMeters / 500) * 60;

    let timeInSec = distanceInMeters / studentSpeedMtS + breaks;

    let seconds = Math.ceil(timeInSec % 60);
    let minutes = Math.ceil((timeInSec - seconds) / 60 % 60);
    let hours = Math.floor((timeInSec - seconds) / 60 / 60);

    let secondsString = String(seconds).padStart(2, '0');
    let minutesString = String(minutes).padStart(2, '0');
    let hoursString = String(hours).padStart(2, '0');

    console.log(`${hoursString}:${minutesString}:${secondsString}`);
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);