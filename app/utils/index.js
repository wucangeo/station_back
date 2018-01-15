const crypto = require("crypto");
module.exports = {
  //加密
  encrypt: function(data, key) {
    let cipher = crypto.createCipher("aes192", key);
    let crypted = cipher.update(data, "utf8", "hex");
    crypted += cipher.final("hex");
    return crypted;
  },
  //解密
  decrypt: function(encrypted, key) {
    let decipher = crypto.createDecipher("aes192", key);
    let decrypted = decipher.update(encrypted, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
  }
};
