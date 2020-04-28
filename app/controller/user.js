'use strict';
const Controller = require('egg').Controller;
class UserController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.model.Base.create({
    //   id:'xxx',
    //   name:'姓名1',
    //   loginName:'21111221',
    //   password:'sss',
    //   userNo:'sss',
    //   createBy:'sss',
    //   userType:'1',
    //   mobile:'sss',
    //   updateBy:'dss',
    //   shopId:'12121',
    //   createTime: '2020-03-25 15:52:57',
    //   updateTime: '2020-03-25 15:52:57',
    // })
    const user = await ctx.model.Base.findOne({ where: { loginName: 'admin' } })
    // const user = await this.app.mysql.get('cmf_user', { user_nickname: 'admin' });
    // console.log(user)
    ctx.body = user;
  }
  // 登录
  async login() {
    const { ctx, app } = this;
    const reqData = ctx.request.body;
    const userInfo = await ctx.service.user.login(reqData);
    if (!userInfo) {
      ctx.body = {
        code: '9999',
        message: '用户名或密码错误',
      };
      return;
    }
    const token = app.jwt.sign({
      id: userInfo.id,
      login_name: userInfo.login_name,
      mobile: userInfo.mobile,
      timestamp: Date.now(),
    }, app.config.jwt.secret
    , { expiresIn: '0.5h' });
    userInfo.token = token;
    ctx.body = {
      data: userInfo,
      code: '0000',
      message: '成功',
    };
  }
  // 获取用户全量信息
  async getUserAll() {
    const { ctx } = this;
    const { userBody } = ctx.request.header;
    const userAll = await ctx.service.user.getUserAll(userBody);
    // console.log(userAll, 'uuuuuuu');
    console.log(11);
    ctx.body = {
      code: '0000',
      data: userAll,
      message: '成功',
    };
  }
}

module.exports = UserController;
