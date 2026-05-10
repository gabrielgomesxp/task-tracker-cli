# Estudo: TDD e Test Runner Nativo

## O que é TDD?
**Test-Driven Development** (Desenvolvimento Orientado a Testes). É uma técnica onde você escreve o teste *antes* de escrever o código da funcionalidade.

## O Ciclo Red-Green-Refactor
1. 🔴 **Red (Vermelho)**: Escreva um teste que falha (porque a funcionalidade ainda não existe).
2. 🟢 **Green (Verde)**: Escreva o código mínimo necessário para o teste passar.
3. 🔵 **Refactor (Refatorar)**: Melhore o código, mantendo os testes passando.

## Test Runner Nativo do Node.js
Desde a versão 18/20, o Node.js possui seu próprio testador, eliminando a necessidade de bibliotecas como Jest para projetos simples.

### Comandos usados:
- `import { test, describe } from 'node:test';`
- `import assert from 'node:assert';`
- Execução: `node --test`

## Referências
- [Node.js Test Runner API](https://nodejs.org/api/test.html)
- [Livro: Test Driven Development (Kent Beck)](https://www.amazon.com.br/Test-Driven-Development-Example-Kent-Beck/dp/0321146530)
