// rankController.js
const Student = require('./Student');

function rankStudents(students) {
  // Sort students by marks in descending order
  students.sort((a, b) => b.marks - a.marks);

  // Assign ranks
  let rank = 1;
  students.forEach((student) => {
    student.rank = rank++;
  });

  return students;
}

module.exports = {
  rankStudents,
};