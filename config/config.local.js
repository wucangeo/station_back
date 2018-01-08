"use strict";

exports.sequelize = {
  dialect: "mysql", // support: mysql, mariadb, postgres, mssql
  database: "stations",
  // host: "localhost",
  host: "47.93.225.139",
  port: "3306",
  username: "root",
  password: "noroot",
  timezone: "+08:00"
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
