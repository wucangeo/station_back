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
  async list({
    offset = 0,
    limit = 10,
    order_by = "created_at",
    order = "ASC"
  }) {
    return this.ctx.model.User.findAndCountAll({
      offset,
      limit,
      order: [[order_by, order.toUpperCase()]]
    });
  }
  async get(user_id) {
    var query = {
      attributes: attrs,
      where: {
        id: user_id
      }
    };
    var user = this.ctx.model.User.findOne(query);
    return user;
  }
  async create(item) {
    let result = await this.ctx.model.User.create(item);
    if (result) {
      delete result.password;
    }
    return result;
  }
  async update({ user_id, updates }) {
    const user = await this.ctx.model.User.findById(user_id);
    if (!user) {
      return false;
    }
    return user.update(updates);
  }
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
}
module.exports = User;
