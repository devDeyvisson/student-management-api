const db = require("../database/memoryDatabase");

function createStudent(student) {
  db.students.push(student);

  return student;
}

function getAllStudent() {
  return db.students;
}

function updateStudentById(id, student) {
  let index = db.students.findIndex((student) => student.id == id);

  if (index === -1) return null;

  db.students[index] = student;

  return student;
}

function deleteStudentById(id) {
  let index = db.students.findIndex((student) => student.id == id);

  if (index === -1) return false;

  db.students.splice(index, 1);

  return true;
}

function findById(id) {
  const studentFound = db.students.find((student) => student.id === id);

  if (!studentFound) return null;

  return studentFound;
}

function getStudentByName(name) {
  let selectedStudent = db.students.filter((student) =>
    student.name.toLowerCase().includes(name.toLowerCase())
  );

  return selectedStudent;
}

function getStudentByRegistration(registration) {
  let selectedStudent = db.students.filter((student) =>
    student.registration.toLowerCase().includes(registration.toLowerCase())
  );

  return selectedStudent;
}

function getStudentByCourse(course) {
  let selectedStudent = db.students.filter((student) =>
    student.course.toLowerCase().includes(course.toLowerCase())
  );

  return selectedStudent;
}

function getStudentByYear(year) {
  let selectedStudent = db.students.filter((student) => student.year == year);

  return selectedStudent;
}

module.exports = {
  createStudent,
  getAllStudent,
  updateStudentById,
  deleteStudentById,
  findById,
  getStudentByName,
  getStudentByRegistration,
  getStudentByCourse,
  getStudentByYear,
};
