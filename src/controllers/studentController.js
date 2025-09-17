const {
  createStudentService,
  getAllStudentService,
  updateStudentByIdService,
  deleteStudentByIdService,
  getStudentByCourseService,
  getStudentByNameService,
  getStudentByRegistrationService,
  getStudentByYearService,
} = require("../services/studentService");

function createStudentController(request, response) {
  try {
    const { name, registration, course, year } = request.body;

    if (!name || !registration || !course || !year) {
      return response.status(400).json({ message: "All fields are required." });
    }

    let newStudent = createStudentService(name, registration, course, year);

    return response.status(201).json(newStudent);
  } catch (error) {
    return response.status(500).json({ message: "Error creating student" });
  }
}

function getAllStudentController(request, response) {
  try {
    let students = getAllStudentService();
    return response.status(200).json(students);
  } catch (error) {
    return response
      .status(500)
      .json({ messaage: "Error listing all students." });
  }
}

function updateStudentByIdController(request, response) {
  try {
    const { id } = request.params;

    if (!id) {
      return response.status(400).json({ message: "The id is required." });
    }

    const { name, registration, course, year } = request.body;

    let updatedStudent = updateStudentByIdService(
      id,
      name,
      registration,
      course,
      year
    );

    if (!updatedStudent) {
      return response.status(404).json({ message: "Student not found." });
    }

    return response.status(200).json(updatedStudent);
  } catch (error) {
    return response.status(500).json({ message: "Error updating student." });
  }
}

function deleteStudentByIdController(request, response) {
  try {
    const { id } = request.params;

    if (!id) {
      return response.status(400).json({ message: "The id is required." });
    }

    let deletedStudent = deleteStudentByIdService(id);

    if (!deletedStudent) {
      return response.status(404).json({ message: "Student not found." });
    }

    return response.status(204).end();
  } catch (error) {
    return response.status(500).json({ message: "Error deleting student." });
  }
}

function searchStudentController(request, response) {
  try {
    const { name, registration, course, year } = request.query;

    if (name) {
      return response.status(200).json(getStudentByNameService(name));
    }

    if (registration) {
      return response
        .status(200)
        .json(getStudentByRegistrationService(registration));
    }

    if (course) {
      return response.status(200).json(getStudentByCourseService(course));
    }

    if (year) {
      return response.status(200).json(getStudentByYearService(year));
    }

    return response
      .status(400)
      .json({ message: "No search parameters were valid." });
  } catch (error) {
    return response.status(500).json({ message: "Error searching students." });
  }
}

module.exports = {
  createStudentController,
  getAllStudentController,
  updateStudentByIdController,
  deleteStudentByIdController,
  searchStudentController,
};
