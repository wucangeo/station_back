const crypto = require("crypto");

const Service = require("egg").Service;
let attrs = [
  "data_id",
  "username",
  "name",
  "department",
  "phone",
  "email",
  "avatar",
  "is_admin",
  "enable",
  "created_user",
  "updated_at",
  "updated_user",
  "created_at"
];

class User extends Service {
  async list({
    keys = {},
    offset = 0,
    limit = 10,
    order_by = "created_at",
    order = "ASC"
  }) {
    let result = {
      code: 1,
      data: null,
      msg: "查询成功。"
    };
    //组织查询参数
    limit = limit < 0 ? 1000000000 : limit;
    order = order === 1 ? "DESC" : "ASC";
    var query = {
      attributes: attrs,
      virtual: false,
      limit: limit,
      offset: offset,
      order: [[order_by, order]],
      where: {}
    };
    for (var selectKey in keys) {
      if (selectKey == "name") {
        if (keys[selectKey]) {
          query.where["$or"] = [
            { name: { $like: "%" + keys[selectKey] + "%" } },
            { username: { $like: "%" + keys[selectKey] + "%" } },
            { department: { $like: "%" + keys[selectKey] + "%" } }
          ];
        }
      } else {
        query.where[selectKey] = keys[selectKey];
      }
    }
    let users = await this.ctx.model.User.findAndCountAll(query);

    result.data = users ? users : [];
    return result;
  }
  async get(user_id, virtual = false) {
    let result = {
      code: 1,
      data: null,
      msg: "查询成功。"
    };
    if (!user_id) {
      result.code = 0;
      result.msg = "缺少参数。";
      return result;
    }
    let vir_attrs = null;
    if (virtual) {
      vir_attrs = ["salt", "hash", ...attrs];
    }
    var query = {
      attributes: vir_attrs || attrs,
      where: {
        data_id: user_id
      }
    };
    var user = await this.ctx.model.User.findOne(query);

    result.data = user;
    return result;
  }
  async findOne(findInfo) {
    let result = {
      code: 1,
      data: null,
      msg: "查询成功。"
    };
    let find_where = {};
    for (let column in findInfo) {
      if (!column || !findInfo[column]) {
        continue;
      }
      find_where[column] = findInfo[column];
      if (Object.keys(find_where).length > 0) {
        break;
      }
    }
    if (Object.keys(find_where).length === 0) {
      result.code = 0;
      result.msg = "查询参数错误。";
      return result;
    }
    var query = {
      attributes: attrs,
      where: find_where
    };
    var user = await this.ctx.model.User.findOne(query);

    result.data = user;
    return result;
  }
  async create(item, user_id = 0) {
    let result = {
      code: 1,
      data: null,
      msg: "创建成功。"
    };
    if (!item.username) {
      result.code = 0;
      result.msg = "缺少用户名。";
      return result;
    }
    //如果没有密码，则默认为123456
    if (!item.password) {
      let md5 = crypto.createHash("md5");
      let md5_123456 = md5.update("123456bnu").digest("hex");
      item.password = md5_123456;
    }
    item.name = item.name ? item.name : item.username;
    item.is_admin = item.is_admin ? item.is_admin : 0;
    item.enable = item.enable ? item.enable : 0;
    if (user_id === 0) {
      item.is_admin = 0;
      item.enable = 0;
    }
    item.created_user = user_id;
    item.updated_user = user_id;
    let user_created = await this.ctx.model.User.create(item);
    if (!user_created) {
      result.code = 0;
      result.msg = "创建失败！";
      return result;
    }
    result.data = user_created.toJson();
    return result;
  }
  async update({ data_id, updates }, user_id = 0) {
    let result = {
      code: 1,
      data: null,
      msg: "更新成功。"
    };
    const user = await this.ctx.model.User.findById(data_id);
    if (!user) {
      result.code = 0;
      result.msg = "未找到用户。";
      return result;
    }

    updates.updated_user = user_id;

    let user_updated = await user.update(updates);
    if (!user_updated) {
      result.code = 0;
      result.msg = "更新失败。";
      return result;
    }
    result.data = user_updated.toJson();
    return result;
  }
  async delete(ids) {
    const { ctx, logger, config } = this;
    const { validator } = this.app;
    let result = {
      code: 1,
      data: null,
      msg: "删除成功。"
    };
    //参数验证
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
    //开始删除
    const users = await this.ctx.model.User.destroy({
      where: { data_id: { $in: ids } }
    });
    if (!users) {
      result.code = 0;
      result.msg = "删除失败";
      return result;
    }
    result.data = users;
    return result;
  }
  async login(username, password) {
    let result = {
      code: 1,
      data: null,
      msg: "登录成功。"
    };
    var query = {
      where: {
        username: username
      }
    };
    var user = await this.ctx.model.User.findOne(query);
    if (!user) {
      result.code = 0;
      result.msg = "用户名不存在。";
      return result;
    }
    if (user.enable === 0) {
      result.code = 0;
      result.msg = "用户未认证，请联系管理员。";
      return result;
    }
    let verify = await user.validPassword(password);
    if (!verify) {
      result.code = 0;
      result.msg = "密码错误。";
      return result;
    }
    result.data = await user.toJson();
    return result;
  }
}
module.exports = User;
