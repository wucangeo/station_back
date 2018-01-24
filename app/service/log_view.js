const axios = require("axios");
const utils = require("../utils");

const Service = require("egg").Service;
let attrs = [
  "*",
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
    //备用ip地址解析
    //http://ip.taobao.com/service/getIpInfo.php?ip=180.77.12.123
    // let curl = "http://freeapi.ipip.net/" + ip;

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

    let curl = "http://ip.taobao.com/service/getIpInfo.php?ip=" + ip;
    let res_get = await axios(curl);
    if (
      res_get &&
      res_get.status === 200 &&
      res_get.data &&
      res_get.data.data
    ) {
      let data = res_get.data.data;
      result.data = [data.country, data.region, data.city];
    }
    return result;
  }
  async logView(user_id = 0) {
    const { ctx, logger, config } = this;
    let msg = config.msg;

    let result = {
      code: 1,
      data: null,
      msg: msg.get.succ
    };

    //添加到日志中
    if (user_id < 0) {
      user_id = -1;
    }
    let logItem = {
      user_id: user_id,
      user_ip: ctx.ip,
      country: "",
      province: "",
      city: "",
      view_url: ctx.request.path,
      view_params: ctx.request.querystring,
      method: ctx.request.method
    };
    //处理浏览模块
    let pathArr = ctx.request.path.split("/");
    if (pathArr.length >= 4) {
      if (pathArr[3] === "log_view") {
        return result;
      }
      logItem.view_url = pathArr[3];
    }
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
  async count({
    type = 1,
    from_time = 0, //当天00:00:00
    to_time = 1 //明天00:00:00
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
        type: { type: "int" },
        from_time: { type: "int" },
        to_time: { type: "int" }
      },
      { type, from_time, to_time }
    );
    if (error) {
      result.code = 0;
      result.msg = msg.err_param;
      result.data = error;
      return result;
    }
    //组织查询参数
    let from_time_str = utils.getDateStringByIndex(from_time);
    let to_time_str = utils.getDateStringByIndex(to_time);
    //开始请求
    let sql = "";
    if (type === 0) {
      sql = `SELECT count(*) as count from sta_log_view where 1=1`;
    } else if (type === 1) {
      sql = `SELECT count(DISTINCT user_ip) as count from sta_log_view where 1=1`;
    } else if (type === 2) {
      sql = `SELECT count(DISTINCT user_id) AS count FROM sta_log_view WHERE user_id > 0`;
    } else if (type === 3) {
      sql = `SELECT count(*) as count from sta_log_view where method in ('POST','PATCH') AND view_url != '/api/v1/user/login'`;
    }
    sql += ` AND created_at BETWEEN '${from_time_str}' AND '${to_time_str}'`;
    //查询
    let res_query = await ctx.model.query(sql);
    if (!res_query || res_query.length != 2 || res_query[0].length != 1) {
      result.code = 0;
      result.msg = "查询失败";
      return result;
    }
    let count = res_query[0][0].count;
    result.data = count;
    return result;
  }
  async map({
    type = 1,
    from_time = 0, //当天00:00:00
    to_time = 1 //明天00:00:00
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
        type: { type: "int" },
        from_time: { type: "int" },
        to_time: { type: "int" }
      },
      { type, from_time, to_time }
    );
    if (error) {
      result.code = 0;
      result.msg = msg.err_param;
      result.data = error;
      return result;
    }
    //组织查询参数
    let from_time_str = utils.getDateStringByIndex(from_time);
    let to_time_str = utils.getDateStringByIndex(to_time);
    //开始请求
    let sql = "";
    if (type === 2) {
      sql = `SELECT s.province AS name,count(s.province) AS value  FROM sta_log_view s WHERE s. created_at BETWEEN '${from_time_str}' AND '${to_time_str}' AND province != '' GROUP BY province ORDER BY value desc`;
    } else {
      sql = `SELECT s.city AS name,count(s.city) AS value FROM sta_log_view s WHERE city != '' AND created_at BETWEEN '${from_time_str}' AND '${to_time_str}' GROUP BY city ORDER BY value desc`;
    }
    //查询
    let res_query = await ctx.model.query(sql);
    if (!res_query || res_query.length != 2) {
      result.code = 0;
      result.msg = "查询失败";
      return result;
    }
    result.data = res_query[0];
    return result;
  }
  async url({
    type = 1,
    from_time = 0, //当天00:00:00
    to_time = 1 //明天00:00:00
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
        type: { type: "int" },
        from_time: { type: "int" },
        to_time: { type: "int" }
      },
      { type, from_time, to_time }
    );
    if (error) {
      result.code = 0;
      result.msg = msg.err_param;
      result.data = error;
      return result;
    }
    //组织查询参数
    let from_time_str = utils.getDateStringByIndex(from_time);
    let to_time_str = utils.getDateStringByIndex(to_time);
    //开始请求
    let sql = "";
    if (type === 2) {
      sql = `SELECT date_format(s.created_at, "%m-%d") as date, s.view_url as name, count(*) as value FROM sta_log_view s WHERE s.created_at BETWEEN '${from_time_str}' AND '${to_time_str}' GROUP BY date_format(s.created_at, "%m-%d"),s.view_url ORDER BY value DESC`;
    } else {
      sql = `SELECT date_format(s.created_at, "%m-%d") as date, count(*) as value FROM sta_log_view s WHERE s.created_at BETWEEN '${from_time_str}' AND '${to_time_str}' GROUP BY date_format(s.created_at, "%m-%d") ORDER BY date`;
    }
    //查询
    let res_query = await ctx.model.query(sql);
    if (!res_query || res_query.length != 2) {
      result.code = 0;
      result.msg = "查询失败";
      return result;
    }
    result.data = res_query[0];
    return result;
  }
}
module.exports = LogView;
