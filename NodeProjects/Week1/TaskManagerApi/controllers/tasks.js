const Task = require("../models/task");
const getAllTasks = async (req, res) => {
  let tasks;
  try {
    tasks = await Task.find({});
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).send(`There was an error in creating the task`);
  }
};

const createTask = async (req, res) => {
  const { name, completed } = req.body;
  let task;
  try {
    task = await Task.create({ name, completed });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).send(`There was an error in creating the task`);
  }
};

const getTask = async (req, res) => {
  const { id: taskID } = req.params;
  let task;
  try {
    task = await Task.findOne({ _id: taskID });
    if (!task) {
      res.status(404).json({ msg: `No task found with that ID` });
      return;
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).send(`there was an error in finding the task!`);
  }
};
const editTask = (req, res) => {
  res.send("edit task");
};
const deleteTask = async (req, res) => {
  const { id: taskID } = req.params;
  let task;
  try {
    task = await Task.findOne({ _id: taskID });
    if (!task) {
      res.status(404).json({ msg: `No task found with that ID` });
    } else {
      await task.delete();
      res.status(200).json({ msg: `Task with id of ${taskID} deleted` });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
//in an object here because i will be exporting multiple routes, helps keep code DRY
module.exports = {
  getAllTasks,
  createTask,
  getTask,
  editTask,
  deleteTask,
};
