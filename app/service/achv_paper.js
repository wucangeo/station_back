const crypto = require("crypto");
const Service = require("egg").Service;
let attrs = ["id", "year", "title", "journal", "author", "journal_level"];
class AchvPaper extends Service {
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
    return this.ctx.model.AchvPaper.findAndCountAll(query);
  }
  async get(id) {
    var query = {
      where: {
        id: id
      }
    };
    var paper = this.ctx.model.AchvPaper.findOne(query);
    return paper;
  }
  async create(item) {
    item.year = item.year ? item.year : null;
    item.rank_depart = item.rank_depart ? item.rank_depart : null;
    item.rank_author = item.rank_author ? item.rank_author : null;
    item.index = item.index ? item.index : null;
    item.is_coop = item.is_coop ? item.is_coop : null;
    item.enable = item.enable ? item.enable : 1;
    item.created_user = item.created_user ? item.created_user : 0;
    item.updated_user = item.updated_user ? item.updated_user : 0;
    let result = await this.ctx.model.AchvPaper.create(item);
    if (result) {
      result = JSON.parse(JSON.stringify(result));
      delete result.password;
    }
    return result;
  }
  async update({ id, updates }) {
    const paper = await this.ctx.model.AchvPaper.findById(id);
    if (!paper) {
      return false;
    }
    updates.year = updates.year ? updates.year : null;
    updates.rank_depart = updates.rank_depart ? updates.rank_depart : null;
    updates.rank_author = updates.rank_author ? updates.rank_author : null;
    updates.index = updates.index ? updates.index : null;
    updates.is_coop = updates.is_coop ? updates.is_coop : null;
    updates.enable = updates.enable ? updates.enable : 1;
    updates.created_user = updates.created_user ? updates.created_user : 0;
    updates.updated_user = updates.updated_user ? updates.updated_user : 0;

    let result = await paper.update(updates);
    result.password = null;
    delete result.password;
    return result;
  }
  async delete(ids) {
    const papers = await this.ctx.model.AchvPaper.destroy({
      where: { id: { $in: ids } }
    });
    if (!papers) {
      return false;
    }
    return papers;
  }
}
module.exports = AchvPaper;