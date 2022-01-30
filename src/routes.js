// Recebe rotas
const { Router } = require('express');
const routes = new Router();

routes.get('/health', (req, res) => {
  res.status(200).json({ webScrapperMegasena: 'Server up!' })
});

require('./routes/router')(routes)

module.exports = routes;