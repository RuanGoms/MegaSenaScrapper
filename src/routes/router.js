const server = require("../server");
const getOneDraw = require("../services/getOneDraw");

module.exports = routes => {

  routes.get('/testPuppeter/:index', getOneDraw)

  return routes;
}