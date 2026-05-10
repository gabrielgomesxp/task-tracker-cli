# Estudo: FileSystem (fs) e JSON

## O que é?
- **fs (FileSystem)**: Um módulo nativo do Node.js que permite interagir com o sistema de arquivos do computador (ler, escrever, deletar arquivos).
- **JSON (JavaScript Object Notation)**: Um formato leve de troca de dados, fácil de ler para humanos e máquinas.

## Por que usar?
Para persistir dados (salvar) sem precisar de um banco de dados complexo como MySQL ou MongoDB em projetos pequenos.

## Funções Importantes
1. **`fs.writeFileSync(path, data)`**: Grava dados em um arquivo de forma síncrona.
2. **`fs.readFileSync(path)`**: Lê o conteúdo de um arquivo.
3. **`JSON.stringify(obj)`**: Transforma um Objeto/Array JS em uma String JSON.
4. **`JSON.parse(string)`**: Transforma uma String JSON de volta em um Objeto/Array JS.

## O Ciclo da Persistência
1. Objeto JS -> `JSON.stringify` -> String -> `fs.writeFileSync` -> **Arquivo no Disco**
2. **Arquivo no Disco** -> `fs.readFileSync` -> String -> `JSON.parse` -> Objeto JS

## Referências
- [Node.js FS Documentation](https://nodejs.org/api/fs.html)
- [Trabalhando com JSON (MDN)](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/JSON)
