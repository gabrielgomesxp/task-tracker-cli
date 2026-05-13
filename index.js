#!/usr/bin/env node

import { 
  addTask, 
  listTasks, 
  updateTask, 
  deleteTask, 
  updateStatus 
} from './src/task-manager.js';

const command = process.argv[2];
const args = process.argv.slice(3);

const displayTasks = (tasks) => {
  if (tasks.length === 0) {
    console.log('Nenhuma tarefa encontrada.');
    return;
  }
  tasks.forEach(task => {
    const statusIcon = task.status === 'done' ? '✅' : task.status === 'in-progress' ? '⏳' : '📋';
    console.log(`[${task.id}] ${statusIcon} ${task.description} (Status: ${task.status})`);
  });
};

try {
  switch (command) {
    case 'add':
      if (!args[0]) throw new Error('A descrição da tarefa é obrigatória. Uso: add "descrição"');
      const newTask = addTask(args[0]);
      console.log(`Tarefa adicionada com sucesso (ID: ${newTask.id})`);
      break;

    case 'list':
      const filter = args[0]; // pode ser 'done', 'todo', 'in-progress'
      const tasks = listTasks(filter);
      displayTasks(tasks);
      break;

    case 'update':
      if (!args[0] || !args[1]) throw new Error('ID e nova descrição são obrigatórios. Uso: update <id> "nova descrição"');
      const updated = updateTask(parseInt(args[0]), args[1]);
      if (!updated) throw new Error(`Tarefa com ID ${args[0]} não encontrada.`);
      console.log('Tarefa atualizada com sucesso.');
      break;

    case 'delete':
      if (!args[0]) throw new Error('ID é obrigatório. Uso: delete <id>');
      deleteTask(parseInt(args[0]));
      console.log('Tarefa removida com sucesso.');
      break;

    case 'mark-in-progress':
      if (!args[0]) throw new Error('ID é obrigatório. Uso: mark-in-progress <id>');
      updateStatus(parseInt(args[0]), 'in-progress');
      console.log('Status atualizado para: em andamento.');
      break;

    case 'mark-done':
      if (!args[0]) throw new Error('ID é obrigatório. Uso: mark-done <id>');
      updateStatus(parseInt(args[0]), 'done');
      console.log('Status atualizado para: concluída.');
      break;

    default:
      console.log('\n🚀 Task Tracker CLI');
      console.log('-------------------');
      console.log('Comandos disponíveis:');
      console.log('  add "descrição"          - Adiciona uma nova tarefa');
      console.log('  list [status]            - Lista todas as tarefas ou filtra por status');
      console.log('  update <id> "descrição"  - Atualiza a descrição de uma tarefa');
      console.log('  delete <id>              - Remove uma tarefa');
      console.log('  mark-in-progress <id>    - Define status como "in-progress"');
      console.log('  mark-done <id>           - Define status como "done"');
  }
} catch (error) {
  console.error(`❌ Erro: ${error.message}`);
  process.exit(1);
}
