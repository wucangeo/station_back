module.exports = app => {
  const { STRING, INTEGER, DATE, BOOLEAN } = app.Sequelize;
  const User = app.model.define(
    "user",
    {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: STRING(50),
      password: STRING(50),
      name: STRING(255),
      school: STRING(255),
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

  return User;
};
