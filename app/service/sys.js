'use strict';
// app/service/user.js
const Service = require('egg').Service;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const crypto = require('crypto');

class SysService extends Service {
  async selectAllUser(query) {
    const { User, Role, UserRole } = this.ctx.model;
    User.belongsToMany(Role,{
      through: 'user_role',
      foreignkey:'userId',
    });
    Role.belongsToMany(User, { through: 'user_role' });
    const whereParams = {}
    if (query.loginName) {
      whereParams.loginName = query.loginName
    }
    if (query.name) {
      whereParams.name = {
        [Op.like]: `%${query.name}%`, 
      }
    }
    if (query.mobile) {
      whereParams.mobile = {
        [Op.like]: `%${query.mobile}%`, 
      }
    }
    const users = User.findAll({
      where: whereParams,
      attributes: ['id', 'loginName', 'enableFlag', 'mobile', 'name', 'shopId', 'createTime'],
      include: [{
        model: Role,
      }],
      limit: query.pageSize || 10,
      offset: query.pageSize * ( query.pageNo - 1 ) || 0,
      order: [
        ['createTime', 'DESC'] 
      ],
    }).then( res => {
      return res;
    }).catch( err => {
      console.log(err);
    })
    
    return users;
  }

  async countAllUser(query) {
    const whereParams = {}
    if (query.loginName) {
      whereParams.loginName = query.loginName
    }
    if (query.name) {
      whereParams.name = query.name
    }
    if (query.mobile) {
      whereParams.mobile = query.mobile
    }
    const { User } = this.ctx.model;
    const total = await User.count({
      where: whereParams,
    });
    return total;
  }

  async selectAllRole() {
    const { model } = this.ctx;
    const res = await model.Role.findAll();
    return res;
  }

  async countAllRole(query) {
    const whereParams = {}
    const { Role } = this.ctx.model;
    const total = await Role.count({
      where: whereParams,
    });
    return total;
  }

  async addUser(data) {
    const { model } = this.ctx;
    let transaction;
    try {
      transaction = await model.transaction();
      const initPassowrd = '123456';
      const createUser = {
        loginName: data.loginName,
        mobile: data.mobile,
        password: crypto.createHash('md5').update(initPassowrd).digest('hex'),
        id: data.id,
        shopId: data.shopId,
        name: data.name,
        userNo: data.loginName,
        createBy: data.createBy,
        updateBy: data.updateBy,
        userType: '1',
        enableFlag: '1',
      };
      await model.User.create(createUser, { transaction });
      const userRoleId = crypto.createHash('md5').update(data.loginName + Date.now()).digest('hex');
      const newUserRole = {
        id: userRoleId,
        roleId: data.enames.join(','),
        createBy: data.createBy,
        userId: data.id,
        updateBy: data.updateBy,
      };
      await model.UserRole.create(newUserRole, { transaction });
      await transaction.commit();
      return true;
    } catch (err) {
      // 事务回滚
      await transaction.rollback();
      return false;
    }
  }

  async updateUser(data) {
    const { model } = this.ctx;
    let transaction;
    try {
      transaction = await model.transaction();
      const createUser = {
        mobile: data.mobile,
        shopId: data.shopId,
        name: data.name,
        updateBy: data.updateBy,
      }
      await model.User.update(createUser, {
        where: {
          id: data.id,
        },
        transaction,
      });
      await model.UserRole.destroy({
        where: {
          userId: data.id,
        },
        transaction,
      });
      const userRoleId = crypto.createHash('md5').update(data.loginName + Date.now()).digest('hex');
      const newUserRole = {
        id: userRoleId,
        roleId: data.enames.join(','),
        createBy: data.updateBy,
        userId: data.id,
        updateBy: data.updateBy,
      }
      await model.UserRole.create(newUserRole,{
        transaction,
      });
      await transaction.commit();
      return true;
    } catch (err) {
      // 事务回滚
      await transaction.rollback();
      return false;
    }
  }
  
  async deleteUser(data) {
    const { model } = this.ctx;
    const oneUser = await model.User.findOne({
      where: {
        id: data.id,
      },
      attributes: ['enableFlag']
    });
    const createUser = {
      enableFlag: oneUser.enableFlag === '1' ? '0' : '1',
      updateBy: data.updateBy,
    }
    await model.User.update(createUser, {
      where: {
        id: data.id,
      },
    });
    return true;
  }  

  async deleteShop(data) {
    const { model } = this.ctx;
    const oneShop = await model.Shop.findOne({
      where: {
        id: data.id,
      },
      attributes: ['enableFlag']
    });
    const currentShop = {
      enableFlag: oneShop.enableFlag === '1' ? '0' : '1',
      updateBy: data.updateBy,
    }
    await model.Shop.update(currentShop, {
      where: {
        id: data.id,
      },
    });
    return true;
  }

  async updateShop(data) {
    const { model } = this.ctx;
    const oneShop = await model.Shop.findOne({
      where: {
        id: data.id,
      },
      attributes: ['enableFlag']
    });
    const currentShop = {
      shopName: data.shopName,
      updateBy: data.updateBy,
    }
    await model.Shop.update(currentShop, {
      where: {
        id: data.id,
      },
    });
    return true;
  }

  async findUserById(data) {
    const { User, UserRole } = this.ctx.model;
    User.hasMany(UserRole);
    const ouser = await User.findOne({
      where: {
        id: data.id,
      },
      attributes: ['id', 'loginName', 'enableFlag', 'mobile', 'name', 'shopId', 'userType'],
      // raw: true,
      include: {
        model: UserRole
      }
    });
    return ouser;
  }

  async selectAllShop() {
    const { model } = this.ctx;
    const res = await model.Shop.findAll();
    return res;
  }

  async selectAllMenu() {
    const { model } = this.ctx;
    const allMenus = await model.Menu.findAll();
    const treeMenus = this.doTreeMenu(allMenus);
    return treeMenus;
  }

  async updateMenu(data) {
    const { model } = this.ctx;
    const menu = await model.Menu.update(data,{
      where: { id: data.id },
    });
    return menu;
  }

  async addMenu(data) {
    const { model } = this.ctx;
    const menu = await model.Menu.create(data);
    return menu;
  }

  async findMenuById(data) {
    const { model } = this.ctx;
    const menu = await model.Menu.findOne({
      id: data.id,
    });
    return menu;
  }

  doTreeMenu(menus) {
    const treeData = [];
    const map = {};
    menus.forEach(item => {
      map[item.id] = item;
    });
    menus.forEach(item => {
      const parent = map[item.parentId];
      if (parent) {
        (parent.subMenu || (parent.subMenu = [])).push(item);
      } else {
        treeData.push(item);
      }
    });
    const SortTreeMenu = this.doSortMenu(treeData);
    return SortTreeMenu;
  }

  doSortMenu(treeData) {
    const newTree = treeData.sort((item1, item2) => {
      if (item2.subMenu) {
        item2.subMenu = this.doSortMenu(item2.subMenu);
      }
      return item1.sort - item2.sort;
    });
    return newTree;
  }

  
  async addShop(data) {
    const { model } = this.ctx;
    const shop = await model.Shop.create(data);
    return shop;
  }

}

module.exports = SysService;
