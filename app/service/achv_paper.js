const crypto = require("crypto");
const Service = require("egg").Service;
let attrs = ["data_id", "year", "title", "journal", "author", "journal_level"];
class AchvPaper extends Service {
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
    let papers = await this.ctx.model.AchvPaper.findAndCountAll(query);
    result.data = papers ? papers : [];
    return result;
  }
  async get(data_id) {
    let result = {
      code: 1,
      data: null,
      msg: "查询成功。"
    };
    if (!data_id) {
      result.code = 0;
      result.msg = "缺少参数。";
      return result;
    }
    var query = {
      where: {
        data_id: data_id
      }
    };
    var paper = await this.ctx.model.AchvPaper.findOne(query);
    result.data = paper;
    return result;
  }
  async create(item, user_id = 0) {
    let result = {
      code: 1,
      data: null,
      msg: "创建成功。"
    };
    item.year = item.year ? item.year : null;
    item.rank_depart = item.rank_depart ? item.rank_depart : null;
    item.rank_author = item.rank_author ? item.rank_author : null;
    item.index = item.index ? item.index : null;
    item.is_coop = item.is_coop ? item.is_coop : null;
    item.enable = item.enable ? item.enable : 1;
    item.created_user = user_id;
    item.updated_user = user_id;
    let data_created = await this.ctx.model.AchvPaper.create(item);
    if (!data_created) {
      result.code = 0;
      result.msg = "创建失败！";
      return result;
    }
    result.data = data_created;
    return result;
  }
  async update({ data_id, updates }, user_id = 0) {
    let result = {
      code: 1,
      data: null,
      msg: "更新成功。"
    };
    const paper = await this.ctx.model.AchvPaper.findById(data_id);
    if (!paper) {
      result.code = 0;
      result.msg = "未找到数据。";
      return result;
    }
    updates.year = updates.year ? updates.year : null;
    updates.rank_depart = updates.rank_depart ? updates.rank_depart : null;
    updates.rank_author = updates.rank_author ? updates.rank_author : null;
    updates.index = updates.index ? updates.index : null;
    updates.is_coop = updates.is_coop ? updates.is_coop : null;
    updates.enable = updates.enable ? updates.enable : 1;
    updates.updated_user = user_id;

    let data_updated = await paper.update(updates);
    if (!data_updated) {
      result.code = 0;
      result.msg = "更新失败。";
      return result;
    }
    result.data = data_updated;
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
    const data_deleted = await this.ctx.model.AchvPaper.destroy({
      where: { data_id: { $in: ids } }
    });
    if (!data_deleted) {
      result.code = 0;
      result.msg = "删除失败";
      return result;
    }
    result.data = data_deleted;
    return result;
  }
}
module.exports = AchvPaper;
