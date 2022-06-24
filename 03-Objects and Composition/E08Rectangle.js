function rectangle(width, height, color){
    let colorArray = color.split('');

    colorArray[0] = colorArray[0].toUpperCase();
    color = colorArray.join('');

    return {
        width,
        height,
        color,
        calcArea() {
            return this.width * this.height;
        }
    }
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
