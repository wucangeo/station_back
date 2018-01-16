module.exports = app => {
  const { STRING, DATE, INTEGER, BOOLEAN, TEXT } = app.Sequelize;
  const Station = app.model.define(
    "station",
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
      tableName: "sta_station"
    }
  );

  //关联
  Station.associate = function() {
    Station.belongsTo(app.model.User, {
      foreignKey: "created_user",
      as: "user_created"
    });
    Station.belongsTo(app.model.User, {
      foreignKey: "updated_user",
      as: "user_updated"
    });
  };

  return Station;
};
