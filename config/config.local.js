"use strict";

exports.sequelize = {
  dialect: "mysql", // support: mysql, mariadb, postgres, mssql
  database: "stations",
  host: "localhost",
  port: "3306",
  username: "root",
  password: "noroot"
};

exports.cors = {
  origin: "*",
  allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH"
};

exports.security = {
  domainWhiteList: ["http://localhost:8080"],
  csrf: {
    enable: false
  }
};
