module.exports = app => {
  const { STRING, INTEGER, DATE, BOOLEAN, TEXT, DOUBLE } = app.Sequelize;
  const AchvPatent = app.model.define(
    "achv_patent",
    {
      data_id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      year: INTEGER,// '申请/授权年度',
      title: STRING(255),// '专利名称',
      apply_code: STRING(255),// '申请号',
      apply_date: DATE,// '申请日期',
      patent_no: STRING(255),// '专利号',
      auth_date: DATE,// '授权日期',
      patent_status: STRING(255),// '专利状态 授权/申请',
      patent_type: STRING(255),// '专利类别：实用新型',
      country_org: STRING(255),// '国别/专利组织',
      author: STRING(255),// '专利权人',
      rank_depart: INTEGER,// '本台站所属单位排名',
      co_author: STRING(255),// '全部发明人',
      rank_author: INTEGER,// '本单位首位发明人排序',
      file_path: STRING(255),// '证明材料电子版',

      enable: INTEGER,
      created_user: INTEGER,
      updated_at: DATE,
      updated_user: INTEGER,
      created_at: DATE
    },
    {
      underscored: true,
      freezeTableName: true,
      tableName: "sta_achv_patent"
    }
  );

  return AchvPatent;
};
