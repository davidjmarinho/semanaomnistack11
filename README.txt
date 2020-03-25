npm init -y (Cria o package.json)

-----------

Dentro do vscode

npm install express (Para já ter um ponto de partida para gerenciar as rotas)

node index.js (Para executar a aplicacao)

---------------

React:

create-react-app nomeDoApp (criado em uma pasta separada do backend)

npm start ou yarn start

----------------------
Nodemon:

npm install nodemon -D


KNEX.JS

npm install knex
npm install sqlite3

npx knex init (Criar um arquivo para as configuracao do Database)

Alterar o arquivo knexfile.js


module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations:{
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },



npx knex migrate:make create_ongs
npx knex migrate:latest

npx knex migrate:make create_incidents

