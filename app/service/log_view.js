const axios = require("axios");

const Service = require("egg").Service;
let attrs = [
  "data_id",
  "user_id",
  "user_ip",
  "country",
  "province",
  "city",
  "view_url",
  "view_params",
  "method",
  "created_at"
];

class LogView extends Service {
  async list({
    keys = {},
    offset = 0,
    limit = 10,
    order_by = "created_at",
    order = 0
  }) {
    const { ctx, logger, config } = this;
    const { validator } = this.app;
    let msg = config.msg;
    let result = {
      code: 1,
      data: null,
      msg: msg.list.succ
    };
    //参数验证
    let error = validator.validate(
      {
        keys: { type: "object", allowEmpty: true },
        offset: { type: "int" },
        limit: { type: "int" },
        order: { type: "enum", values: [0, 1] },
        order_by: {
          type: "enum",
          values: attrs
        }
      },
      { keys, offset, limit, order, order_by }
    );
    if (error) {
      result.code = 0;
      result.msg = msg.err_param;
      result.data = error;
      return result;
    }
    //组织查询参数
    order = order === 1 ? "DESC" : "ASC";
    limit = limit < 0 ? 1000000000 : limit;
    var query = {
      offset: offset,
      limit: limit,
      order: [[order_by, order]],
      where: {}
    };
    for (var selectKey in keys) {
      if (["title", "project_depart", "author"].includes(selectKey)) {
        if (keys[selectKey]) {
          query.where[selectKey] = { $like: "%" + keys[selectKey] + "%" };
        }
      } else {
        query.where[selectKey] = keys[selectKey];
      }
    }
    //查询
    let datas = await ctx.model.LogView.findAndCountAll(query);
    result.data = datas ? datas : [];

    return result;
  }
  async get(data_id) {
    const { ctx, logger, config } = this;
    const { validator } = this.app;
    let msg = config.msg;

    let result = {
      code: 1,
      data: null,
      msg: msg.get.succ
    };
    data_id = parseInt(data_id);
    //参数验证
    let error = validator.validate(
      {
        data_id: { type: "int", required: true }
      },
      { data_id }
    );
    if (error) {
      result.code = 0;
      result.msg = msg.err_param;
      result.data = error;
      return result;
    }
    //组织查询参数
    var query = {
      where: {
        data_id: data_id
      }
    };
    //查询
    var logView = await ctx.model.LogView.findOne(query);

    result.data = logView;
    return result;
  }
  async create(item, user_id = 0) {
    const { ctx, logger, config } = this;
    const { validator } = this.app;
    let msg = config.msg;
    let result = {
      code: 1,
      data: null,
      msg: msg.create.succ
    };
    //参数验证
    let error = validator.validate(
      {
        user_id: { type: "int", required: false, allowEmpty: true },
        user_ip: { type: "string", required: false, allowEmpty: true },
        country: { type: "string", required: false, allowEmpty: true },
        province: { type: "string", required: false, allowEmpty: true },
        city: { type: "string", required: false, allowEmpty: true },
        view_url: { type: "string", required: false, allowEmpty: true },
        view_params: { type: "string", required: false, allowEmpty: true }
      },
      item
    );
    if (error) {
      result.code = 0;
      result.msg = msg.err_param;
      result.data = error;
      return result;
    }
    //查询
    let data_created = await ctx.model.LogView.create(item);
    if (!data_created) {
      result.code = 0;
      result.msg = msg.create.err;
      return result;
    }
    result.data = data_created;
    return result;
  }
  async update({ data_id, updates }, user_id = 0) {
    const { ctx, logger, config } = this;
    const { validator } = this.app;
    let msg = config.msg;
    let result = {
      code: 1,
      data: null,
      msg: msg.update.succ
    };
    data_id = parseInt(data_id);
    //参数验证
    let error = validator.validate(
      {
        data_id: { type: "int", required: true, allowEmpty: false },
        user_id: { type: "int", required: false, allowEmpty: true },
        user_ip: { type: "string", required: false, allowEmpty: true },
        country: { type: "string", required: false, allowEmpty: true },
        province: { type: "string", required: false, allowEmpty: true },
        city: { type: "string", required: false, allowEmpty: true },
        view_url: { type: "string", required: false, allowEmpty: true },
        view_params: { type: "string", required: false, allowEmpty: true }
      },
      { data_id, ...updates }
    );
    if (error) {
      result.code = 0;
      result.msg = msg.err_param;
      result.data = error;
      return result;
    }
    //data_id有效性验证
    let logView = await ctx.model.LogView.findById(data_id);
    if (!logView) {
      result.code = 0;
      result.msg = msg.err_find;
      return result;
    }
    //组织查询参数
    updates.updated_user = user_id;
    //查询
    let data_updated = await logView.update(updates);
    result.data = data_updated;

    return result;
  }
  async delete(ids) {
    const { ctx, logger, config } = this;
    const { validator } = this.app;
    let msg = config.msg;
    let result = {
      code: 1,
      data: null,
      msg: msg.delete.succ
    };
    let error = validator.validate(
      {
        ids: { type: "object", required: true }
      },
      { ids }
    );
    if (error) {
      result.code = 0;
      result.msg = msg.err_param;
      result.data = error;
      return result;
    }
    //查询
    const data_deleted = await ctx.model.LogView.destroy({
      where: { data_id: { $in: ids } }
    });
    if (!data_deleted) {
      result.code = 0;
      result.msg = msg.delete.err;
      return result;
    }
    result.data = data_deleted;

    return result;
  }
  async parseIP(ip) {
    const { ctx, logger, config } = this;
    let msg = config.msg;

    let result = {
      code: 1,
      data: null,
      msg: msg.get.succ
    };
    //对ip进行验证
    if (!ip) {
      result.code = 0;
      result.msg = "IP地址错误";
      return result;
    }
    let ipAttr = ip.split(".");
    if (ipAttr.length != 4) {
      result.code = 0;
      result.msg = "IP地址错误";
      return result;
    }

    let curl = "http://freeapi.ipip.net/" + ip;
    let res_get = await axios(curl);
    if (res_get && res_get.status === 200 && res_get.data) {
      result.data = res_get.data;
    }
    return result;
  }
  async logView(user_id) {
    const { ctx, logger, config } = this;
    let msg = config.msg;

    let result = {
      code: 1,
      data: null,
      msg: msg.get.succ
    };

    //添加到日志中
    let logItem = {
      user_id: user_id,
      user_ip: ctx.ip,
      country: "",
      province: "",
      city: "",
      view_url: ctx.request.path,
      view_params: "",
      method: ctx.request.method
    };
    //解析ip
    let res_ip = await ctx.service.logView.parseIP(ctx.ip);
    if (res_ip && res_ip.code === 1 && res_ip.data) {
      let ipData = res_ip.data;
      logItem.country = ipData[0];
      logItem.province = ipData[1];
      logItem.city = ipData[2];
    }
    return await ctx.service.logView.create(logItem);
  }
}
module.exports = LogView;
