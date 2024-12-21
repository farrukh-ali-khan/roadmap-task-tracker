#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const TASKS_FILE = path.join(__dirname, "tasks.json");

// Helper to load tasks
const loadTasks = () => {
  if (!fs.existsSync(TASKS_FILE)) {
    fs.writeFileSync(TASKS_FILE, JSON.stringify([]));
  }
  return JSON.parse(fs.readFileSync(TASKS_FILE, "utf8"));
};

// Helper to save tasks
const saveTasks = (tasks) => {
  fs.writeFileSync(TASKS_FILE, JSON.stringify(tasks, null, 2));
};

// Helper to generate unique ID
const generateId = () => Date.now().toString();

// Commands
const addTask = (description) => {
  const tasks = loadTasks();
  const newTask = {
    id: generateId(),
    description,
    status: "todo",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  tasks.push(newTask);
  saveTasks(tasks);
  console.log(`Task added successfully (ID: ${newTask.id})`);
};

const updateTask = (id, description) => {
  const tasks = loadTasks();
  const task = tasks.find((t) => t.id === id);
  if (!task) {
    return console.error(`Task with ID ${id} not found.`);
  }
  task.description = description;
  task.updatedAt = new Date().toISOString();
  saveTasks(tasks);
  console.log(`Task updated successfully (ID: ${id})`);
};

const deleteTask = (id) => {
  const tasks = loadTasks();
  const newTasks = tasks.filter((t) => t.id !== id);
  if (tasks.length === newTasks.length) {
    return console.error(`Task with ID ${id} not found.`);
  }
  saveTasks(newTasks);
  console.log(`Task deleted successfully (ID: ${id})`);
};

const markTask = (id, status) => {
  const tasks = loadTasks();
  const task = tasks.find((t) => t.id === id);
  if (!task) {
    return console.error(`Task with ID ${id} not found.`);
  }
  task.status = status;
  task.updatedAt = new Date().toISOString();
  saveTasks(tasks);
  console.log(`Task marked as ${status} (ID: ${id})`);
};

const listTasks = (filter = "all") => {
  const tasks = loadTasks();
  let filteredTasks = tasks;

  if (filter !== "all") {
    filteredTasks = tasks.filter((t) => t.status === filter);
  }

  if (filteredTasks.length === 0) {
    return console.log("No tasks found.");
  }

  console.log("Tasks:");
  filteredTasks.forEach((task) => {
    console.log(`- [${task.status}] ${task.id}: ${task.description}`);
  });
};

// Command Line Argument Parsing
const [command, ...args] = process.argv.slice(2);

switch (command) {
  case "add":
    addTask(args.join(" "));
    break;
  case "update":
    updateTask(args[0], args.slice(1).join(" "));
    break;
  case "delete":
    deleteTask(args[0]);
    break;
  case "mark-in-progress":
    markTask(args[0], "in-progress");
    break;
  case "mark-done":
    markTask(args[0], "done");
    break;
  case "list":
    listTasks(args[0] || "all");
    break;
  default:
    console.log(
      "Invalid command. Available commands: add, update, delete, mark-in-progress, mark-done, list"
    );
}
