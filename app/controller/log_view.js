const Controller = require("egg").Controller;

class LogViewController extends Controller {
  async list() {
    const { ctx, service } = this;
    let query = ctx.query;
    if (query.keys) {
      query.keys =
        typeof query.keys == "string" ? JSON.parse(query.keys) : query.keys;
    } else {
      query.keys = {};
    }
    query.offset = query.offset ? parseInt(query.offset) : 0;
    query.limit = query.limit ? parseInt(query.limit) : 10;
    query.order = query.order ? parseInt(query.order) : 0;
    const result = await service.logView.list(query);
    ctx.body = result;
  }
  async get() {
    const { ctx, service } = this;
    const { validator } = this.app;
    let result = await service.logView.get(ctx.params.data_id);
    ctx.body = result;
  }
  async create() {
    const { ctx, service } = this;
    let user_id = ctx.user && ctx.user.data_id ? ctx.user.data_id : 0;

    //创建
    var item = ctx.request.body;
    let result = await ctx.service.logView.create(item, user_id);
    ctx.body = result;
  }
  async update() {
    const { ctx, service } = this;
    let user_id = ctx.user && ctx.user.data_id ? ctx.user.data_id : 0;

    const data_id = ctx.params.data_id;
    const item = ctx.request.body;
    var result = await service.logView.update(
      { data_id, updates: item },
      user_id
    );

    ctx.body = result;
  }
  async delete() {
    const { ctx, service } = this;
    let result = await service.logView.delete(ctx.request.body.ids);

    ctx.body = result;
  }
  async count() {
    const { ctx, service } = this;
    let query = ctx.query;
    query.type = parseInt(query.type);
    query.from_time = parseInt(query.from_time);
    query.to_time = parseInt(query.to_time);
    const result = await service.logView.count(query);
    ctx.body = result;
  }
  async map() {
    const { ctx, service } = this;
    let query = ctx.query;
    query.type = parseInt(query.type);
    query.from_time = parseInt(query.from_time);
    query.to_time = parseInt(query.to_time);
    const result = await service.logView.map(query);
    ctx.body = result;
  }
  async url() {
    const { ctx, service } = this;
    let query = ctx.query;
    query.type = parseInt(query.type);
    query.from_time = parseInt(query.from_time);
    query.to_time = parseInt(query.to_time);
    const result = await service.logView.url(query);
    ctx.body = result;
  }
}
module.exports = LogViewController;
