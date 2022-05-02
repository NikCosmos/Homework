'use strict';

const students = [
   {
      id: 10,
      name: 'John Smith',
      marks: [10, 8, 6, 9, 8, 7],
   },
   {
      id: 11,
      name: 'John Doe',
      marks: [9, 8, 7, 6, 7],
   },
   {
      id: 12,
      name: 'Thomas Anderson',
      marks: [6, 7, 10, 7],
   },
   {
      id: 13,
      name: 'Jean-Baptiste Emanuel Zorg',
      marks: [10, 9, 8, 9],
   },
];

averageStudentMark(students[0]);
averageGroupMark(students);

function averageStudentMark(indexStudent) {
   const sum = calcMarks(indexStudent.marks);
   alert(Math.trunc(sum / indexStudent.marks.length));
}

function averageGroupMark(students) {
   const arrMarks = getMarks(students);
   const sumMarks = calcMarks(arrMarks);
   alert(Math.trunc(sumMarks / arrMarks.length));
}

function getMarks(students) {
   const all = students.reduce((acc, val) => [acc, val.marks], []);
   return all.flat(4);
}

function calcMarks(val) {
   return val.reduce((acc, val) => acc + val);
}
