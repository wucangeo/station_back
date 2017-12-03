module.exports = app => {
  const { STRING, INTEGER, DATE, BOOLEAN, TEXT, DOUBLE } = app.Sequelize;
  const AchvPaper = app.model.define(
    "achv_paper",
    {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      year: INTEGER, //发表年份
      title: STRING(1000), //标题
      journal: STRING(255), //期刊名称
      volume: STRING(255), //年，卷期，页码
      issue_number: STRING(255), //标准刊号
      author: STRING(500), //全部作者
      co_author: STRING(255), //通讯作者
      abstract: TEXT, //摘要
      rank_depart: INTEGER, //单位标注排名
      rank_author: INTEGER, //本单位首位作者排名
      journal_level: STRING(255), //刊物级别：1SCI；2专著；3中文；4其他
      index: DOUBLE, //SCI/SSCI影响因子
      is_coop: INTEGER, //是否为国际合作论文
      file_path: STRING(500), //文件路径
      remark: STRING(255), //备注
      enable: INTEGER,
      created_user: INTEGER,
      updated_at: DATE,
      updated_user: INTEGER,
      created_at: DATE
    },
    {
      underscored: true,
      freezeTableName: true,
      tableName: "sta_achv_paper"
    }
  );

  return AchvPaper;
};
