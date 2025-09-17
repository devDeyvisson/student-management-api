const {
  createStudent,
  updateStudentById,
  getAllStudent,
  deleteStudentById,
  findById,
  getStudentByRegistration,
  getStudentByName,
  getStudentByCourse,
  getStudentByYear,
} = require("../repositories/studentRepository");

function createStudentService(name, registration, course, year) {
  let student = {
    id: Date.now().toString(),
    name: name,
    registration: registration,
    course: course,
    year: year,
  };

  return createStudent(student);
}

function getAllStudentService() {
  return getAllStudent();
}
function updateStudentByIdService(id, name, registration, couse, year) {
  let studentFound = findById(id);

  if (!studentFound) return null;

  studentFound.name = name || studentFound.name;
  studentFound.registration = registration || studentFound.registration;
  studentFound.couse = couse || studentFound.couse;
  studentFound.year = year || studentFound.year;

  return updateStudentById(id, studentFound);
}

function deleteStudentByIdService(id) {
  return deleteStudentById(id);
}

function getStudentByNameService(name) {
  return getStudentByName(name);
}

function getStudentByRegistrationService(registration) {
  return getStudentByRegistration(registration);
}

function getStudentByCourseService(course) {
  return getStudentByCourse(course);
}

function getStudentByYearService(year) {
  return getStudentByYear(year);
}

module.exports = {
  createStudentService,
  getAllStudentService,
  updateStudentByIdService,
  deleteStudentByIdService,
  getStudentByRegistrationService,
  getStudentByNameService,
  getStudentByCourseService,
  getStudentByYearService,
};
