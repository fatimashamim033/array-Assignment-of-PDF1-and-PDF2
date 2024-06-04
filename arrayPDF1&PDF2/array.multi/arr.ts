// Part 2: Multi-Dimensional Arrays and Tuples - Student Grades
// Challenge:
// You are tasked with creating a student grading system. Implement functions and logic to 
// manage student grades effectively.
// 1. Define a TypeScript type alias named Student to represent a student with the 
// following properties:
// • name (string): The name of the student.
// • grades (number[ ]): An array of grades for different subjects.
type student = {
    name: string;
    class: string;
    grades: number[]; 
  };

// 2. Create an array named students containing at least three student objects. Each student 
// object should include a name and an array of grades.

let student1:student = {
    name: "Fatima",
    class: "1st-year",
    grades: [80, 92, 77, 66, 88], //grades of shiraz ali
  };
  
  let student2:student = {
      name: "Maryam",
      class: "1st-year",
      grades: [82, 62, 87, 66, 84], //grades of Hassan Ali
    };
  
    let student3:student= {
      name: "Shamim",
      class: "1st-year",
      grades: [66, 97, 71, 65, 58], //grades of Zabrain khan
    };



// 3. Implement a function named calculateAverageGrade that takes a student's grades as 
// input and returns the average grade for that student.

let students=[student1,student2,student3] 
  
function calculateAverageGrade(grades:number[]){ 
  let totalGrades=grades.reduce((sum,total)=>sum+total); // Calculate the sum of all grades
  return totalGrades/grades.length //return the average grade
}

// 4. Display each student's name and average grade. Iterate through the students array, 
// calculate the average grade for each student using the calculateAverageGrade 
// function, and print their name and average grade.

students.forEach(students=>{
  let averageGrades=calculateAverageGrade(students.grades) // Calculate average grade for the current student


},
students.forEach(students=>{
    let averageGrades=calculateAverageGrade(students.grades) // Calculate average grade for the current student
    // Log the student's name and average grade.
    console.log(`student Name:${student1.name} Average Grades:${averageGrades.toFixed(1)}%`);
    console.log(`student Name:${student2.name} Average Grades:${averageGrades.toFixed(1)}%`);
    console.log(`student Name:${student3.name} Average Grades:${averageGrades.toFixed(1)}%`);

  }))
