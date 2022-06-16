function roadRadar(drivingSpeed, area){
    let speedLimit;
    let speed = Number(drivingSpeed);


    switch (area){
        case 'motorway':
            speedLimit = 130;
            break;
        case 'interstate':
            speedLimit = 90;
            break;
        case 'city':
            speedLimit = 50;
            break;
        case 'residential':
            speedLimit = 20;
            break;
    }

    if (speed <= speedLimit){
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
    } else {
        let status;
        let overLimit = speed - speedLimit;

        if (overLimit <= 20){
            status = 'speeding';
        } else if (overLimit <= 40){
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }

        console.log(`The speed is ${overLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
}

roadRadar(21, 'residential');