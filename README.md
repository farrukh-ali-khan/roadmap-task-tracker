# Task Tracker CLI

A simple Command Line Interface (CLI) tool to track and manage your tasks. This project helps you organize your to-do list by adding, updating, deleting tasks, and marking them as in progress or completed.

## Project URL

[Task Tracker CLI Project](https://roadmap.sh/projects/task-tracker)

## Features

- Add, update, delete tasks
- Mark tasks as "in-progress" or "done"
- List all tasks or filter tasks based on their status (todo, in-progress, done)
- Task data is stored in a `tasks.json` file in the project directory

## Requirements

- Node.js (to run the JavaScript code)
- A terminal or command line interface
- No external libraries are used; native Node.js modules (such as `fs` and `path`) are utilized for file system interaction.

## Setup Instructions

### 1. Clone the Project

First, clone this repository to your local machine:

```bash
git clone <your-repository-url>
cd task-tracker-cli
```

### 2. Make the script executable

Run the following command to make the index.js file executable:

```bash
chmod +x index.js
```

### 3. Run the Commands

Now you're ready to use the Task Tracker CLI app. Here are the available commands:

Add a new task:

```bash
./index.js add "Buy groceries"
```

This will add a new task to your task list.

Update a task:

```bash
./index.js update <task-id> "Buy groceries and cook dinner"`
```

This will update the task with the specified ID.

Delete a task:

````bash
./index.js delete <task-id>
```

This will delete the task with the specified ID.

Mark a task as "in-progress":
```bash
./index.js mark-in-progress <task-id>
````

This will mark the task with the specified ID as "in-progress".

Mark a task as "done":

```bash
./index.js mark-done <task-id>
```

This will mark the task with the specified ID as "done".

List all tasks:

```bash
./index.js list
```

This will list all tasks.

List tasks by status:

```bash
./index.js list done
./index.js list todo
./index.js list in-progress
```

These commands allow you to filter and list tasks based on their status (done, todo, or in-progress).
