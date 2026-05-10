# 📝 Task Tracker CLI

Uma ferramenta de linha de comando (CLI) para gerenciar suas tarefas diárias, construída inteiramente com **módulos nativos do Node.js**. Este projeto faz parte do meu aprendizado em Ciência da Computação, focado em fundamentos de Backend, persistência de dados e TDD.

## 🚀 Tecnologias e Conceitos
- **Node.js**: Sem bibliotecas externas (Vanilla JS).
- **FileSystem (fs)**: Persistência de dados em arquivos JSON.
- **Node Test Runner**: Uso do runner nativo (`node --test`) para TDD.
- **ESM (ECMAScript Modules)**: Organização moderna de código com `import`/`export`.

## 🏗️ Estrutura do Projeto (Método LEGO)
O projeto é construído em peças independentes e testadas:
- `src/storage.js`: Camada de persistência (Peça 1 - ✅)
- `src/taskManager.js`: Lógica de negócio (Peça 2 - 🚧)
- `src/cli.js`: Interface de linha de comando (Peça 3 - 📅)

## 🛠️ Como rodar
### Pré-requisitos
- Node.js (versão 20 ou superior recomendada para suporte total ao Test Runner nativo).

### Instalação
```bash
git clone [url-do-repositorio]
cd task-tracker-cli
```

### Testes
Para garantir que as peças LEGO estão funcionando corretamente:
```bash
npm test
```

## 📜 Licença
Este projeto está sob a licença MIT.
