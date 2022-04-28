const express = require("express");

const HelloController = require("../controllers/HelloController");
const StudentsController = require("../controllers/StudentsController");

const router = express.Router();

// This is my first get routing

router.get("/", HelloController.Hello);
router.post("/student", StudentsController.InsertStudent);
router.get("/students", StudentsController.ReadStudent);
router.post("/student/:id", StudentsController.UpdateStudent);
router.delete("/student/:id", StudentsController.DeleteStudent);

module.exports = router;
