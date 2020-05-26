'use strict';
const BaseController = require('../../core/base');
class SysRoleController extends BaseController {
  // 查询用户
  async loadAllRole() {
    const { ctx } = this;
    const roles = await ctx.service.sys.selectAllRole();
    const total = await ctx.service.sys.countAllRole();
    this.success({
      list: roles,
      total,
    });
  }
  // 修改菜单
  // async updateMenu() {
  //   const { ctx } = this;
  //   const { body } = ctx.request;
  //   // body.updateTime = new Date().toLocaleString()
  //   const allMenu = await ctx.service.sys.updateMenu(body);
  //   this.success(allMenu);
  // }
  // // 新增菜单
  // async addMenu() {
  //   const { ctx } = this;
  //   const { body } = ctx.request;
  //   const { userBody } = ctx.request.header;
  //   const uuid = ctx.helper.uuid(userBody.id);
  //   body.id = uuid;
  //   body.createBy = userBody.loginName;
  //   body.updateBy = userBody.loginName;
  //   body.parentId = body.parentId || '0';
  //   const allMenu = await ctx.service.sys.addMenu(body);
  //   this.success(allMenu);
  // }

  // 修改菜单
  // async findMenuById() {
  //   const { ctx } = this;
  //   const { body } = ctx.request;
  //   const menu = await ctx.service.sys.findMenuById(body);
  //   this.success(menu);
  // }

}

module.exports = SysRoleController;
