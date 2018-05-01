'use strict';
const Controller = require('egg').Controller;
const createRule = {
  userName: { type: 'string', required: true },
  password: { type: 'string', required: true },
};

class UsersController extends Controller {
  async index() {
    const { ctx, service } = this;
    const users = await service.users.index();
    ctx.success(users, '查询用户成功');
  }

  async create() {
    const { ctx, service } = this;
    const user = ctx.request.body;
    ctx.validate(createRule);
    user.password = ctx.helper.md5(user.password);
    const result = await service.users.create(user);
    if (result) ctx.success(result, '新增用户成功'); else ctx.fail('新增用户失败');
  }

  async show() {
    const { ctx, service } = this;
    const user = await service.users.show(ctx.query);
    ctx.success(user, '查询用户成功');
  }

  async login() {
    const { ctx, service } = this;
    const user = ctx.request.body;
    ctx.validate(createRule);
    user.password = ctx.helper.md5(user.password);
    const result = await service.users.login(user);
    if (result) {
      ctx.session.userId = result._id;
      ctx.success(result, '登录成功');
    } else {
      ctx.fail('用户名或密码不正确');
    }
  }

  async logout() {
    const { ctx } = this;
    ctx.session = null;
    if (!ctx.session) {
      ctx.success({}, '退出登录成功');
    } else ctx.fail('退出登录失败');
  }
}

module.exports = UsersController;
