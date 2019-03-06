//Refactored the above code so that we have a function that can be called as many times as needed. 
const studentComponent = (name, subject,info) => {
  return `
      <div class="student">
          ${h1(name[0], "xx-large passing")}
          ${section(subject[1], "bordered dashed section--padded")}
          ${aside(info[2], "pushRight")}      
      </div>
  `
}

  //Iterate the array of students, and apply the correct style to the h1 depending on the score of the student being below 60, or above it.

for (const currentStudent of students) {
    let studentComponent = ""
    if (currentStudent.score >= 60) {
        studentComponent = "passingStudent"
    } else {
        studentComponent = "failingStudent"
    }
}
console.table(students)

  
