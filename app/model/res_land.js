module.exports = app => {
  const {
    STRING,
    INTEGER,
    DATE,
    BOOLEAN,
    TEXT,
    DOUBLE
  } = app.Sequelize;
  const ResLand = app.model.define(
    "res_land", {
      data_id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      code: STRING(50), // '样地代码',
      name: STRING(255), // '样地名称',
      type: STRING(50), // '样地类型',
      build_year: INTEGER, // '建立日期',
      use_year: INTEGER, // '设计使用年限',
      area: DOUBLE, // '样地面积',
      sharp: STRING(20), // '样地形状',
      ready_to: STRING(255), // '可进行工作',
      desc: STRING(255), // '样地代表性描述',
      property: STRING(255), // '样地性质',
      location: STRING(255), // '位置',
      longitude: DOUBLE, // '经度',
      latitude: DOUBLE, // '纬度',
      altitude: DOUBLE, // '高程',
      soil_type: STRING(255), // '土壤类型',
      topography: STRING(255), // '地形地貌',
      vegetation_type: STRING(255), // '植被类型',
      plant_property: STRING(255), // '植物群落特征',
      manage: STRING(255), // '建立后管理措施',
      is_public: INTEGER, //'是否对外服务',
      remark: STRING(255), // '备注',
      images: JSON, //照片

      enable: INTEGER,
      created_user: INTEGER,
      updated_at: DATE,
      updated_user: INTEGER,
      created_at: DATE
    }, {
      underscored: true,
      freezeTableName: true,
      tableName: "sta_res_land"
    }
  );

  return ResLand;
};