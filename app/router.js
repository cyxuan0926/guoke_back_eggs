'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const upload = app.middleware.multer();// 上传文件中间件
  // 登录
  router.post('/login', controller.users.login);
  // 退出登录
  router.post('/logout', controller.users.logout);
  // 修改密码
  router.post('/resetPwd', controller.users.resetPwd);
  // 用户注册
  router.post('/register', controller.users.register);
  // 用户路由
  router.resources('users', '/users', controller.users);
  // 上传文件
  router.post('/upload', upload.single('file'), controller.upload.uploadFile);
  // 导航管理
  router.resources('navigation', '/navigation', controller.navigation);
  // 获取所有导航数据
  router.get('/navigation/list', controller.navigation.list);
  // Banner管理
  router.resources('banner', '/banner', controller.banner);
};
