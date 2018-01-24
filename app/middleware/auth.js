const jwt = require("jsonwebtoken");
const utils = require("../utils");
const quertString = require("querystring");

module.exports = options => {
  return async function auth(ctx, next) {
    //排除例外
    let whiteList = ["/", "/api/v1/user/login", "/api/v1/user/register"];
    let pathArr = ctx.path.split("/");
    console.log(pathArr);
    if (
      (pathArr.length === 2 && pathArr[1] === "") ||
      (pathArr.length > 2 && pathArr[1] === "public") ||
      (pathArr.length === 5 &&
        (pathArr[4] === "login" || pathArr[4] === "register"))
    ) {
      console.log(pathArr);
      await next();
      return;
    }
    //处理权限
    let req = ctx.request,
      res = ctx.response;
    var access_key = req.query.access_key;
    var access_token = req.headers["x-access-token"] || req.query.access_token;
    if (!access_token && !access_key) {
      ctx.status = 401;
      ctx.body = {
        code: 0,
        data: null,
        msg: "access_token缺失"
      };
      return;
    }
    let user_id = 0;
    let user = {
      data_id: -1,
      name: "guest",
      enable: 1
    };
    if (access_key) {
      user_id = utils.decrypt(access_key, "soil");
      if (!user_id || parseFloat(user_id) >= 0) {
        ctx.status = 401;
        ctx.body = {
          code: 0,
          data: null,
          msg: "access_token无效。"
        };
        return;
      }
      user.data_id = parseFloat(user_id);
    } else {
      var decoded = jwt.decode(access_token, { json: true });
      if (!decoded || !decoded.user_id) {
        ctx.status = 401;
        ctx.body = {
          code: 0,
          data: null,
          msg: "access_token无效。"
        };
        return;
      }
      user_id = decoded.user_id;
      let res_user = await ctx.service.user.get(decoded.user_id, true);
      user = res_user.data;
      if (!user) {
        ctx.status = 401;
        ctx.body = {
          code: 0,
          data: null,
          msg: "用户不存在"
        };
        return;
      }
      try {
        jwt.verify(access_token, user.salt);
      } catch (err) {
        ctx.status = 401;
        ctx.body = {
          code: 0,
          data: err,
          msg: "access_token无效。"
        };
        return;
      }
      if (user.enable === 0) {
        ctx.status = 401;
        ctx.body = {
          code: 0,
          data: null,
          msg: "用户未认证"
        };
        return;
      }
    }

    //访问记录
    if (!["/api/v1/user/verify"].includes(ctx.request.path)) {
      ctx.service.logView.logView(user_id);
    }

    ctx.user = user;
    await next();
  };
};
