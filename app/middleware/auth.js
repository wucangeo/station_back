var jwt = require("jsonwebtoken");

module.exports = options => {
  return async function auth(ctx, next) {
    let whiteList = ["/", "/api/v1/user/login"];
    if (whiteList.includes(ctx.path)) {
      await next();
      return;
    }
    let req = ctx.request,
      res = ctx.response;

    var access_token = req.headers["x-access-token"] || req.query.access_token;
    // req.cookies.access_token ;
    if (!access_token) {
      ctx.status = 401;
      ctx.body = {
        code: 0,
        data: null,
        msg: "access_token缺失"
      };
    }
    var decoded = jwt.decode(access_token, { json: true });
    if (!decoded.user_id) {
      ctx.status = 401;
      ctx.body = {
        code: 0,
        data: null,
        msg: "access_token不符合标准。"
      };
    }
    let res_user = await ctx.service.user.get(decoded.user_id, true);
    let user = res_user.data;
    if (!user) {
      ctx.status = 401;
      ctx.body = {
        code: 0,
        data: null,
        msg: "用户不存在"
      };
    }
    if (!user.enable) {
      ctx.status = 401;
      ctx.body = {
        code: 0,
        data: null,
        msg: "用户未认证"
      };
    }
    let res_verify = jwt.verify(access_token, user.salt);
    if (!res_verify) {
      ctx.status = 401;
      ctx.body = {
        code: 0,
        data: null,
        msg: "access_token无效。"
      };
    }

    ctx.user = user;
    await next();

    //用于验证用户的资源权限
    // var authResource = async function(req, res, next) {
    //   let path_arr = req.path.split("/");
    //   if (path_arr.length < 4) {
    //     return;
    //   }
    //   var resourceType = path_arr[3];
    //   switch (resourceType) {
    //     // case "user":
    //     //   return await next;
    //     default:
    // let resss = await next();
    // ctx.body = resss;
    // await next();
    // ctx.status = 401;
    // ctx.body = {
    //   code: 0,
    //   data: null,
    //   msg: "access_token无效。"
    // };
    //   }
    // };

    // if (!this.session.user.username) {
    //   this.redirect("/", "login.index");
    // }
  };
};
