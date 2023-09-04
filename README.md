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

