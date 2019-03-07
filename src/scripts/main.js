//
const h1 =(...props) => {
  return `<h1 class="${props[1]}">${props[0]}</h1>`
}
const section =(...props) => {
  return `<section class="bordered dashed ${props[1]}">${props[0]}</h1>`
}
const aside =(...props) => {
  return `<aside class="${props[1]}">${props[0]}</h1>`
}

//Refactored the above code so that we have a function that can be called as many times as needed. 
const passingStudent = (...props) => {
  return `
      <div class="student">
          ${h1(props[0], "xx-large passing")}
          ${section(props[1], "section--padded")}
          ${aside(props[2], "pushRight")}      
      </div>
  `
}
const failingStudent = (...props) => {
  return `
      <div class="student">
          ${h1(props[0], "xx-large failing")}
          ${section(props[1], "section--padded")}
          ${aside(props[2], "pushRight")}      
      </div>
  `
}
  //Iterate the array of students, and apply the correct style to the h1 depending on the score of the student being below 60, or above it.

for (const currentStudent of students) {
    let studentComponent = ""
    if (currentStudent.score >= 60) {
        studentComponent = passingStudent(currentStudent.name, currentStudent.subject, currentStudent.info)
        document.querySelector('#container').innerHTML +=studentComponent
    } else {
        studentComponent = failingStudent(currentStudent.name, currentStudent.subject, currentStudent.info)
        document.querySelector('#container').innerHTML +=studentComponent
    }
}
console.table(students)

  
