const path = require("path");
const fs = require("fs");
const awaitWriteStream = require("await-stream-ready").write;
const sendToWormhole = require("stream-wormhole");

const Service = require("egg").Service;
let attrs = [
  "data_id",
  "name",
  "size",
  "path",
  "type",
  "order",
  "tag",
  "enable",
  "updated_user",
  "updated_at",
  "created_user",
  "created_at"
];

class Image extends Service {
  async list({
    key = 1,
    offset = 0,
    limit = 1,
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
        key: { type: "string", allowEmpty: true, required: false },
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
    order = order === 1 ? "DESC" : "ASC";
    limit = limit < 0 ? 1000000000 : limit;
    var query = {
      where: { name: { $like: "%" + key + "%" } },
      offset: offset,
      limit: limit,
      order: [[order_by, order]]
    };
    //查询
    let datas = await ctx.model.Image.findAndCountAll(query);
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
    var image = await ctx.model.Image.findOne(query);

    result.data = image;
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
        name: { type: "string", required: false },
        size: { type: "int", required: false },
        path: { type: "string", required: false },
        order: { type: "string", required: false },
        tag: { type: "string", required: false },
        type: { type: "string", required: false },
        enable: { type: "boolean", required: false }
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
    let data_created = await ctx.model.Image.create(item);
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
        name: { type: "string", required: false },
        size: { type: "int", required: false },
        path: { type: "string", required: false },
        order: { type: "string", required: false },
        tag: { type: "string", required: false },
        type: { type: "string", required: false },
        enable: { type: "boolean", required: false }
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
    const image = await ctx.model.Image.findById(data_id);
    if (!image) {
      result.code = 0;
      result.msg = msg.err_find;
      return result;
    }
    //组织查询参数
    updates.updated_user = user_id;
    //查询
    let data_updated = await image.update(updates);
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
    const data_deleted = await ctx.model.Image.destroy({
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
  async upload(stream, user_id) {
    const { ctx, logger, config } = this;
    const { validator } = this.app;
    let msg = config.msg;
    let result = {
      code: 1,
      data: null,
      msg: msg.upload.succ
    };
    if (!stream) {
      result.code = 0;
      result.msg = config.msg.upload.err_find;
      return result;
    }

    let filename = encodeURIComponent(stream.filename);
    let pathObj = path.parse(filename);
    let pathStore = "app/public/image";
    let pathDatabase = "/public/image";
    let extension = pathObj.ext.toLowerCase();

    //检测图片格式
    let supportExtensions = [
      ".png",
      ".jpg",
      ".jpeg",
      ".gif",
      ".bmp",
      ".wbmp",
      ".webp",
      ".tif",
      ".psd"
    ];
    if (!supportExtensions.includes(extension)) {
      result.code = 0;
      result.msg = "图片格式不支持。";
      return result;
    }

    //随机图片名称
    let randomStr = Math.random()
      .toString(36)
      .substring(7);
    let datetimeStr = new Date(Date.now() + 28800000)
      .toISOString()
      .replace(/T/, "")
      .replace(/:/g, "")
      .replace(/-/g, "")
      .replace(/\..+/, ""); //获取本地时间：20171217213010
    let newFilename = datetimeStr + "_" + randomStr + extension; //20171217213010_bc69fg.jpg
    //存储路径;
    pathStore = path.join(pathStore, newFilename);
    pathDatabase = path.join(pathDatabase, newFilename);

    const writeStream = fs.createWriteStream(pathStore);
    try {
      await awaitWriteStream(stream.pipe(writeStream));
      let fileStat = fs.statSync(pathStore); //文件大小
      let title = pathObj.name;
      if (stream.fields.name) {
        title = stream.fields.name;
      }
      let type = stream.fields.type;

      result.data = {
        name: title,
        size: fileStat.size,
        path: pathDatabase,
        type: type
      };
      return result;
    } catch (err) {
      await sendToWormhole(stream);
      result.code = 0;
      result.msg = msg.upload.err;
      result.data = null;
      return result;
    }
  }
}
module.exports = Image;
