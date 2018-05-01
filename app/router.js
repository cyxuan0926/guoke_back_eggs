'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 登录
  router.post('/login', controller.users.login);
  // 退出登录
  router.post('/logout', controller.users.logout);
  // 用户路由
  router.resources('users', '/users', controller.users);
};
