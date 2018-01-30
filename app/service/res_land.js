const Service = require("egg").Service;
let attrs = [
  "data_id",
  "name",
  "code",
  "build_year",
  "area",
  "enable",
  "created_at"
];

class ResLand extends Service {
  async list({
    keys = {},
    offset = 0,
    limit = 10,
    order_by = "created_at",
    order = 0
  }) {
    const {
      ctx,
      logger,
      config
    } = this;
    const {
      validator
    } = this.app;
    let msg = config.msg;
    let result = {
      code: 1,
      data: null,
      msg: msg.list.succ
    };
    //参数验证
    let error = validator.validate({
      keys: {
        type: "object",
        allowEmpty: true
      },
      offset: {
        type: "int"
      },
      limit: {
        type: "int"
      },
      order: {
        type: "enum",
        values: [0, 1]
      },
      order_by: {
        type: "enum",
        values: attrs
      }
    }, {
      keys,
      offset,
      limit,
      order,
      order_by
    });
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
      offset: offset,
      limit: limit,
      order: [
        [order_by, order]
      ],
      where: {}
    };
    for (var selectKey in keys) {
      if (["title", "patent_no", "author", "co_author"].includes(selectKey)) {
        if (keys[selectKey]) {
          query.where[selectKey] = {
            $like: "%" + keys[selectKey] + "%"
          };
        }
      } else {
        query.where[selectKey] = keys[selectKey];
      }
    }
    //查询
    let datas = await ctx.model.ResLand.findAndCountAll(query);
    result.data = datas ? datas : [];

    return result;
  }
  async get(data_id) {
    const {
      ctx,
      logger,
      config
    } = this;
    const {
      validator
    } = this.app;
    let msg = config.msg;

    let result = {
      code: 1,
      data: null,
      msg: msg.get.succ
    };
    data_id = parseInt(data_id);
    //参数验证
    let error = validator.validate({
      data_id: {
        type: "int",
        required: true
      }
    }, {
      data_id
    });
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
    var achvMonography = await ctx.model.ResLand.findOne(query);

    result.data = achvMonography;
    return result;
  }
  async create(item, user_id = 0) {
    const {
      ctx,
      logger,
      config
    } = this;
    const {
      validator
    } = this.app;
    let msg = config.msg;
    let result = {
      code: 1,
      data: null,
      msg: msg.create.succ
    };
    //参数验证
    let error = validator.validate({
        code: {
          type: "string",
          required: false,
          allowEmpty: true
        },
        name: {
          type: "string",
          required: false,
          allowEmpty: true
        },
        type: {
          type: "string",
          required: false,
          allowEmpty: true
        },
        build_year: {
          type: "int",
          required: false,
          allowEmpty: true
        },
        use_year: {
          type: "string",
          required: false,
          allowEmpty: true
        },
        area: {
          type: "number",
          required: false,
          allowEmpty: true
        },
        sharp: {
          type: "string",
          required: false,
          allowEmpty: true
        },
        ready_to: {
          type: "string",
          required: false,
          allowEmpty: true
        },
        desc: {
          type: "string",
          required: false,
          allowEmpty: true
        },
        property: {
          type: "string",
          required: false,
          allowEmpty: true
        },
        location: {
          type: "string",
          required: false,
          allowEmpty: true
        },
        longitude: {
          type: "number",
          required: false,
          allowEmpty: true
        },
        latitude: {
          type: "number",
          required: false,
          allowEmpty: true
        },
        altitude: {
          type: "number",
          required: false,
          allowEmpty: true
        },
        soil_type: {
          type: "string",
          required: false,
          allowEmpty: true
        },
        topography: {
          type: "string",
          required: false,
          allowEmpty: true
        },
        vegetation_type: {
          type: "string",
          required: false,
          allowEmpty: true
        },
        plant_property: {
          type: "string",
          required: false,
          allowEmpty: true
        },
        manage: {
          type: "string",
          required: false,
          allowEmpty: true
        },
        remark: {
          type: "string",
          required: false,
          allowEmpty: true
        },
        images: {
          type: "object",
          required: false,
          allowEmpty: true
        },
        is_public: {
          type: "int",
          required: false,
          allowEmpty: true
        },
        enable: {
          type: "int",
          required: false,
          allowEmpty: true
        }
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
    let data_created = await ctx.model.ResLand.create(item);
    if (!data_created) {
      result.code = 0;
      result.msg = msg.create.err;
      return result;
    }
    result.data = data_created;
    return result;
  }
  async update({
    data_id,
    updates
  }, user_id = 0) {
    const {
      ctx,
      logger,
      config
    } = this;
    const {
      validator
    } = this.app;
    let msg = config.msg;
    let result = {
      code: 1,
      data: null,
      msg: msg.update.succ
    };
    data_id = parseInt(data_id);
    //参数验证
    let error = validator.validate({
      data_id: {
        type: "int",
        required: true,
        allowEmpty: false
      },
      code: {
        type: "string",
        required: false,
        allowEmpty: true
      },
      name: {
        type: "string",
        required: false,
        allowEmpty: true
      },
      type: {
        type: "string",
        required: false,
        allowEmpty: true
      },
      build_year: {
        type: "int",
        required: false,
        allowEmpty: true
      },
      use_year: {
        type: "string",
        required: false,
        allowEmpty: true
      },
      area: {
        type: "number",
        required: false,
        allowEmpty: true
      },
      sharp: {
        type: "string",
        required: false,
        allowEmpty: true
      },
      ready_to: {
        type: "string",
        required: false,
        allowEmpty: true
      },
      desc: {
        type: "string",
        required: false,
        allowEmpty: true
      },
      property: {
        type: "string",
        required: false,
        allowEmpty: true
      },
      location: {
        type: "string",
        required: false,
        allowEmpty: true
      },
      longitude: {
        type: "number",
        required: false,
        allowEmpty: true
      },
      latitude: {
        type: "number",
        required: false,
        allowEmpty: true
      },
      altitude: {
        type: "number",
        required: false,
        allowEmpty: true
      },
      soil_type: {
        type: "string",
        required: false,
        allowEmpty: true
      },
      topography: {
        type: "string",
        required: false,
        allowEmpty: true
      },
      vegetation_type: {
        type: "string",
        required: false,
        allowEmpty: true
      },
      plant_property: {
        type: "string",
        required: false,
        allowEmpty: true
      },
      manage: {
        type: "string",
        required: false,
        allowEmpty: true
      },
      remark: {
        type: "string",
        required: false,
        allowEmpty: true
      },
      images: {
        type: "object",
        required: false,
        allowEmpty: true
      },
      is_public: {
        type: "int",
        required: false,
        allowEmpty: true
      },
      enable: {
        type: "int",
        required: false,
        allowEmpty: true
      }
    }, {
      data_id,
      ...updates
    });
    if (error) {
      result.code = 0;
      result.msg = msg.err_param;
      result.data = error;
      return result;
    }
    //data_id有效性验证
    let achvMonography = await ctx.model.ResLand.findById(data_id);
    if (!achvMonography) {
      result.code = 0;
      result.msg = msg.err_find;
      return result;
    }
    //组织查询参数
    updates.updated_user = user_id;
    //查询
    let data_updated = await achvMonography.update(updates);
    result.data = data_updated;

    return result;
  }
  async delete(ids) {
    const {
      ctx,
      logger,
      config
    } = this;
    const {
      validator
    } = this.app;
    let msg = config.msg;
    let result = {
      code: 1,
      data: null,
      msg: msg.delete.succ
    };
    let error = validator.validate({
      ids: {
        type: "object",
        required: true
      }
    }, {
      ids
    });
    if (error) {
      result.code = 0;
      result.msg = msg.err_param;
      result.data = error;
      return result;
    }
    //查询
    const data_deleted = await ctx.model.ResLand.destroy({
      where: {
        data_id: {
          $in: ids
        }
      }
    });
    if (!data_deleted) {
      result.code = 0;
      result.msg = msg.delete.err;
      return result;
    }
    result.data = data_deleted;

    return result;
  }
}
module.exports = ResLand;