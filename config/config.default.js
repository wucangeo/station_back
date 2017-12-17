"use strict";

module.exports = appInfo => {
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1511787612845_8882";

  // add your config here
  config.middleware = ["auth"];

  config.security = {
    domainWhiteList: ["http://localhost:8080"]
  };

  config.multipart = {
    fileSize: "50mb",
    fileExtensions: []
  };

  //database
  config.sequelize = {
    dialect: "mysql", // support: mysql, mariadb, postgres, mssql
    database: "stations",
    host: "localhost",
    port: "3306",
    username: "root",
    password: "noroot",
    timezone: "+08:00"
  };

  //返回结果中的msg
  config.msg = {
    err_param: "参数错误。",
    list: {
      succ: "查询成功。"
    },
    get: {
      succ: "查询成功。"
    },
    create: {
      succ: "创建成功。",
      err: "创建失败。"
    },
    update: {
      succ: "更新成功。",
      err_find: "未找到数据。"
    },
    delete: {
      succ: "删除成功。",
      err: "删除失败。"
    },
    upload: {
      succ: "上传成功。",
      err: "上传失败",
      err_find: "未找到上传数据。"
    }
  };

  return config;
};
