"use strict";

exports.sequelize = {
  dialect: "mysql", // support: mysql, mariadb, postgres, mssql
  database: "stations",
  host: "localhost",
  port: "3306",
  username: "root",
  password: "noroot"
};

exports.security = {
  // domainWhiteList: ["http://139.196.125.45"]
};
