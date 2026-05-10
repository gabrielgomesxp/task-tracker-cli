# Estudo: GitHub Actions (CI)

## O que é CI?
**Continuous Integration** (Integração Contínua). É a prática de automatizar a integração de alterações de código de vários contribuidores em um único projeto de software.

## GitHub Actions
É a ferramenta do GitHub para criar "Workflows" (fluxos de trabalho) automatizados.

## Como funciona o nosso Workflow?
O arquivo `.github/workflows/tests.yml` define que:
1. **Gatilho**: Toda vez que houver um `push` na branch `main`.
2. **Ambiente**: Cria uma máquina virtual com Ubuntu.
3. **Passos**: 
   - Baixa o código (`checkout`).
   - Instala o Node.js.
   - Roda `npm install`.
   - Executa `npm test`.

## Benefícios
- Detecta bugs imediatamente.
- Garante que o código "funciona na minha máquina" e também no servidor.
- Mantém o histórico de saúde do projeto.

## Referências
- [GitHub Actions Documentation](https://docs.github.com/pt/actions)
- [Workflow syntax for GitHub Actions](https://docs.github.com/pt/actions/using-workflows/workflow-syntax-for-github-actions)
