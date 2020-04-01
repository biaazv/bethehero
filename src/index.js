const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);
//rota é o caminho inteiro que se acessa
//recurso é a parte da rota após a barra ex: "/users"

/*Métodos HTTP
GET - buscar uma informação no back-end
POST - criar uma informação no back-end
PUT - alterar uma informação no back-end
DELETE - deletar uma informação no back-end
*/

/*
Tipos de Parametros
Query Params - parâmetros nomeados enviados na rota após "?" (filtros, paginação), acesso atravesdo request.query
Route Params - parâmetros utilizados para identificar recursos, acesso atraves do request.params
Request Body - corpo da requisição utilizado para criar ou alterar recursos
*/

app.listen(3333);
console.log('rodando hein bb');
