// Inicia Servidor
const server = require('./server');
const { port } = require('config');

server.listen(port, () => {
  console.log(`Example server listening at http://localhost:${port}`);
})