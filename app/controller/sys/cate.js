'use strict';
const BaseController = require('../../core/base');
const fs = require('fs')
const routerSpace = require('../../cache/routerSpace.js');
class SysCateController extends BaseController {
  // 查询菜单
  async queryAllCate() {
    const { ctx } = this;
    const allCate = await ctx.service.sys.selectAllCate();
    this.success(allCate);
  }
  // 修改菜单
  async updateCate() {
    const { ctx, user } = this;
    const { body } = ctx.request;
    body.updateBy = user.loginName;
    if(!body.name.trim()){
      return this.error('9999','请输入标题')
    }
    const allCate = await ctx.service.sys.updateCate(body);
    // if(body.href_alias){
    //   const routerJson = JSON.stringify(
    //     [...routerSpace,
    //       {
    //         name: body.href_alias,
    //         type: 'get',
    //         controller: 'sys.user.findUserById'
    //       }
    //   ],null,'\t')
    //   fs.writeFile('app/cache/routerSpace.js',`'use strict'; \nmodule.exports = ${routerJson}`, 'utf8',function(err){
    //     if(err) return console.log(err)
    //   })
    // }
    this.success(allCate);
  }
  // 新增菜单
  async addCate() {
    const { ctx, user } = this;
    const { body } = ctx.request;
    // const uuid = ctx.helper.uuid(user.id);
    // body.id = uuid;
    body.createBy = user.loginName;
    body.updateBy = user.loginName;
    body.parentId = body.parentId || '0';
    const allCate = await ctx.service.sys.addCate(body);
    this.success(allCate);
  }

  // 查询菜单byId
  async findCateById() {
    const { ctx } = this;
    const {query: body} = ctx;
    const cate = await ctx.service.sys.findCateById(body);
    this.success(cate);
  }

}

module.exports = SysCateController;
