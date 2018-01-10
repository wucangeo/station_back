module.exports = app => {
  const { STRING, INTEGER, DATE, BOOLEAN, TEXT, DOUBLE } = app.Sequelize;
  const AchvMonography = app.model.define(
    "achv_monography",
    {
      data_id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      year: INTEGER, // 发表年份
      title: STRING(1000), // 标题
      pub_type: STRING(255), // 出版类别:1国内出版-中文;2?
      categories: STRING(255), // 著作类别：1专著；2？
      word_count: INTEGER, //'总字数（千）',
      press: STRING(255), // 出版社
      book_number: STRING(255), // 书号（如 978-7-03-045836-0)
      pub_date: STRING(50),//出版时间
      rank_depart: INTEGER, //   单位排名
      author: STRING(255), // 封面作者
      rank_author: INTEGER, // 本单位首位作者排名
      co_author: STRING(500), // 章节作者
      certified_path: STRING(500), // 著作首页、版权页及章节作者证明页电子版

      enable: INTEGER,
      created_user: INTEGER,
      updated_at: DATE,
      updated_user: INTEGER,
      created_at: DATE
    },
    {
      underscored: true,
      freezeTableName: true,
      tableName: "sta_achv_monography"
    }
  );

  return AchvMonography;
};
