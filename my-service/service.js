module.exports = class myService {
  setup(app, path) {
    this.app = app;
    this.state = {};
  }

  async find(params) { return xdd; }
  async get(id, params) { return true; }
  async create(data, params) { return true; }
  async update(id, data, params) { return true; }
  async patch(id, data, params) { return true; }
  async remove(id, params) { return true; }
}