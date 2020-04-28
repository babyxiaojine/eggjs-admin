'use strict';
// app/service/user.js
const Service = require('egg').Service;

class SysService extends Service {

  async selectAllMenu() {
    const { mysql } = this.app;
    const allMenus = await mysql.select('t_menu');
    const treeMenus = this.doTreeMenu(allMenus);
    return treeMenus;
  }

  async updateMenu(data) {
    const { mysql } = this.app;
    const allMenus = await mysql.update('t_menu', data);
    return allMenus;
  }

  async findMenuById(data) {
    const { mysql } = this.app;
    const menu = await mysql.get('t_menu', data);
    return menu;
  }

  doTreeMenu(menus) {
    const treeData = [];
    const map = {};
    menus.forEach(item => {
      item.showFlag = item.show_flag;
      map[item.id] = item;
    });
    menus.forEach(item => {
      const parent = map[item.parent_id];
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
      if (item1.subMenu) {
        item1.subMenu = this.doSortMenu(item1.subMenu);
      }
      return item1.sort - item2.sort;
    });
    return newTree;
  }
}

module.exports = SysService;
