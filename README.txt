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

npm install cors

npm install react-icons

npm install -g expo-cli (Para instalar o expo)

expo init mobile (Parar criar o app mobile = nome do app)

seleciona o blank

cd mobile

yarn start

docs.expo.io (npm install @react-navigation/native)

npm install @react-navigation/native

npm install --global windows-build-tools

expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

npm install @react-navigation/stack

expo client:install:android

expo install expo-constants

expo install expo-mail-composer

npm install intl















