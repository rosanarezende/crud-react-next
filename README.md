# crud-react-next

Crud de um TODO, usando boas práticas, com React e Next.JS

Iniciamos um CRUD com Vanilla JS/TS
- criamos um projeto JS com `npm init -y` e nele as funções create, read, update (por id) e delete (por id)
- a principio os dados foram salvos  usando a lib "fs" e os ids gerados com a lib "uuid", além de usarmos o "nodemon" para o live reload
- para evitarmos salvar a pasta node_modules criada pelo projeto JS pode usar `npx gitignore node`
- em seguida convertemos o projeto pra rodar com TS, instalamos TS com `npm install typescript` e criamos o setup básico com `npx tsc --init`
