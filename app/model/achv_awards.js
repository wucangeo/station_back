module.exports = app => {
  const { STRING, INTEGER, DATE, BOOLEAN, TEXT, DOUBLE } = app.Sequelize;
  const AchvAwards = app.model.define(
    "achv_awards",
    {
      data_id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      year: INTEGER,//'授予年度',
      title: STRING(255),//'获奖项目名称',
      awards_type: STRING(255),//'奖项类别',
      awards_class: STRING(255),//'获奖等级',
      awards_level: STRING(255),//'获奖级别',
      awards_depart: STRING(255),//'获奖单位',
      awards_year: STRING(255),//'获奖年份',
      awards_oneorgroup: STRING(255),///个人奖项',
      author: STRING(500),//'全部完成单位',
      rank_depart: INTEGER,//'本单位排名',
      co_author: STRING(255),//'全部完成人',
      rank_author: INTEGER,//'本单位首位完成人排名',
      remark: STRING(500),//'备注',
      file_path: STRING(255),//'证明材料电子版',

      enable: INTEGER,
      created_user: INTEGER,
      updated_at: DATE,
      updated_user: INTEGER,
      created_at: DATE
    },
    {
      underscored: true,
      freezeTableName: true,
      tableName: "sta_achv_awards"
    }
  );

  return AchvAwards;
};
