const Controller = require("egg").Controller;
class AchvPaperController extends Controller {
  async list() {
    const { ctx, service } = this;
    let result = await ctx.service.achvPaper.list(ctx.query);
    this.ctx.body = result;
  }
  async get() {
    const { ctx, service } = this;
    let data_id = ctx.params.data_id;
    let result = await service.achvPaper.get(data_id);
    this.ctx.body = result;
  }
  async create() {
    const { ctx, service } = this;
    let user_id = ctx.user && ctx.user.data_id ? ctx.user.data_id : 0;
    var item = ctx.request.body;
    let result = await ctx.service.achvPaper.create(item, user_id);
    this.ctx.body = result;
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
    this.ctx.body = result;
  }
  async delete() {
    const { ctx, service } = this;
    if (!ctx.request.body) {
      ctx.body = {
        status: 400,
        msg: "参数错误。"
      };
    }
    const ids = JSON.parse(ctx.request.body.ids);
    let result = await service.achvPaper.delete(ids);
    ctx.body = result;
  }
}

module.exports = AchvPaperController;
