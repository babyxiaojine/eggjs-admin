'use strict';
// app/service/user.js
const Service = require('egg').Service;
const crypto = require('crypto');

class UserService extends Service {
  async find(userData) {
    const user = await this.ctx.model.User.findOne({
      where: userData,
      raw: true,
    });
    return user;
  }
  async login(userData) {
    const loginData = {
      password: crypto.createHash('md5').update(userData.password).digest('hex'),
      login_name: userData.loginName,
    };
    const user = await this.find(loginData);
    return user;
  }
  async getUserAll(userData) {
    const {model} = this.ctx;
    const user = await this.find(userData);
    const roles = await model.UserRole.findAll({ 
      attributes: ['id','userId','roleId'],
      where: {userId: user.id},
      raw: true,
    });
    let userMenus = {};
    const isAdmin = roles.find(item => item.roleId === '6ce321acdb88416ca81f2942a0f96a93');
    if (isAdmin) {
      userMenus = await model.Menu.findAll({ raw: true });
    } else {
      const roleIdList = roles.map(item => item.roleId);
      const roleMenus = await mysql.select('t_role_menu', { 
        where: { roleId: roleIdList },
        raw: true,
      });
      const roleMenusList = roleMenus.reduce((preVal, item) => {
        if (preVal.indexOf(item.menuId) < 0) {
          preVal.push(item.menuId);
        }
        return preVal;
      }, []);
      userMenus = await mysql.select('t_menu', { 
        where: { id: roleMenusList },
        raw: true,
      });
    }

    const treeMenus = this.ctx.service.sys.doTreeMenu(userMenus);

    const shops = await model.Shop.findAll({ raw: true });
    const userAll = {
      menus: treeMenus,
      authorities: [],
      enames: [],
      id: user.id,
      loginName: user.login_name,
      mobile: user.mobile,
      name: user.name,
      shopId: '',
      shops,
      userType: '1',
    };
    return userAll;
  }

}

module.exports = UserService;
