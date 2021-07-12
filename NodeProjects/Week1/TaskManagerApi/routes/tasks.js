const express = require("express");
const {
  getAllTasks,
  createTask,
  getTask,
  editTask,
  deleteTask,
} = require("../controllers/tasks");
const router = express.Router();

//using controllers here to prevent the file from getting seriously bloated
//don't forget to include item id's when doing CRUD operations - otherwise how will you target what you need to target?

router.get("/", getAllTasks);
router.post("/create-task", createTask);
router.get("/get-task/:id", getTask);
router.patch("/edit-task/:id", editTask);
router.delete("/delete-task/:id", deleteTask);

module.exports = router;
