module.exports = app => {
  const { STRING, INTEGER, DATE, BOOLEAN } = app.Sequelize;
  const Token = app.model.define(
    "token",
    {
      id: {
        type: INTEGER,
        primaryKey: true
      },
      token: STRING(50),
      last_access: DATE,
      user_id: INTEGER
    },
    {
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      tableName: "sta_token"
    }
  );

  return Token;
};
