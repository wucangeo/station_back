module.exports = app => {
  const { STRING, INTEGER, DATE, BOOLEAN } = app.Sequelize;
  const Token = app.model.define(
    "token",
    {
      token: {
        type: STRING(50),
        primaryKey: true
      },
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
