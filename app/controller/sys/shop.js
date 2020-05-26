'use strict';
const BaseController = require('../../core/base');
class SysShopController extends BaseController {
  // 查询用户
  async loadAllShop() {
    const { ctx } = this;
    const shops = await ctx.service.sys.selectAllShop();
    this.success(shops);
  }
  // 修改菜单
  // async updateMenu() {
  //   const { ctx } = this;
  //   const { body } = ctx.request;
  //   // body.updateTime = new Date().toLocaleString()
  //   const allMenu = await ctx.service.sys.updateMenu(body);
  //   this.success(allMenu);
  // }
  // 新增店铺
  async addShop() {
    const { ctx } = this;
    const { body } = ctx.request;
    const { userBody } = ctx.request.header;
    const uuid = ctx.helper.uuid(userBody.id);
    body.id = uuid;
    body.createBy = userBody.loginName;
    body.updateBy = userBody.loginName;
    body.enableFlag = '1';
    const allShop = await ctx.service.sys.addShop(body);
    this.success(allShop);
  }

  // 删除店铺
  async deleteShop() {
    const { ctx } = this;
    let { body } = ctx.request;
    const query = ctx.query;
    const { userBody } = ctx.request.header;
    body.updateBy = userBody.loginName;
    body = {
      ...body,
      ...query,
      updateBy: userBody.loginName,
    }
    const oneUser = await ctx.service.sys.deleteShop(body);
    if (oneUser) {
      this.success(oneUser);
    } else {
      this.error('9999','店铺信息更新错误');
    }
  }

  // 修改店铺
  async updateShop() {
    const { ctx } = this;
    let { body } = ctx.request;
    const query = ctx.query;
    const { userBody } = ctx.request.header;
    body.updateBy = userBody.loginName;
    body = {
      ...body,
      ...query,
      updateBy: userBody.loginName,
    }
    const oneUser = await ctx.service.sys.updateShop(body);
    if (oneUser) {
      this.success(oneUser);
    } else {
      this.error('9999','店铺信息更新错误');
    }
  }

}

module.exports = SysShopController;
