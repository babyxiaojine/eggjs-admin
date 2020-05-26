'use strict';

const crypto = require('crypto');
module.exports = {
  uuid(str) {
    const md5 = crypto.createHash('md5');
    md5.update(Date.now() + str);
    return md5.digest('hex');
  }
};
