function solve(data, criteria){
    let employees = JSON.parse(data);

    let criteriaTokens = criteria.split("-");

    let keyCriteria = criteriaTokens[0];
    let valueCriteria = criteriaTokens[1];

    let resultArray = employees.filter((x) => x[keyCriteria] === valueCriteria);

    for (let i = 0; i < resultArray.length; i++) {
        console.log(`${i}. ${resultArray[i]["first_name"]} ${resultArray[i]["last_name"]} - ${resultArray[i]["email"]}`);
    }
}

solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female'
);