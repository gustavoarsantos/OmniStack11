const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/*
 *Tipo de Paramentros:
 *Query Params: parametros nomeados enviado na rota apos "?" (Filtros, Paginacao)
 *Route Params: parametros utilizados para identificar recursos
 *Request Body: corpo da requisicao, utilizado para criar ou alterar recursos
*/

/*
 *Driver: SELECT * FROM users
 *Query Builder: table('users').select('*').where()
*/