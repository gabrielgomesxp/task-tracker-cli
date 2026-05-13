import { loadTasks, saveTasks } from './storage.js';

/**
 * Creates and saves a new task.
 * @param {string} description 
 * @param {string} filePath 
 * @returns {Object} Created task.
 */
export function addTask(description, filePath) {
  const tasks = loadTasks(filePath);
  const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
  
  const newTask = {
    id: newId,
    description,
    status: 'todo',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  tasks.push(newTask);
  saveTasks(tasks, filePath);
  return newTask;
}

/**
 * Lists tasks, optionally filtered by status.
 * @param {string} status 
 * @param {string} filePath 
 * @returns {Array}
 */
export function listTasks(status, filePath) {
  const tasks = loadTasks(filePath);
  return status ? tasks.filter(task => task.status === status) : tasks;
}

/**
 * Updates the description of an existing task.
 * @param {number} id 
 * @param {string} description 
 * @param {string} filePath 
 * @returns {Object|undefined} Updated task.
 */
export function updateTask(id, description, filePath) {
  const tasks = loadTasks(filePath);
  const index = tasks.findIndex(task => task.id === id);

  if (index === -1) return undefined;

  tasks[index] = {
    ...tasks[index],
    description,
    updatedAt: new Date().toISOString()
  };

  saveTasks(tasks, filePath);
  return tasks[index];
}

/**
 * Deletes a task by ID.
 * @param {number} id 
 * @param {string} filePath 
 */
export function deleteTask(id, filePath) {
  const tasks = loadTasks(filePath);
  const filtered = tasks.filter(task => task.id !== id);
  saveTasks(filtered, filePath);
}

/**
 * Updates the status of a task.
 * @param {number} id 
 * @param {string} status 
 * @param {string} filePath 
 * @returns {Object|undefined} Updated task.
 */
export function updateStatus(id, status, filePath) {
  const tasks = loadTasks(filePath);
  const index = tasks.findIndex(task => task.id === id);

  if (index === -1) return undefined;

  tasks[index] = {
    ...tasks[index],
    status,
    updatedAt: new Date().toISOString()
  };

  saveTasks(tasks, filePath);
  return tasks[index];
}
