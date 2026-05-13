import { test, describe, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { 
  addTask, 
  listTasks, 
  updateTask, 
  deleteTask, 
  updateStatus 
} from '../src/task-manager.js';

const TEST_DB = path.join(process.cwd(), 'tasks-manager-test.json');

describe('Task Manager Logic (LEGO: task-manager.js)', () => {

  // Limpa o arquivo de teste antes e depois de cada execução
  const cleanup = () => {
    if (fs.existsSync(TEST_DB)) {
      fs.unlinkSync(TEST_DB);
    }
  };

  beforeEach(() => {
    cleanup();
    // Inicia com um arquivo vazio ou garantido
    fs.writeFileSync(TEST_DB, JSON.stringify([]));
  });

  afterEach(() => {
    cleanup();
  });

  test('Deve adicionar uma nova tarefa com ID incremental', () => {
    const task1 = addTask('Primeira tarefa', TEST_DB);
    const task2 = addTask('Segunda tarefa', TEST_DB);

    assert.strictEqual(task1.id, 1);
    assert.strictEqual(task1.description, 'Primeira tarefa');
    assert.strictEqual(task1.status, 'todo');

    assert.strictEqual(task2.id, 2);
    assert.strictEqual(task2.description, 'Segunda tarefa');
  });

  test('Deve listar todas as tarefas', () => {
    addTask('Tarefa 1', TEST_DB);
    addTask('Tarefa 2', TEST_DB);

    const tasks = listTasks(null, TEST_DB);
    assert.strictEqual(tasks.length, 2);
  });

  test('Deve filtrar tarefas por status', () => {
    addTask('Tarefa Todo', TEST_DB);
    const t2 = addTask('Tarefa Done', TEST_DB);
    updateStatus(t2.id, 'done', TEST_DB);

    const doneTasks = listTasks('done', TEST_DB);
    assert.strictEqual(doneTasks.length, 1);
    assert.strictEqual(doneTasks[0].status, 'done');
  });

  test('Deve atualizar a descrição de uma tarefa', () => {
    const task = addTask('Original', TEST_DB);
    const updated = updateTask(task.id, 'Atualizada', TEST_DB);

    assert.strictEqual(updated.description, 'Atualizada');
    
    const tasks = listTasks(null, TEST_DB);
    assert.strictEqual(tasks[0].description, 'Atualizada');
  });

  test('Deve deletar uma tarefa pelo ID', () => {
    const task = addTask('Para deletar', TEST_DB);
    deleteTask(task.id, TEST_DB);

    const tasks = listTasks(null, TEST_DB);
    assert.strictEqual(tasks.length, 0);
  });

  test('Deve atualizar o status de uma tarefa', () => {
    const task = addTask('Mudar status', TEST_DB);
    const updated = updateStatus(task.id, 'in-progress', TEST_DB);

    assert.strictEqual(updated.status, 'in-progress');
  });
});
