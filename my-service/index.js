const myService = require('./service');
const hooks = require('./hooks');
const PATH = '/my-service';

module.exports = app => {
  app.use(PATH, new myService());
  app.service(PATH).hooks(hooks);
  return;
}