const Service = require("egg").Service;
let attrs = [
  "data_id",
  "year",
  "title",
  "journal",
  "author",
  "journal_level",
  "created_at"
];

class AchvPaper extends Service {
  async list({
    key = "",
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
        key: { type: "string", allowEmpty: true },
        offset: { type: "int" },
        limit: { type: "int" },
        order: { type: "enum", values: [0, 1] },
        order_by: {
          type: "enum",
          values: attrs
        }
      },
      { key, offset, limit, order, order_by }
    );
    if (error) {
      result.code = 0;
      result.msg = msg.err_param;
      result.data = error;
      return result;
    }
    //组织查询参数
    var query = {};
    if (key) {
      query.where = { name: { $like: "%" + key + "%" } };
    }
    query.offset = offset;
    query.limit = limit;
    order = order === 1 ? "DESC" : "ASC";
    query.order = [[order_by, order]];
    //查询
    let datas = await ctx.model.AchvPaper.findAndCountAll(query);
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
    var achvPaper = await ctx.model.AchvPaper.findOne(query);

    result.data = achvPaper;
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
        year: { type: "int", required: false, allowEmpty: true },
        title: { type: "string", required: false, allowEmpty: true },
        journal: { type: "string", required: false, allowEmpty: true },
        volume: { type: "string", required: false, allowEmpty: true },
        issue_number: { type: "string", required: false, allowEmpty: true },
        author: { type: "string", required: false, allowEmpty: true },
        co_author: { type: "string", required: false, allowEmpty: true },
        abstract: { type: "string", required: false, allowEmpty: true },
        rank_depart: { type: "int", required: false, allowEmpty: true },
        rank_author: { type: "int", required: false, allowEmpty: true },
        journal_level: { type: "string", required: false, allowEmpty: true },
        index: { type: "number", required: false, allowEmpty: true },
        is_coop: { type: "int", required: false, allowEmpty: true },
        file_path: { type: "string", required: false, allowEmpty: true },
        remark: { type: "string", required: false, allowEmpty: true },
        enable: { type: "int", required: false, allowEmpty: true }
      },
      item
    );
    if (error) {
      result.code = 0;
      result.msg = msg.err_param;
      result.data = error;
      return result;
    }
    //组织查询参数
    item.created_user = user_id;
    item.updated_user = user_id;
    //查询
    let data_created = await ctx.model.AchvPaper.create(item);
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
        year: { type: "int", required: false, allowEmpty: true },
        title: { type: "string", required: false, allowEmpty: true },
        journal: { type: "string", required: false, allowEmpty: true },
        volume: { type: "string", required: false, allowEmpty: true },
        issue_number: { type: "string", required: false, allowEmpty: true },
        author: { type: "string", required: false, allowEmpty: true },
        co_author: { type: "string", required: false, allowEmpty: true },
        abstract: { type: "string", required: false, allowEmpty: true },
        rank_depart: { type: "int", required: false, allowEmpty: true },
        rank_author: { type: "int", required: false, allowEmpty: true },
        journal_level: { type: "string", required: false, allowEmpty: true },
        index: { type: "double", required: false, allowEmpty: true },
        is_coop: { type: "int", required: false, allowEmpty: true },
        file_path: { type: "string", required: false, allowEmpty: true },
        remark: { type: "string", required: false, allowEmpty: true },
        enable: { type: "int", required: false, allowEmpty: true }
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
    let achvPaper = await ctx.model.AchvPaper.findById(data_id);
    if (!achvPaper) {
      result.code = 0;
      result.msg = msg.err_find;
      return result;
    }
    //组织查询参数
    updates.updated_user = user_id;
    //查询
    let data_updated = await achvPaper.update(updates);
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
    //参数验证
    try {
      ids = JSON.parse(ids);
    } catch (ex) {
      ids = null;
    }
    let error = validator.validate(
      {
        ids: { type: "array", required: true }
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
    const data_deleted = await ctx.model.AchvPaper.destroy({
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
}
module.exports = AchvPaper;
