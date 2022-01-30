const server = require("../server");
const testPuppeter = require("../services/testPuppeter");

module.exports = routes => {

  routes.get('/testPuppeter', testPuppeter)

  return routes;
}