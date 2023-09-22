# crud-react-next

Crud de um TODO, usando boas práticas, com React e Next.JS


## Vanilla JS/TS

Iniciamos um CRUD com Vanilla JS/TS
- criamos um projeto JS com `npm init -y` e nele as funções create, read, update (por id) e delete (por id)
- a principio os dados foram salvos  usando a lib "fs" e os ids gerados com a lib "uuid", além de usarmos o "nodemon" para o live reload
- para evitarmos salvar a pasta node_modules criada pelo projeto JS pode usar `npx gitignore node`
- em seguida convertemos o projeto pra rodar com TS, instalamos TS com `npm install typescript` e criamos o setup básico com `npx tsc --init`

## React e Next.js

Seguimos o [manual](https://nextjs.org/docs/getting-started/installation#manual-installation) de instalação do Next, com a opção de usar o diretório [pages](https://nextjs.org/docs/getting-started/installation#the-pages-directory-optional)

Ao rodar o projeto podemos escolher uma porta `npm run dev -- --port=3001`

Pra fazer o backend, na pasta /pages iremos criar a pasta /api e dentro dela o arquivo index.ts. Para acessar podemos usar, por exemplo http://localhost:3001/api

## Linter

Usamos algumas ferramentas para "padronizar" a formatação do código:
- [EditorConfig](https://editorconfig.org/): padrão que muitos editores usam para, por exemplo, saber a quantidade de "Tab" iremos dar, o que precisa ser convertido para espaço, se tem que ter uma linha no final do arquivo, etc.
- [ESLint](https://eslint.org/): indicará as configurações de formatação que escolhermos para o projeto
- [Prettier](https://prettier.io/): independente da forma como escrevemos o código ele irá formatar segundo a configuração correta

Para facilitar podemos instalar os respectivos plugins
- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig): irá habilitar a opção "Generate: .editorConfig" ao clicar com o botão direito do mouse no explorador de arquivos (local onde estão as pastas e arquivos do projeto)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

OBS: Para indicar para outras pessoas extensões que estamos usando no VSCode podemos criar uma pasta na raiz do projeto `.vscode` contendo um arquivo `extensions.json` indicando as extensões.
