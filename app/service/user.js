const crypto = require("crypto");
const Service = require("egg").Service;
let attrs = [
  "id",
  "username",
  "name",
  "school",
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
  async login(username, password) {
    var query = {
      where: {
        username: username,
        password: password
      }
    };
    var user = this.ctx.model.User.findOne(query);
    return user;
  }
  async list({
    key = null,
    offset = 0,
    limit = 10,
    order_by = "created_at",
    order = "ASC"
  }) {
    var query = {};
    if (key) {
      query.where = { name: { $like: "%" + key + "%" } };
    }
    if (parseInt(offset) != null && parseInt(limit) != null) {
      query.offset = parseInt(offset);
      query.limit = parseInt(limit);
    }
    if (order_by && order) {
      query.order = [[order_by, order.toUpperCase()]];
    }
    return this.ctx.model.User.findAndCountAll(query);
  }
  async get(id) {
    var query = {
      attributes: attrs,
      where: {
        id: id
      }
    };
    var user = this.ctx.model.User.findOne(query);
    return user;
  }
  async create(item) {
    if (item.password) {
      const hash = crypto
        .createHmac("sha256", item.password)
        .update("stations")
        .digest("hex");
      item.password = hash;
    }
    let result = await this.ctx.model.User.create(item);
    if (result) {
      result = JSON.parse(JSON.stringify(result));
      delete result.password;
    }
    return result;
  }
  async update({ id, updates }) {
    const user = await this.ctx.model.User.findById(id);
    if (!user) {
      return false;
    }
    if (updates.password) {
      const hash = crypto
        .createHmac("sha256", updates.password)
        .update("stations")
        .digest("hex");
      updates.password = hash;
    }
    let result = await user.update(updates);
    result.password = null;
    delete result.password;
    return result;
  }
  async delete(id) {
    const users = await this.ctx.model.User.destroy({
      where: { id: { $in: ids } }
    });
    if (!users) {
      return false;
    }
    return users;
  }
}
module.exports = User;
