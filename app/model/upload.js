module.exports = app => {
  const { STRING, DATE, INTEGER, BOOLEAN } = app.Sequelize;
  const Upload = app.model.define(
    "upload",
    {
      data_id: {
        type: INTEGER,
        primaryKey: true
      },
      name: STRING(500),
      size: INTEGER,
      path: STRING(500),
      ext: STRING(50),
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
      tableName: "sta_upload"
    }
  );

  return Upload;
};
