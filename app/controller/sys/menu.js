'use strict';
const BaseController = require('../../core/base');
const fs = require('fs')
const routerSpace = require('../../cache/routerSpace.js');
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
    if(!body.name.trim()){
      return this.error('9999','请输入标题')
    }
    const allMenu = await ctx.service.sys.updateMenu(body);
    if(body.href_alias){
      const routerJson = JSON.stringify(
        [...routerSpace,
          {
            name: body.href_alias,
            type: 'get',
            controller: 'sys.user.findUserById'
          }
      ],null,'\t')
      fs.writeFile('app/cache/routerSpace.js',`'use strict'; \nmodule.exports = ${routerJson}`, 'utf8',function(err){
        if(err) return console.log(err)
      })
    }
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
    console.log(body)
    const allMenu = await ctx.service.sys.addMenu(body);
    this.success(allMenu);
  }

  // 查询菜单byId
  async findMenuById() {
    const { ctx } = this;
    const {query: body} = ctx;
    console.log(body)
    const menu = await ctx.service.sys.findMenuById(body);
    this.success(menu);
  }

}

module.exports = SysMenuController;
