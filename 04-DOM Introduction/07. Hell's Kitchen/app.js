function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      const textAreaElement = JSON.parse(document.querySelector('#inputs textarea').value);

      // console.log(textAreaElement);

      let restaurants = [];

      for (let i = 0; i < textAreaElement.length; i++) {

         let restaurantObject = textAreaElement[i].split(' - ');

         if (restaurants.entries())
         restaurants.push({name: restaurantObject[0], employees : [], averageSalary: 0, bestSalary: 0});

         let listOfEmployees = restaurantObject[1].split(', ');
         // console.log(listOfEmployees);

         for (const employee of listOfEmployees) {
            const employeeTokens = employee.split(' ');
            const employeeName = employeeTokens[0];
            const employeeSalary = Number(employeeTokens[1]);
            restaurants[i].employees.push({name: employeeName, salary: employeeSalary});
         }

         let currentRestaurantEmployees = Object.values(restaurants[i]['employees']);
         let sumOfAllSalaries = 0;
         let currentBestSalary = 0;

         for (const employee of currentRestaurantEmployees) {
            const currentEmployeeSalary = employee.salary;

            if (currentEmployeeSalary > currentBestSalary){
               currentBestSalary = currentEmployeeSalary;
            }

            sumOfAllSalaries += currentEmployeeSalary;
         }


         // console.log(currentRestaurantSalaries);

         // console.log(restaurants[i]);
      }

      // console.log(restaurants);

   }
}