module.exports = app => {
  const { STRING, DATE, INTEGER, BOOLEAN, TEXT } = app.Sequelize;
  const News = app.model.define(
    "news",
    {
      data_id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      type: INTEGER,
      title: STRING(255),
      content: TEXT,
      enable: BOOLEAN,
      updated_user: INTEGER,
      updated_at: DATE,
      created_user: INTEGER,
      created_at: DATE
    },
    {
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      tableName: "sta_news"
    }
  );

  return News;
};
