function createHTMTable(input){
    let objects = JSON.parse(input);

    let ths = (objects) => {
        let result = '';

        for (const objectKey in objects) {
            result += `<th>${objectKey}</th>`;
        }

        return result;
    };

    //generate rows
    let rows = (objects) => {
        for (let i = 0; i < objects.length; i++) {
            let inside = '';

            // console.log(objects[i]);

            for (const objectElement in objects[i]) {
                inside += `<td>${objects[i][objectElement]}</td>`;
            }
            console.log(`   <tr>${inside}</tr>`)
        }
    };

    console.log('<table>');
    console.log(`   <tr>${ths(objects[0])}</tr>`);
    //call function to generate the html
    rows(objects);
    console.log('</table>');

}

createHTMTable(`[{"Name":"Pesho",
    "Score":4,
    "Grade":8},
   {"Name":"Gosho",
    "Score":5,
    "Grade":8},
   {"Name":"Angel",
    "Score":5.50,
    "Grade":10}]`

);