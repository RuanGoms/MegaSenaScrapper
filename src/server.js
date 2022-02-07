// Config Servidor
const express = require('express');
const routes = require('./routes');
const server = express();

server.use(routes);
server.use(express.json());

module.exports = server;

