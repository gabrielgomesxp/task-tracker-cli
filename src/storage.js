/**
 * PEÇA LEGO: storage.js
 * Responsável pela persistência dos dados.
 */
import fs from 'node:fs';

/**
 * Salva o array de tarefas em um arquivo JSON.
 * @param {Array} tasks - Lista de objetos de tarefa.
 * @param {string} filePath - Caminho do arquivo (opcional).
 */
export function saveTasks(tasks, filePath = 'tasks.json') {
  // TODO: Implementar a escrita usando fs.writeFileSync e JSON.stringify
  try {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2), 'utf8');
  } catch (error) {
    console.error('Erro ao salvar tarefas:', error);
  }
}

/**
 * Lê o arquivo JSON e retorna o array de tarefas.
 * @param {string} filePath - Caminho do arquivo (opcional).
 * @returns {Array} - Lista de tarefas ou [] se arquivo não existir.
 */
export function loadTasks(filePath = 'tasks.json') {
  // TODO: Implementar a leitura usando fs.readFileSync e JSON.parse
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Erro ao carregar tarefas:', error);
  }
  return [];
}
