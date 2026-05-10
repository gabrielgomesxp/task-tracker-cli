import { test, describe } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { saveTasks, loadTasks } from '../src/storage.js';

const TEST_DB = path.join(process.cwd(), 'tasks-test.json');

describe('Storage Layer (LEGO: storage.js)', () => {

  // Limpa o arquivo de teste antes e depois de cada execução
  const cleanup = () => {
    if (fs.existsSync(TEST_DB)) {
      fs.unlinkSync(TEST_DB);
    }
  };

  test('Deve salvar uma lista de tarefas no arquivo JSON', () => {
    cleanup();
    const tasks = [{ id: 1, description: 'Testar storage', status: 'todo' }];
    
    saveTasks(tasks, TEST_DB);
    
    assert.strictEqual(fs.existsSync(TEST_DB), true, 'O arquivo JSON deve ser criado');
    const content = JSON.parse(fs.readFileSync(TEST_DB, 'utf-8'));
    assert.deepStrictEqual(content, tasks, 'O conteúdo salvo deve ser igual ao objeto original');
    cleanup();
  });

  test('Deve carregar uma lista de tarefas do arquivo JSON', () => {
    cleanup();
    const tasks = [{ id: 2, description: 'Carregar teste', status: 'done' }];
    fs.writeFileSync(TEST_DB, JSON.stringify(tasks));

    const loadedTasks = loadTasks(TEST_DB);

    assert.deepStrictEqual(loadedTasks, tasks, 'As tarefas carregadas devem ser iguais às salvas');
    cleanup();
  });

  test('Deve retornar uma lista vazia se o arquivo não existir', () => {
    cleanup();
    const loadedTasks = loadTasks(TEST_DB);
    assert.deepStrictEqual(loadedTasks, [], 'Deve retornar [] quando não há arquivo');
  });
});
