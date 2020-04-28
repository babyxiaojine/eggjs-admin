'use strict';
const Controller = require('egg').Controller;
class SysMenuController extends Controller {
  // 查询菜单
  async queryAllMenu() {
    const { ctx } = this;
    const allMenu = await ctx.service.sys.selectAllMenu();
    ctx.body = {
      code: '0000',
      data: allMenu,
    };
  }
  // 修改查单
  async updateMenu() {
    const { ctx } = this;
    const { body } = ctx.request;
    const allMenu = await ctx.service.sys.updateMenu(body);
    ctx.body = {
      code: '0000',
      data: allMenu,
    };
  }
  // 修改查单
  async findMenuById() {
    const { ctx } = this;
    const { body } = ctx.request;
    const menu = await ctx.service.sys.findMenuById(body);
    ctx.body = {
      code: '0000',
      data: menu,
    };
  }

}

module.exports = SysMenuController;
