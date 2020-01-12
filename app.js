'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Cargo los archivos de rutas
var producto_routes = require('./routes/producto');
var usuario_routes = require('./routes/usuario');

// Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Rutas
app.use('/api', producto_routes);
app.use('/api', usuario_routes);

// Exportar
module.exports = app;