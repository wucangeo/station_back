const crypto = require("crypto");
const Service = require("egg").Service;
let attrs = ["id", "year", "title", "pub_type", "press", "author"];

class AchvMonography extends Service {
  async list({
    key = null,
    offset = 0,
    limit = 10,
    order_by = "created_at",
    order = "ASC"
  }) {
    var query = {
      attributes: attrs
    };
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
    return this.ctx.model.AchvMonography.findAndCountAll(query);
  }
  async get(id) {
    var query = {
      where: {
        id: id
      }
    };
    var monography = this.ctx.model.AchvMonography.findOne(query);
    return monography;
  }
  async create(item) {
    item.year = item.year ? item.year : null;
    item.rank_depart = item.rank_depart ? item.rank_depart : null;
    item.rank_author = item.rank_author ? item.rank_author : null;
    item.word_count = item.word_count ? item.word_count : null;
    item.enable = item.enable ? item.enable : 1;
    item.created_user = item.created_user ? item.created_user : 0;
    item.updated_user = item.updated_user ? item.updated_user : 0;
    let result = await this.ctx.model.AchvMonography.create(item);
    if (result) {
      result = JSON.parse(JSON.stringify(result));
      delete result.password;
    }
    return result;
  }
  async update({ id, updates }) {
    const monography = await this.ctx.model.AchvMonography.findById(id);
    if (!monography) {
      return false;
    }
    updates.year = updates.year ? updates.year : null;
    updates.rank_depart = updates.rank_depart ? updates.rank_depart : null;
    updates.rank_author = updates.rank_author ? updates.rank_author : null;
    updates.word_count = updates.word_count ? updates.word_count : null;
    updates.enable = updates.enable ? updates.enable : 1;
    updates.created_user = updates.created_user ? updates.created_user : 0;
    updates.updated_user = updates.updated_user ? updates.updated_user : 0;

    let result = await monography.update(updates);
    result.password = null;
    delete result.password;
    return result;
  }
  async delete(ids) {
    const monographys = await this.ctx.model.AchvMonography.destroy({
      where: { id: { $in: ids } }
    });
    if (!monographys) {
      return false;
    }
    return monographys;
  }
}
module.exports = AchvMonography;
