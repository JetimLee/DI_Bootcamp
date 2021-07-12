const getAllTasks = (req, res) => {
  res.send("get all tasks");
};

const createTask = (req, res) => {
  res.json(req.body);
};

const getTask = (req, res) => {
  res.send("get single task task");
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
