"use strict";

module.exports = appInfo => {
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1511787612845_8882";

  // add your config here
  config.middleware = [];

  config.security = {
    domainWhiteList: ["http://localhost:8080"]
  };

  //database
  config.sequelize = {
    dialect: "mysql", // support: mysql, mariadb, postgres, mssql
    database: "stations",
    host: "localhost",
    port: "3306",
    username: "root",
    password: "noroot"
  };

  return config;
};
