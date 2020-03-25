const express = require('express');
const cors = require('cors');
const routes =  require('./routes');


const app = express();
app.use(cors());

app.use(express.json());

app.use(routes);


/**
 * Tipos de parametros
 * 
 * query params: Parametros nomeados enviados na rota apos o simbolo de interrogacao;
 * Serve para filtros, paginacao
 * 
 * Route params : parametros utilizados para identificar recursos
 * Request Body: corpo da requisicao, utilizado para criar ou alterar recursos
 * 
 * 
 * SQLITE
 * 
 * NoSQL: MongoDB
 */

 /**
  * 
  * Driver:  SELECT * FROM USER
  * 
  * QUERY Builder: table('users').select('*').where()
  */



//devera ser escutado na porta
app.listen(3333);