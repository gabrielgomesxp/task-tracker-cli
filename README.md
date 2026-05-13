# Task Tracker CLI 🚀

Uma interface de linha de comando (CLI) simples e robusta para gerenciar suas tarefas diárias, construída com **Node.js** e zero dependências externas.

## 📖 Sobre o Projeto

Este projeto foi desenvolvido como parte de um roteiro de estudos focado em **JavaScript no Backend** e **Node.js**. O objetivo principal foi dominar o uso de módulos nativos e a lógica de persistência de dados em arquivos JSON.

A jornada de desenvolvimento contou com o auxílio estratégico de **Inteligência Artificial (JARVIS)**, funcionando como um par de programação (Pair Programming) para acelerar o aprendizado, refinar a arquitetura e garantir as melhores práticas de codificação e testes.

## ✨ Funcionalidades

- **Adicionar** tarefas com geração automática de ID.
- **Listar** todas as tarefas ou filtrar por status (`todo`, `in-progress`, `done`).
- **Atualizar** descrições de tarefas.
- **Remover** tarefas.
- **Controle de Status**: Alterne tarefas entre `todo` (pendente), `in-progress` (em andamento) e `done` (concluído).
- **Armazenamento Persistente**: Todos os dados são salvos em um arquivo `tasks.json`.

## 🛠️ Tecnologias

- **Node.js**: Ambiente de execução.
- **Módulos Nativos (FS/Path)**: Para gerenciamento do banco de dados JSON.
- **Runner de Testes Nativo**: Para garantir a integridade da lógica.

## 🚀 Como Usar

### 1. Instalação
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado (v18+ recomendado).

```bash
# Clone o repositório
git clone https://github.com/gabrielgomesxp/task-tracker-cli.git
cd task-tracker-cli
```

### 2. Comandos Disponíveis

| Ação | Comando |
| :--- | :--- |
| **Adicionar** | `node index.js add "Comprar café"` |
| **Listar Todas** | `node index.js list` |
| **Filtrar Lista** | `node index.js list done` |
| **Atualizar** | `node index.js update 1 "Nova descrição"` |
| **Em Andamento** | `node index.js mark-in-progress 1` |
| **Concluir** | `node index.js mark-done 1` |
| **Remover** | `node index.js delete 1` |

## 🧪 Testes

O projeto utiliza o runner de testes nativo do Node.js. Para executar a suíte de testes:

```bash
node --test tests/*.test.js
```

## 📂 Estrutura do Projeto

- `index.js`: Ponto de entrada principal e roteador da CLI.
- `src/task-manager.js`: Lógica de negócio e gerenciamento de estado.
- `src/storage.js`: Camada de persistência de dados (JSON).
- `tests/`: Suíte de testes automatizados.

---
Desenvolvido por [Gabriel Gomes](https://github.com/gabrielgomesxp) com auxílio de IA.
