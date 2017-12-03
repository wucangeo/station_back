const Controller = require("egg").Controller;
class AchvMonographyController extends Controller {
  async list() {
    const { ctx, service } = this;
    let datas = await ctx.service.achvMonography.list(ctx.query);
    if (datas) {
      this.ctx.body = {
        data: datas,
        status: 200
      };
    } else {
      this.ctx.body = {
        status: 400,
        msg: "查询失败"
      };
    }
  }
  async get() {
    const { ctx, service } = this;
    let id = ctx.params.id;
    let data = await service.achvMonography.get(id);
    if (data) {
      this.ctx.body = {
        data: data,
        status: 200
      };
    } else {
      this.ctx.body = {
        status: 404,
        msg: "未查询到结果。"
      };
    }
  }
  async create() {
    const { ctx, service } = this;
    var item = ctx.request.body;

    let result = await ctx.service.achvMonography.create(item);
    if (result) {
      this.ctx.body = {
        status: 200,
        data: result,
        msg: null
      };
    }
  }
  async update() {
    const { ctx, service } = this;
    const id = ctx.params.id;
    const item = ctx.request.body;
    var result = await service.achvMonography.update({ id, updates: item });
    if (!result) {
      this.ctx.body = {
        status: 400,
        msg: "更新失败。"
      };
      return;
    }
    this.ctx.body = {
      status: 200,
      msg: "更新成功",
      data: result
    };
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
    let result = await service.achvMonography.delete(ids);
    if (!result) {
      ctx.body = {
        status: 300,
        data: null,
        msg: "删除失败！"
      };
    }
    ctx.body = {
      status: 200,
      data: result,
      msg: "删除成功！"
    };
  }
}

module.exports = AchvMonographyController;
