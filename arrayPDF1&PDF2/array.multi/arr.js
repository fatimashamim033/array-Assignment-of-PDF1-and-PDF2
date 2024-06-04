// 2. Create an array named students containing at least three student objects. Each student 
// object should include a name and an array of grades.
var student1 = {
    name: "Shiraz Ali",
    class: "1st-year",
    grades: [80, 92, 77, 66, 88], //grades of shiraz ali
};
var student2 = {
    name: "Hassan Ali",
    class: "1st-year",
    grades: [82, 62, 87, 66, 84], //grades of Hassan Ali
};
var student3 = {
    name: "Zabrain khan",
    class: "1st-year",
    grades: [66, 97, 71, 65, 58], //grades of Zabrain khan
};
// 3. Implement a function named calculateAverageGrade that takes a student's grades as 
// input and returns the average grade for that student.
var students = [student1, student2, student3];
function calculateAverageGrade(grades) {
    var totalGrades = grades.reduce(function (sum, total) { return sum + total; }); // Calculate the sum of all grades
    return totalGrades / grades.length; //return the average grade
}
students.forEach(function (students) {
    var averageGrades = calculateAverageGrade(students.grades); // Calculate average grade for the current student
}, students.forEach(function (students) {
    var averageGrades = calculateAverageGrade(students.grades); // Calculate average grade for the current student
    // Log the student's name and average grade.
    console.log("student Name:".concat(student1.name, " Average Grades:").concat(averageGrades.toFixed(1), "%"));
    console.log("student Name:".concat(student2.name, " Average Grades:").concat(averageGrades.toFixed(1), "%"));
    console.log("student Name:".concat(student3.name, " Average Grades:").concat(averageGrades.toFixed(1), "%"));
}));
// 4. Display each student's name and average grade. Iterate through the students array, 
// calculate the average grade for each student using the calculateAverageGrade 
// function, and print their name and average grade.
