module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;
  const ProjectType = app.model.define(
    "project_type",
    {
      data_id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: STRING(255),//'项目类型名称',
      type: INTEGER,// '类型编号',
    },
    {
      underscored: true,
      timestamps: false,
      freezeTableName: true,
      tableName: "sta_project_type"
    }
  );

  return ProjectType;
};
