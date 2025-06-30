const Task = require('../models/Task');

//getTasks is an async controller function to handle the GET /api/tasks route.
exports.getTasks = async (req, res) => { //getTasks is an async controller function to handle the GET /api/tasks route.
  const tasks = await Task.find();// Task.find() fetches all tasks from the database.
  res.json(tasks);//res.json(tasks) sends them back to the client as a JSON array.
};
//addTask handles POST /api/tasks
exports.addTask = async (req, res) => {
  const task = new Task(req.body); //new Task(req.body) creates a new Task using the data sent in the request body.
  await task.save();await task.save() // saves it to MongoDB.
  res.json(task);//res.json(task) returns the saved task.
};

// updateTask handles PUT /api/tasks/:id.
//req.params.id gets the task's ID from the URL.
exports.updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true }); //{ new: true } tells Mongoose to return the updated document.
  res.json(task);// The updated task is returned as JSON.
};

//deleteTask handles DELETE /api/tasks/:id.
exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id); // It deletes the task with the matching ID using Task.findByIdAndDelete().
  res.json({ message: 'Task deleted' });
};
