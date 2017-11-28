const Service = require("egg").Service;

class Data extends Service {
  async list({
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
    return this.ctx.model.Data.findAndCountAll(query);
  }
  async get(id) {
    var query = {
      where: {
        id: id
      }
    };
    var data = this.ctx.model.Data.findOne(query);
    return data;
  }
  async create(item) {
    let result = await this.ctx.model.Data.create(item);
    return result;
  }
  async update({ id, updates }) {
    const data = await this.ctx.model.Data.findById(id);
    if (!data) {
      return false;
    }
    let result = await data.update(updates);
    result.password = null;
    delete result.password;
    return result;
  }
  async delete(ids) {
    const datas = await this.ctx.model.Data.destroy({
      where: { id: { $in: ids } }
    });
    if (!datas) {
      return false;
    }
    return datas;
  }
}
module.exports = Data;
