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

  /**
 * @api {post} /login 用户登录
 * @apiName login
 * @apiGroup Users
 *
 * @apiParam {String} userName 用户名.
 * @apiParam {String} password 用户密码.
 *
 * @apiSuccess {ObjectId} _id 用户id.
 * @apiSuccess {String} userName 用户名.
 * @apiSuccess {Date} createdAt 用户创建时间.
 * @apiSuccess {Date} updatedAt 用户修改时间.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 200,
 *       msg: '用户登录成功',
 *       data: {
 *        _id: '5tret4656557frt466',
 *        userName: 'admin',
 *        createdAt: '2018-5-2 0:0:0',
 *        updatedAt: '2018-5-2 0:0:0'
 *       }
 *     }
 *
 * @apiError 500 用户名或者密码不正确.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       code: 500,
 *       msg: '用户名或者密码不正确'
 *     }
 */
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
