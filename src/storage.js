import fs from 'node:fs';

/**
 * Persists the task list to a JSON file.
 * @param {Array} tasks - List of task objects.
 * @param {string} filePath - Target file path.
 */
export function saveTasks(tasks, filePath = 'tasks.json') {
  try {
    const data = JSON.stringify(tasks, null, 2);
    fs.writeFileSync(filePath, data, 'utf8');
  } catch (error) {
    throw new Error(`Failed to save tasks: ${error.message}`);
  }
}

/**
 * Loads the task list from a JSON file.
 * @param {string} filePath - Source file path.
 * @returns {Array} - List of tasks or empty array if file missing.
 */
export function loadTasks(filePath = 'tasks.json') {
  try {
    if (!fs.existsSync(filePath)) {
      return [];
    }
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    throw new Error(`Failed to load tasks: ${error.message}`);
  }
}
