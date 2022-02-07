const server = require("../server");
const testPuppeter = require("../services/testPuppeter");

module.exports = routes => {

  routes.get('/testPuppeter/:index', testPuppeter)

  return routes;
}