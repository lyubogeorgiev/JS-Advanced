class Company{
    constructor(){
        this.departments = {};
    }

    addEmployee(name, salary, position, department){
        this.validateInput(name);
        this.validateInput(salary);
        this.validateInput(position);
        this.validateInput(department);

        if (salary < 0){
            throw new Error('Invalid input!');
        }

        if (!this.departments[department]){
            this.departments[department] = [];
        }

        this.departments[department].push({name, salary, position});

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment(){
        // let bestDepartment = null;

        // let departmentsArray = Object.entries(this.departments);

        // return departmentsArray.sort((a, b) => {
        //     let averageSalaryA = a.map(x => x[1].salary).reduce((acc, currentValue) => acc + currentValue, 0) /
        //         a.map(x => x[1].salary).length;
        //
        //     let averageSalaryB = b.map(x => x[1].salary).reduce((acc, currentValue) => acc + currentValue, 0) /
        //         b.map(x => x[1].salary).length;
        //
        //     return a - b;
        // })

        let departmentsAvgSalary = new Map();

        for (const currentDepartment of Object.entries(this.departments)) {
            // console.log(currentDepartment);

            // console.log(currentDepartment[0]);
            // console.log(currentDepartment[1]);

            let currentDepAvgSalary = currentDepartment[1]
                .map(d => d.salary)
                .reduce((acc, current) => (acc + current), 0)
                / currentDepartment[1].length;

            // console.log(currentDepAvgSalary);

            departmentsAvgSalary.set(currentDepartment[0], currentDepAvgSalary);
        }

        // console.log(departmentsAvgSalary);

        let highestAvgSalaryDept = ([...departmentsAvgSalary.entries()].sort((a, b) => (b[1] - a[1]))[0]);

        let highestAvgSalaryDeptEmployeesSorted = this.departments[highestAvgSalaryDept[0]].sort((a, b) => {
            if (a.salary === b.salary){
                return a.name.localeCompare(b.name);
            }

            return b.salary - a.salary;
        });

        // console.log(this.departments.get(highestAvgSalaryDept[0]));

        // return departmentsArray.map(a => a[1].salary);
        // return departmentsArray;

        let bestDepartmentEmployees = '';
        // console.log(typeof bestDepartmentEmployees);
        // console.log(Object.values(bestDepartmentEmployees));
        // console.log(highestAvgSalaryDeptEmployeesSorted);
        // console.log(typeof highestAvgSalaryDept[1])

        highestAvgSalaryDeptEmployeesSorted
            .forEach(entry => bestDepartmentEmployees += Object.values(entry).join(' ') + '\n');

        let result = '';

        result += `Best Department is: ${highestAvgSalaryDept[0]}`;
        result += `\nBest Department is: ${highestAvgSalaryDept[0]}`;
        result += `\nAverage salary: ${highestAvgSalaryDept[1].toFixed(2)}`;
        result += `\n${bestDepartmentEmployees}`;

        return result;

        // return `Best Department is: ${highestAvgSalaryDept[0]}\nAverage salary: ${highestAvgSalaryDept[1].toFixed(2)}\n${bestDepartmentEmployees}`;
    }

    validateInput(input){
        if (input === null || input === undefined || input === ''){
            throw new Error("Invalid input!");
        }
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Human resources");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
// c.bestDepartment();