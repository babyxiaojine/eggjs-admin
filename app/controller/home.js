'use strict';
const Vue = require('vue')
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const user = await this.app.mysql.get('cmf_user', { user_nickname: 'admin' });
    const app = new Vue({
      data: {
        url: 'ss',
      },
      template: '<div>访问的 URL 是： {{ url }}</div>',
    });
    console.log(user)
    ctx.body = user;
  }
}

module.exports = HomeController;
