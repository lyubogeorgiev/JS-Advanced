function createAssemblyLine(){
    let object ={
        hasClima: function (car){
            car.temp = 21;
            car.tempSettings = 21;
            car.adjustTemp = () => {
                if  (car.temp < car.tempSettings){
                    car.temp += 1;
                } else if (car.temp > car.tempSettings){
                    car.temp -= 1;
                }
            };
        },

        hasAudio: function (car){
            car.currentTrack = {
                name: null,
                artist: null,
            };

            car.nowPlaying = function(){
                if (this.currentTrack){
                    console.log(`Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`);
                }
            };
        },

        hasParktronic: function(car){
            car.checkDistance = function (distance){
                let output = '';

                if (distance < 0.1){
                    output = 'Beep! Beep! Beep!';
                } else if (distance >= 0.1 && distance < 0.25){
                    output = 'Beep! Beep!';
                } else if (distance < 0.5) {
                    output = 'Beep!';
                }

                console.log(output);
            };
        }
    };

    return object;
}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};


assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();
