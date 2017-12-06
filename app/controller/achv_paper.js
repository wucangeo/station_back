"use strict";

const Controller = require("egg").Controller;

class AchvPaperController extends Controller {
  async list() {
    const { ctx, service } = this;
    let query = ctx.query;
    query.offset = query.start ? parseInt(query.start) : 0;
    query.limit = query.row ? parseInt(query.row) : 10;
    query.order = query.order ? parseInt(query.order) : 0;
    const result = await service.achvPaper.list(query);
    ctx.body = result;
  }
  async get() {
    const { ctx, service } = this;
    const { validator } = this.app;
    let result = await service.achvPaper.get(ctx.params.data_id);
    ctx.body = result;
  }
  async create() {
    const { ctx, service } = this;
    let user_id = ctx.user && ctx.user.data_id ? ctx.user.data_id : 0;

    //创建
    var item = ctx.request.body;
    let result = await ctx.service.achvPaper.create(item, user_id);
    ctx.body = result;
  }
  async update() {
    const { ctx, service } = this;
    let user_id = ctx.user && ctx.user.data_id ? ctx.user.data_id : 0;

    const data_id = ctx.params.data_id;
    const item = ctx.request.body;
    var result = await service.achvPaper.update(
      { data_id, updates: item },
      user_id
    );

    ctx.body = result;
  }
  async delete() {
    const { ctx, service } = this;
    let result = await service.achvPaper.delete(ctx.request.body.ids);

    ctx.body = result;
  }
}
module.exports = AchvPaperController;
