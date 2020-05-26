'use strict';
const BaseController = require('../../core/base');
class SysUserController extends BaseController {
  // 查询用户
  async loadAllUser() {
    const { ctx } = this;
    const { body } = ctx.request;
    const allUser = await ctx.service.sys.selectAllUser(body);
    const userList = allUser.map( item => {
      const userItem = {
        id: item.id,
        loginName: item.loginName,
        enableFlag: item.enableFlag,
        mobile: item.mobile,
        name: item.name,
        shopId: item.shopId,
      };
      if (item.roles && item.roles[0]) {
        userItem.roleName = item.roles[0].name
      }
      return userItem;
    });
    const total = await ctx.service.sys.countAllUser(body);
    this.success({
      list: userList,
      total,
    });
  }
  // 修改菜单
  async updateMenu() {
    const { ctx } = this;
    const { body } = ctx.request;
    // body.updateTime = new Date().toLocaleString()
    const allMenu = await ctx.service.sys.updateUser(body);
    this.success(allMenu);
  }
  // 新增用户
  async addUser() {
    const { ctx } = this;
    const { body } = ctx.request;
    const { userBody } = ctx.request.header;
    const uuid = ctx.helper.uuid(userBody.id);
    body.id = uuid;
    body.createBy = userBody.loginName;
    body.updateBy = userBody.loginName;
    // body.parentId = body.parentId || '0';
    const oneUser = await ctx.service.sys.addUser(body);
    this.success(oneUser);
  }

  // 修改用户
  async updateUser() {
    const { ctx } = this;
    const { body } = ctx.request;
    const { userBody } = ctx.request.header;
    body.updateBy = userBody.loginName;
    // body.parentId = body.parentId || '0';
    const oneUser = await ctx.service.sys.updateUser(body);
    if (oneUser) {
      this.success(oneUser);
    } else {
      this.error('9999','用户信息更新错误');
    }
  }

  // 删除用户
  async deleteUser() {
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
    // body.parentId = body.parentId || '0';
    const oneUser = await ctx.service.sys.deleteUser(body);
    if (oneUser) {
      this.success(oneUser);
    } else {
      this.error('9999','用户信息更新错误');
    }
  }


  // 查询用户
  async findUserById() {
    const { ctx } = this;
    const query = ctx.query;
    const User = await ctx.service.sys.findUserById(query);
    const userData = User.toJSON();
    userData.enames = userData.userRoles.map( item => {
      return item.roleId;
    });
    this.success(userData);
  }

}

module.exports = SysUserController;
