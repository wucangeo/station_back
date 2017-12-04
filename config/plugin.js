"use strict";

// had enabled by egg
// exports.static = true;

exports.sequelize = {
  enable: true,
  package: "egg-sequelize"
};

exports.security = {
  xframe: {
    enable: false
  },
  csrf: {
    // 判断是否需要 ignore 的方法，请求上下文 context 作为第一个参数
    ignore: ctx => {
      isInnerIp(ctx.ip);
    }
  },
  enable: true
};

exports.cors = {
  enable: true,
  package: "egg-cors"
};
