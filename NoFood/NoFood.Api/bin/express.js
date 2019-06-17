const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const variables = require('../bin/configuration/variables');

//routers
const categoryRouter = require('../routes/category-route');
const productRouter = require('../routes/product-route');
const userRouter = require('../routes/user-route');

//Criando/Invocando a Api/Server Web do Express
const app = express();

//Configuração do parse do Json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(variables.Database.connection);

//Configurando a conecção com o banco de dados
 

//Configurando rotas
app.use('/api/category', categoryRouter);
app.use('/api/product', productRouter);
app.use('/api/user', userRouter);

module.exports = app;