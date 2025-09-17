const express = require("express");

const {
  createStudentController,
  getAllStudentController,
  updateStudentByIdController,
  deleteStudentByIdController,
  searchStudentController,
} = require("../controllers/studentController");

const router = express.Router();

router.post("/students", createStudentController);
router.get("/students", getAllStudentController);
router.put("/students/:id", updateStudentByIdController);
router.delete("/students/:id", deleteStudentByIdController);

router.get("/students/search", searchStudentController);

module.exports = router;
