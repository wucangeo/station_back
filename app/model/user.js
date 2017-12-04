const crypto = require("crypto");
const jwt = require("jsonwebtoken");

module.exports = app => {
  const { STRING, INTEGER, DATE, BOOLEAN, VIRTUAL } = app.Sequelize;
  const User = app.model.define(
    "user",
    {
      data_id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: STRING(50),
      salt: STRING(50),
      hash: STRING(255),
      password: {
        type: VIRTUAL,
        set: function(password) {
          let salt = crypto.randomBytes(16).toString("hex");
          this.setDataValue("salt", salt);
          let hash = crypto
            .pbkdf2Sync(password, salt, 10000, 64, "sha512")
            .toString("hex");
          this.setDataValue("hash", hash);
        }
      },
      access_token: {
        type: VIRTUAL,
        get: function() {
          if (this.data_id && this.salt) {
            return jwt.sign({ user_id: this.data_id }, this.salt, {
              expiresIn: "7d"
            });
          }
          return "";
        }
      },
      name: STRING(255),
      department: STRING(255),
      phone: STRING(255),
      email: STRING(255),
      avatar: STRING(255),
      is_admin: INTEGER,
      enable: INTEGER,
      created_user: INTEGER,
      updated_at: DATE,
      updated_user: INTEGER,
      created_at: DATE
    },
    {
      underscored: true,
      freezeTableName: true,
      tableName: "sta_user"
    }
  );

  User.prototype.validPassword = function(password) {
    var hash = crypto
      .pbkdf2Sync(password, this.salt, 10000, 64, "sha512")
      .toString("hex");
    return this.hash === hash;
  };

  User.prototype.toJson = function() {
    var str = JSON.stringify(this);
    var user = JSON.parse(str);
    if (user.salt) {
      delete user.salt;
    }
    if (user.hash) {
      delete user.hash;
    }
    return user;
  };

  return User;
};
