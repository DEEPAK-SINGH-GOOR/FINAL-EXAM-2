 // routes.js
const express = require('express');
const rankController = require('./rankController');

const router = express.Router();

router.post('/rank', (req, res) => {
  const studentMarks = req.body.studentMarks; // Assuming an array of marks

  // Create Student objects
  const students = studentMarks.map(marks => new Student(marks));

  const rankedStudents = rankController.rankStudents(students);
  res.json(rankedStudents);
});

module.exports = router;