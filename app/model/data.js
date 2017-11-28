module.exports = app => {
  const { STRING, INTEGER, DATE, BOOLEAN, TEXT } = app.Sequelize;
  const Data = app.model.define(
    "data",
    {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: STRING(100),
      stations: STRING(100),
      type: INTEGER,
      format: INTEGER,
      description: TEXT,
      start_date: DATE,
      end_date: DATE,
      position: STRING(255),
      gatherer: STRING(255),
      gatherer_state: STRING(255),
      storage_position: STRING(255),
      contact: STRING(255),
      enable: INTEGER,
      created_user: INTEGER,
      created_time: DATE,
      updated_user: INTEGER,
      updated_time: DATE
    },
    {
      underscored: true,
      freezeTableName: true,
      tableName: "sta_data"
    }
  );

  return Data;
};
