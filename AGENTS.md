<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Visão geral

Recriar tab-news utilizando IA pro curso do Deschamps

# Stack

- Next.js com App Router (diretório `app/`). As versões exatas ficam em `package.json`; consulte-o em vez de presumir.
- React e React DOM (versões também em `package.json`).
- JavaScript puro (sem TypeScript) e CSS global simples (sem Tailwind nem CSS Modules).
- Gerenciador de pacotes: npm (há `package-lock.json`).

# Comandos

- `npm install`: instala as dependências.
- `npm run dev`: servidor de desenvolvimento.
- `npm run build`: build de produção.
- `npm run start`: serve o build de produção.

Não há testes nem linter configurados ainda.

# Estrutura

- `app/`: raiz do App Router. Cada pasta dentro dela é um segmento de rota, e a rota só fica pública quando a pasta tem um `page.js`.
- `app/layout.js`: layout raiz, compartilhado por todas as páginas. Define `<html lang="pt-BR">` e os metadados padrão, e importa o CSS global.
- `app/globals.css`: estilos globais, importados uma única vez no layout raiz.

# Arquitetura

- Os componentes em `app/` são Server Components por padrão. Use `"use client"` apenas nos arquivos que precisam de estado, efeitos ou eventos do navegador.
- Textos da interface, nomes de variáveis e comentários em português.
