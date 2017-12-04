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
    key = null,
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
    var query = {
      attributes: attrs,
      virtual: false
    };
    if (key) {
      query.where = { name: { $like: "%" + key + "%" } };
    }
    if (parseInt(offset) != null && parseInt(limit) != null) {
      query.offset = parseInt(offset);
      query.limit = parseInt(limit);
    }
    if (order_by && order) {
      order = parseInt(order) === 1 ? "DESC" : "ASC";
      query.order = [[order_by, order.toUpperCase()]];
    }
    let users = await this.ctx.model.User.findAndCountAll(query);

    result.data = users ? users : [];
    return result;
  }
  async get(user_id) {
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
    var query = {
      attributes: attrs,
      where: {
        data_id: user_id
      }
    };
    var user = await this.ctx.model.User.findOne(query);

    result.data = user;
    return result;
  }
  async create(item) {
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
    if (!item.password) {
      result.code = 0;
      result.msg = "缺少密码。";
      return result;
    }
    item.is_admin = item.is_admin ? item.is_admin : 0;
    item.enable = item.enable ? item.enable : 0;
    item.created_user = item.created_user ? item.created_user : 0;
    item.updated_user = item.updated_user ? item.updated_user : 0;
    let user_created = await this.ctx.model.User.create(item);
    if (!user_created) {
      result.code = 0;
      result.msg = "创建失败！";
      return result;
    }
    result.data = user_created.toJson();
    return result;
  }
  async update({ data_id, updates }) {
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

    updates.is_admin = updates.is_admin ? updates.is_admin : 0;
    updates.enable = updates.enable ? updates.enable : 0;
    updates.created_user = updates.created_user ? updates.created_user : 0;
    updates.updated_user = updates.updated_user ? updates.updated_user : 0;

    let user_updated = await user.update(updates);
    result.data = user_updated.toJson();
    return result;
  }
  async delete(ids) {
    let result = {
      code: 1,
      data: null,
      msg: "删除成功。"
    };
    if (!ids) {
      result.code = 0;
      result.msg = "参数错误。";
      return result;
    }
    ids = JSON.parse(ids);
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
      result.msg = "未找到该用户。";
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
