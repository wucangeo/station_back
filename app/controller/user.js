const Controller = require("egg").Controller;
class UserController extends Controller {
  async list() {
    const { ctx, service } = this;
    let users = await ctx.service.user.list(ctx.query);
    if (users) {
      this.ctx.body = {
        data: users,
        status: 200
      };
    } else {
      this.ctx.body = {
        status: 400,
        msg: "查询失败"
      };
    }
  }
  async get() {
    const { ctx, service } = this;
    let user_id = ctx.params.user_id;
    let user = await service.user.get(user_id);
    if (user) {
      this.ctx.body = {
        data: user,
        status: 200
      };
    } else {
      this.ctx.body = {
        status: 404,
        msg: "未查询到结果。"
      };
    }
  }
  async create() {
    const { ctx, service } = this;
    var item = ctx.request.body;
    if (!item.username || item.username.trim() == "") {
      this.ctx.body = {
        status: 400,
        msg: "缺少用户名。"
      };
      return;
    }
    if (!item.password) {
      this.ctx.body = {
        status: 400,
        msg: "缺少用户名。"
      };
      return;
    }
    let result = await ctx.service.user.create(item);
    if (result) {
      this.ctx.body = {
        status: 200,
        data: result,
        msg: null
      };
    }
  }
  async login() {
    const { ctx, service } = this;
    let username = ctx.request.body.username,
      password = ctx.request.body.password,
      ip = ctx.request.ip;
    var user = await ctx.service.user.login(username, password);
    if (!user) {
      this.ctx.body = {
        status: 401,
        msg: "账户密码错误。"
      };
      return;
    }
    var token = await ctx.service.token.create(user.id);
    if (!user.enable) {
      this.ctx.body = {
        status: 401,
        msg: "登录失败，账户未验证！"
      };
      return;
    }
    if (!token) {
      this.ctx.body = {
        status: 400,
        msg: "登录失败，服务器内部错误。"
      };
      return;
    }

    var userStr = JSON.stringify(user);
    var userObj = JSON.parse(userStr);
    if (userObj) {
      delete userObj.password;
    }

    userObj["token"] = token;
    this.ctx.body = {
      status: 200,
      msg: "登录成功！",
      data: userObj
    };
  }
  async update() {
    const { ctx, service } = this;
    const user_id = ctx.params.user_id;
    const item = ctx.request.body;
    var result = await service.user.update({ user_id, updates: item });
    if (!result) {
      this.ctx.body = {
        status: 400,
        msg: "未找到用户。"
      };
      return;
    }
    this.ctx.body = {
      status: 200,
      msg: "更新成功",
      data: result
    };
  }
}

module.exports = UserController;
