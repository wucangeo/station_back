const uuidv4 = require("uuid/v4");
const Service = require("egg").Service;

class Token extends Service {
  async get(token) {
    var query = {
      where: {
        token: token,
        last_access: {
          $gt: new Date(new Date() - 7 * 24 * 60 * 60 * 1000)
        }
      }
    };
    const verify = await this.ctx.model.Token.findOne(query);
    return verify ? true : false;
  }
  async create(user_id) {
    // var preToken = "geoc_" + user.username + "_" + ip;
    let token = uuidv4();
    var verify = {
      token: token,
      user_id: user_id
    };
    let result = await this.ctx.model.Token.create(verify, {
      returning: true
    });
    if (result) {
      return result.token;
    } else {
      return null;
    }
  }
  async update(token) {
    var query = {
      last_access: new Date()
    };
    var options = {
      where: {
        token: token
      }
    };
    let result = await this.ctx.model.Token.update(query);
  }
}
module.exports = Token;
