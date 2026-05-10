# Estudo: ECMAScript Modules (ESM)

## O que é?
ESM é o padrão oficial do JavaScript para compartilhar código entre diferentes arquivos. Ele substitui o antigo `CommonJS` (que usava `require` e `module.exports`).

## Por que usar?
- **Padrão Oficial**: Funciona no Navegador e no Node.js moderno.
- **Performance**: Permite o "Tree Shaking" (remover código que não é usado).
- **Clareza**: A sintaxe `import`/`export` é mais legível e explícita.

## Na Prática (neste projeto)
Para habilitar no Node.js, adicionamos no `package.json`:
```json
"type": "module"
```

### Exemplo de Exportação:
```javascript
export function minhaFuncao() { ... }
```

### Exemplo de Importação:
```javascript
import { minhaFuncao } from './meu-arquivo.js';
```

## Referências
- [MDN Web Docs - JavaScript Modules](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Modules)
- [Node.js ESM Documentation](https://nodejs.org/api/esm.html)
