module.exports = app => {
  const { STRING, INTEGER, DATE, BOOLEAN, TEXT, DOUBLE } = app.Sequelize;
  const Project = app.model.define(
    "project",
    {
      data_id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: STRING(255),//'课题名称',
      author: STRING(500),// '课题负责人',
      type: INTEGER,//科技部项目；基金委项目；中科院项目；其他部委项目；地方项目；其他项目；
      project_level: STRING(255),// '课题级别',
      project_funds: STRING(255),// '课题总经费',
      project_depart: STRING(255),// '课题所属项目来源部门',
      project_type: STRING(255),// '课题所属项目类型',
      start_date: DATE,// ' 起始日期',
      end_date: DATE,// '结束日期',
      project_status: STRING(255),// ' 新增/在研/结题',
      finish_year: INTEGER,// '结题年份',
      fillin_year: INTEGER,// '填报年份',

      enable: INTEGER,
      created_user: INTEGER,
      updated_at: DATE,
      updated_user: INTEGER,
      created_at: DATE
    },
    {
      underscored: true,
      freezeTableName: true,
      tableName: "sta_project"
    }
  );

  return Project;
};
