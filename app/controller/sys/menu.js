'use strict';
const BaseController = require('../../core/base');
class SysMenuController extends BaseController {
  // 查询菜单
  async queryAllMenu() {
    const { ctx } = this;
    const allMenu = await ctx.service.sys.selectAllMenu();
    this.success(allMenu);
  }
  // 修改菜单
  async updateMenu() {
    const { ctx, user } = this;
    const { body } = ctx.request;
    body.updateBy = user.loginName;
    const allMenu = await ctx.service.sys.updateMenu(body);
    this.success(allMenu);
  }
  // 新增菜单
  async addMenu() {
    const { ctx, user } = this;
    const { body } = ctx.request;
    const uuid = ctx.helper.uuid(user.id);
    body.id = uuid;
    body.createBy = user.loginName;
    body.updateBy = user.loginName;
    body.parentId = body.parentId || '0';
    const allMenu = await ctx.service.sys.addMenu(body);
    this.success(allMenu);
  }

  // 查询菜单byId
  async findMenuById() {
    const { ctx } = this;
    const { body } = ctx.request;
    const menu = await ctx.service.sys.findMenuById(body);
    this.success(menu);
  }

}

module.exports = SysMenuController;
