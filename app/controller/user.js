'use strict';
const BaseController = require('../core/base');
class UserController extends BaseController {
  async index() {
    // const { ctx } = this;
    const user = await this.model.User.findOne({ where: { loginName: 'admin' } });
    this.success(user);
  }
  // 登录
  async login() {
    const { ctx, app } = this;
    const reqData = ctx.request.body;
    const userInfo = await ctx.service.user.login(reqData);
    if (!userInfo) {
      this.error('9999', '用户名或密码错误');
      return;
    }
    const token = app.jwt.sign({
      id: userInfo.id,
      loginName: userInfo.loginName,
      timestamp: Date.now(),
    }, app.config.jwt.secret
    , { expiresIn: app.config.jwt.expiresIn });
    userInfo.token = token;
    this.success(userInfo);
  }
  // 获取用户全量信息
  async getUserAll() {
    const { ctx } = this;
    const { userBody } = ctx.request.header;
    const userAll = await ctx.service.user.getUserAll(userBody);
    this.success(userAll);
  }
}

module.exports = UserController;
