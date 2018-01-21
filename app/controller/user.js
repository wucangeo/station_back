const Controller = require("egg").Controller;
class UserController extends Controller {
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
    let result = await service.user.list(query);
    this.ctx.body = result;
  }
  async get() {
    const { ctx, service } = this;
    let data_id = ctx.params.data_id;
    let result = await service.user.get(data_id);
    this.ctx.body = result;
  }
  async create() {
    const { ctx, service } = this;
    let user_id = ctx.user && ctx.user.data_id ? ctx.user.data_id : 0;
    var item = ctx.request.body;
    let result = await ctx.service.user.create(item, user_id);

    this.ctx.body = result;
  }
  async update() {
    const { ctx, service } = this;
    let user_id = ctx.user && ctx.user.data_id ? ctx.user.data_id : 0;
    const data_id = ctx.params.data_id;
    const item = ctx.request.body;
    var result = await service.user.update({ data_id, updates: item }, user_id);

    this.ctx.body = result;
  }
  async delete() {
    const { ctx, service } = this;
    const ids = ctx.request.body.ids;
    let result = await service.user.delete(ids);
    ctx.body = result;
  }
  async login() {
    const { ctx, service } = this;
    let { username, password } = ctx.request.body;
    var result = await ctx.service.user.login(username, password);
    //记录登录日志
    if (result && result.data) {
      let user_id = result.data.data_id;
      ctx.service.logView.logView(user_id);
    }
    ctx.body = result;
  }
  async register() {
    const { ctx, service } = this;
    let user_id = 0;
    var item = ctx.request.body;
    let result = await ctx.service.user.create(item, user_id);

    this.ctx.body = result;
  }
  async verify() {
    ctx.body = {
      code: 1,
      msg: "验证成功。",
      data: null
    };
  }
}

module.exports = UserController;
