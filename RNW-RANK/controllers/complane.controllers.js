const Student = require("../model/complane.model");
const rankMarks = (marks) => {
  marks.sort((a, b) => b - a);

  marks.forEach((mark, index) => {
    mark.rank = index + 1;
  });
  return marks;
};
module.exports = {
  rankMarks,
};
