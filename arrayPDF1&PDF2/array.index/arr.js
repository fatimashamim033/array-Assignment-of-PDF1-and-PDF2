// 2. Define an array named employees containing employee objects. Each employee 
// object should include a name, hoursWorked, hourlyRate, and salary.
var Employee1 = {
    name: "Fatima",
    id: 6546,
    hoursworked: 12,
    hourlyrate: 40,
    salary: 0,
};
var Employee2 = {
    name: "Maryam",
    id: 6547,
    hoursworked: 20,
    hourlyrate: 50,
    salary: 0,
};
var Employee3 = {
    name: "Shamim",
    id: 6548,
    hoursworked: 33,
    hourlyrate: 65,
    salary: 0,
};
// 3. Implement a function named calculateSalary that calculates the salary for each 
// employee based on the hours worked and hourly rate.
var Employees = [Employee1, Employee2, Employee3]; //we store all 3 employee object in an array name Employees.
function calculatesalary(Employees) {
    Employees.salary = Employees.hoursworked * Employees.hourlyrate; //calculate the base salary base on employee hours he worked and his hourly rate.
    // 4. If an employee has worked 20 hours or more, apply a 10% bonus to their salary
    if (Employees.hoursworked >= 20) {
        //here we use if condition if employee work 20 hours or more so add 10% on his salary.
        Employees.salary = Employees.salary + (Employees.salary / 100) * 10; //Add 10% to the base salary
    }
    return Employees;
}
// Calculate and log the salary for each employee individually
console.log(calculatesalary(Employee1));
console.log(calculatesalary(Employee2));
console.log(calculatesalary(Employee3));
