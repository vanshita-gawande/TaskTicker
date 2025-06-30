This folder handles your API, database, and all server-side logic.

    Path	                                            Purpose
server.js	                           Entry point of your backend app (Express server). Handles routing, DB connection, and middleware.
.env	                               Stores sensitive info like MongoDB URI, port, etc. Never push this to GitHub.
models/Task.js	                       Mongoose schema that defines the structure of a task (title, completed, dueDate, etc.).
controllers/taskcontroller.js	       Contains logic for what to do when someone adds/gets/deletes a task. Keeps code clean.
routes/taskroutes.js	               Defines API endpoints like /api/tasks. Routes requests to controller functions.
node_modules/	                       All backend dependencies (created by npm install).