"use strict";

const Controller = require("egg").Controller;

class UploadController extends Controller {
  async list() {
    const { ctx, service } = this;
    let query = ctx.query;
    query.type = query.type ? parseInt(query.type) : 0;
    query.offset = query.offset ? parseInt(query.offset) : 0;
    query.limit = query.limit ? parseInt(query.limit) : 10;
    query.order = query.order ? parseInt(query.order) : 0;
    const result = await service.upload.list(query);
    ctx.body = result;
  }
  async get() {
    const { ctx, service } = this;
    let result = await service.upload.get(ctx.params.data_id);
    ctx.body = result;
  }
  async create() {
    const { ctx, service } = this;
    let user_id = ctx.user && ctx.user.data_id ? ctx.user.data_id : 0;

    //创建
    var item = ctx.request.body;
    let result = await ctx.service.upload.create(item, user_id);
    ctx.body = result;
  }
  async update() {
    const { ctx, service } = this;
    let user_id = ctx.user && ctx.user.data_id ? ctx.user.data_id : 0;

    const data_id = ctx.params.data_id;
    const item = ctx.request.body;
    var result = await service.upload.update(
      { data_id, updates: item },
      user_id
    );

    ctx.body = result;
  }
  async delete() {
    const { ctx, service } = this;
    let result = await service.upload.delete(ctx.request.body.ids);

    ctx.body = result;
  }
  async upload() {
    const { ctx, service } = this;
    let user_id = ctx.user && ctx.user.data_id ? ctx.user.data_id : 0;

    //上传到文件夹
    const stream = await ctx.getFileStream();
    let res_upload = await service.upload.upload(stream, user_id);
    //写入记录
    if (res_upload.code != 1) {
      ctx.body = res_upload;
      return;
    }
    const res_create = await service.upload.create(res_upload.data, user_id);

    ctx.body = res_create;
  }
}
module.exports = UploadController;
