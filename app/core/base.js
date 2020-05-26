'use strict';
const Controller = require('egg').Controller;

class BaseController extends Controller {
  get user() {
    return this.ctx.request.header.userBody;
  }
  get model() {
    return this.ctx.model;
  }
  success(data) {
    this.ctx.body = {
      code: '0000',
      data,
    };
  }
  error(code, message, data) {
    this.ctx.body = {
      code,
      message,
      data,
    };
  }
}

module.exports = BaseController;
