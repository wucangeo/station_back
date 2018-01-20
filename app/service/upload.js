const path = require("path");
const fs = require("fs");
const mkdirp = require("mkdirp");
const awaitWriteStream = require("await-stream-ready").write;
const sendToWormhole = require("stream-wormhole");

const Service = require("egg").Service;
let attrs = [
  "data_id",
  "name",
  "size",
  "type",
  "path",
  "ext",
  "enable",
  "updated_user",
  "updated_at",
  "created_user",
  "created_at"
];

class Upload extends Service {
  async list({
    keys = {},
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
        keys: { type: "object", allowEmpty: true, required: false },
        offset: { type: "int" },
        limit: { type: "int" },
        order: { type: "enum", values: [0, 1] },
        order_by: {
          type: "enum",
          values: attrs
        }
      },
      { keys, offset, limit, order, order_by }
    );
    if (error) {
      result.code = 0;
      result.msg = msg.err_param;
      result.data = error;
      return result;
    }
    //组织查询参数
    limit = limit < 0 ? 1000000000 : limit;
    order = order === 1 ? "DESC" : "ASC";
    var query = {
      limit: limit,
      offset: offset,
      order: [[order_by, order]],
      where: {}
    };
    for (var selectKey in keys) {
      if (selectKey == "name") {
        query.where[selectKey] = { $like: "%" + keys[selectKey] + "%" };
      } else {
        query.where[selectKey] = keys[selectKey];
      }
    }
    //查询
    let datas = await ctx.model.Upload.findAndCountAll(query);
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
    var upload = await ctx.model.Upload.findOne(query);

    result.data = upload;
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
        type: { type: "int", required: false },
        path: { type: "string", required: false },
        ext: { type: "string", required: false },
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
    let data_created = await ctx.model.Upload.create(item);
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
        type: { type: "int", required: false },
        path: { type: "string", required: false },
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
    const upload = await ctx.model.Upload.findById(data_id);
    if (!upload) {
      result.code = 0;
      result.msg = msg.err_find;
      return result;
    }
    //组织查询参数
    updates.updated_user = user_id;
    //查询
    let data_updated = await upload.update(updates);
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
    const data_deleted = await ctx.model.Upload.destroy({
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
    const { ctx, logger, config, app } = this;
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

    let filename = stream.filename;
    let pathObj = path.parse(filename);
    let pathStore = "app/public/upload";
    let pathDatabase = "/public/upload";
    let extension = pathObj.ext.toLowerCase();
    let fileType = "default";
    let exts = {
      image: [
        ".png",
        ".jpg",
        ".jpeg",
        ".gif",
        ".bmp",
        ".wbmp",
        ".webp",
        ".tif",
        ".psd"
      ],
      office: [".doc", ".docx", ".ppt", ".pptx", ".pdf", ".xls", ".xlsx"],
      zip: [".zip", "rar", ".gz", ".tgz", ".gzip"],
      video: [".mp3", ".mp4", ".avi"]
    };
    //image
    if (exts.image.includes(extension)) {
      fileType = "image";
    } else if (exts.office.includes(extension)) {
      fileType = "office";
    } else if (exts.zip.includes(extension)) {
      fileType = "zip";
    } else if (exts.video.includes(extension)) {
      fileType = "video";
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
    let folderPath = path.join(app.baseDir, pathStore, fileType);
    if (!fs.existsSync(folderPath)) {
      await mkdirp(folderPath);
    }

    pathStore = path.join(pathStore, fileType, newFilename);
    pathDatabase = path.join(pathDatabase, fileType, newFilename);

    const writeStream = fs.createWriteStream(pathStore);
    try {
      await awaitWriteStream(stream.pipe(writeStream));
      let fileStat = fs.statSync(pathStore); //文件大小
      let type = stream.fields.type || 0;
      result.data = {
        name: pathObj.name,
        size: fileStat.size,
        path: pathDatabase,
        type: parseInt(type),
        ext: extension
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
module.exports = Upload;
