function pieceOfPie(pieFlavors, firstFlavor, secondFlavor){
    let firstIndex = pieFlavors.indexOf(firstFlavor);
    let lastIndex = pieFlavors.indexOf(secondFlavor);

    return pieFlavors.slice(firstIndex, lastIndex + 1);
}

console.log(pieceOfPie(['Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
));