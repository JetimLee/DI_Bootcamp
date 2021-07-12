const Task = require("../models/task");
const getAllTasks = (req, res) => {
  res.send("get all tasks");
};

const createTask = async (req, res) => {
  const { name, completed } = req.body;
  const task = await Task.create({ name, completed });
  res.status(201).json(task);
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};
const editTask = (req, res) => {
  res.send("edit task");
};
const deleteTask = (req, res) => {
  res.send("delete task");
};
//in an object here because i will be exporting multiple routes, helps keep code DRY
module.exports = {
  getAllTasks,
  createTask,
  getTask,
  editTask,
  deleteTask,
};
