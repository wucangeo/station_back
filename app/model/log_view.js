module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const LogView = app.model.define(
    "log_view",
    {
      data_id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: INTEGER, //'用户id',
      user_ip: STRING(100), //'用户IP',
      country: STRING(255), //'国家',
      province: STRING(255), //'省',
      city: STRING(255), //'市',
      view_url: STRING(500), //'访问url',
      view_params: STRING(255), //'访问参数',
      method: STRING(255), //'方法：get post patch delete',

      created_at: DATE
    },
    {
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      tableName: "sta_log_view"
    }
  );

  return LogView;
};
