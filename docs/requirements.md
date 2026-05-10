# docs/requirements.md

## 📋 Enunciado
CLI para rastrear e gerenciar tarefas usando arquivo JSON — construído apenas com módulos nativos do Node.js


## 🧠 Meu Raciocínio

### Visão Geral
Um CLI robusto para gerenciar tarefas (CRUD) persistidas em um arquivo JSON local, focado em praticar lógica de backend e módulos nativos do Node.js.

### Macro — As grandes partes do sistema
- **Entrada (Parser)**: Captura os argumentos do terminal via `process.argv`.
- **Lógica (Manager)**: Processa as ações de adicionar, listar, atualizar e deletar.
- **Persistência (Storage)**: Lê e escreve no arquivo `tasks.json` usando o módulo `fs`.

### Frontend
Não possui interface visual. A interação é 100% via Linha de Comando (Terminal).

### Backend
- Script Node.js que roda localmente.
- Uso de `JSON.parse()` e `JSON.stringify()` para manipular os dados.
- Tratamento de IDs incrementais para as tarefas.

### Banco de Dados
Arquivo local `tasks.json`.

### Fluxo do Usuário
1. Usuário digita `node index.js add "Minha tarefa"`.
2. O sistema valida o comando.
3. O sistema lê o arquivo JSON existente.
4. O sistema adiciona a nova tarefa com um ID único.
5. O sistema salva o arquivo e mostra uma mensagem de sucesso.

### Micro — Decisões técnicas
- Usar `fs.readFileSync` e `fs.writeFileSync` (versões síncronas) para simplificar o primeiro projeto de backend.
- Testes unitários com `node:test` para validar cada função do `task-manager.js`.
