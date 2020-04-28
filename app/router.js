'use strict';
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('user', '/user', controller.user.index);
  // router.post('/user/login', controller.user.login);
  // router.post('/user/getUserAll', controller.user.getUserAll);
  // router.post('/sys/menu/queryAllMenu', controller.sys.menu.queryAllMenu);
  // router.post('/sys/menu/updateMenu', controller.sys.menu.updateMenu);
  // router.get('/sys/menu/findMenuById', controller.sys.menu.findMenuById);
};
