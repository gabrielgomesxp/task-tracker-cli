# Task Tracker CLI 🚀

A robust and simple Command Line Interface (CLI) to manage your daily tasks, built with **Node.js** and zero external dependencies.

This project was developed to demonstrate proficiency in Node.js native modules, File System (FS) manipulation, and clean architecture patterns.

## ✨ Features

- **Add** tasks with automatic ID generation.
- **List** all tasks or filter by status (`todo`, `in-progress`, `done`).
- **Update** task descriptions.
- **Delete** tasks.
- **Track Status**: Move tasks between `todo`, `in-progress`, and `done`.
- **Persistent Storage**: All data is saved in a `tasks.json` file.

## 🛠️ Tech Stack

- **Node.js**: Runtime environment.
- **Native FS/Path**: For database management.
- **Native Test Runner**: For unit testing.

## 🚀 How to Use

### 1. Installation
Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

```bash
# Clone the repository
git clone https://github.com/gabrielgomesxp/task-tracker-cli.git
cd task-tracker-cli
```

### 2. Available Commands

| Action | Command |
| :--- | :--- |
| **Add** | `node index.js add "Buy groceries"` |
| **List All** | `node index.js list` |
| **Filter List** | `node index.js list done` |
| **Update** | `node index.js update 1 "New description"` |
| **In Progress** | `node index.js mark-in-progress 1` |
| **Done** | `node index.js mark-done 1` |
| **Delete** | `node index.js delete 1` |

## 🧪 Testing

The project uses the native Node.js test runner. To run the test suite:

```bash
node --test tests/*.test.js
```

## 📂 Project Structure

- `index.js`: Main entry point and CLI router.
- `src/task-manager.js`: Business logic and state management.
- `src/storage.js`: Data persistence layer (JSON).
- `tests/`: Automated test suite.

---
Developed by [Gabriel Gomes](https://github.com/gabrielgomesxp)
