# GEMINI.md — task-tracker-cli

## 🎯 O que o projeto faz
Uma ferramenta de linha de comando (CLI) simples e robusta para gerenciar listas de tarefas. O objetivo é praticar lógica de backend, manipulação de arquivos com o Node.js e fluxo de dados JSON sem dependências externas.

## 🛠️ Stack
- **Node.js**: Motor de execução (módulos nativos apenas).
- **fs (File System)**: Para salvar e ler as tarefas do disco.
- **process.argv**: Para capturar os comandos do usuário.
- **node:test**: Runner de testes nativo para garantir que a lógica está certa.

## 🗺️ Mapa de Arquivos
- `index.js`: Ponto de entrada que recebe os comandos.
- `src/task-manager.js`: O "coração" — lógica de adicionar, listar, remover.
- `src/storage.js`: Responsável por falar com o arquivo `tasks.json`.
- `tests/`: Pasta com os arquivos de teste para cada módulo.
- `tasks.json`: Onde suas tarefas ficam guardadas.

## 🚀 Fluxo de Runtime
1. Usuário digita comando -> `index.js` recebe.
2. `index.js` chama o `task-manager.js` passando a ação.
3. `task-manager.js` pede os dados atuais para o `storage.js`.
4. Lógica é aplicada (ex: adiciona nova tarefa ao array).
5. `task-manager.js` pede para o `storage.js` salvar o novo array.
6. Feedback é exibido no terminal.

## ⌨️ Comandos Planejados
- `node index.js add "Minha tarefa"`
- `node index.js list`
- `node index.js update 1 "Tarefa atualizada"`
- `node index.js delete 1`

## ⚠️ Onde olhar quando algo quebrar
- **Erro de leitura/escrita**: Verifique se o `tasks.json` existe ou se tem permissão.
- **Comando não funciona**: Veja se o `index.js` está capturando o argumento certo no `process.argv`.
- **Testes falhando**: Rode `npm test` para ver qual parte da lógica (adicionar, remover, etc) quebrou.

## 🧩 Armadilhas de Edição
- Nunca edite o `tasks.json` manualmente se o programa estiver rodando.
- Cuidado ao mudar a estrutura do objeto de tarefa (id, description, status) sem atualizar os testes.
