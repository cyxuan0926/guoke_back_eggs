'use strict';
const Controller = require('egg').Controller;
const indexRule = {
  page: { type: 'number', required: false },
  rows: { type: 'nubmer', required: false },
};
const createRule = {
  title: { type: 'string', required: true },
  url: { type: 'string', required: true },
};

class NavigationController extends Controller {
  /**
 * @api {get} /navigation 分页查询导航栏
 * @apiName navigation
 * @apiGroup Navigation
 *
 * @apiParam {Integer} page 起始页
 * @apiParam {Integer} rows 每页条数
 * @apiParam {String} title 导航标题
 *
 * @apiSuccess {ObjectId} _id 导航id
 * @apiSuccess {String} title 导航标题
 * @apiSuccess {String} url 导航地址
 * @apiSuccess {Date} createdAt 导航创建时间
 * @apiSuccess {Date} updatedAt 导航修改时间
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 200,
 *       msg: '查询导航栏成功',
 *       data: {
 *          navigation: [{
 *             _id: '5tret4656557frt466',
 *             title: '首页',
 *             url: '/index',
 *             createdAt: '2018-5-2 0:0:0',
 *             updatedAt: '2018-5-2 0:0:0'
 *          }],
 *          total: 1
 *       }
 *     }
 *
 * @apiError 500 查询导航栏失败
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 500,
 *       msg: '查询导航栏失败'
 *     }
 */
  async index() {
    const { ctx, service } = this;
    ctx.validator.validate(indexRule, ctx.query);
    const result = await service.navigation.index(ctx.query);
    if (result) ctx.success(result, '查询导航栏成功'); else ctx.fail('查询导航栏失败');
  }

  /**
 * @api {post} /navigation 新增导航
 * @apiName navigation/new
 * @apiGroup Navigation
 *
 * @apiParam {String} title 导航标题
 * @apiParam {String} url 导航地址
 *
 * @apiSuccess {ObjectId} _id 导航id
 * @apiSuccess {String} title 导航标题
 * @apiSuccess {String} url 导航地址
 * @apiSuccess {Date} createdAt 导航创建时间
 * @apiSuccess {Date} updatedAt 导航修改时间
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 200,
 *       msg: '新增导航成功',
 *       data: {
 *        _id: '5tret4656557frt466',
 *        title: '首页',
 *        url: '/index',
 *        createdAt: '2018-5-2 0:0:0',
 *        updatedAt: '2018-5-2 0:0:0'
 *       }
 *     }
 *
 * @apiError 500 新增导航失败
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 500,
 *       msg: '新增导航失败'
 *     }
 */
  async create() {
    const { ctx, service } = this;
    ctx.validate(createRule);
    const navigation = await service.navigation.create(ctx.request.body);
    if (navigation) ctx.success(navigation, '新增导航成功'); else ctx.fail('新增导航失败');
  }

  /**
 * @api {put} /navigation/:id 修改导航
 * @apiName navigation/update
 * @apiGroup Navigation
 *
 * @apiParam {ObjectId} id 导航id required
 * @apiParam {String} title 导航标题
 * @apiParam {String} url 导航地址
 *
 * @apiSuccess {ObjectId} _id 导航id
 * @apiSuccess {String} title 导航标题
 * @apiSuccess {String} url 导航地址
 * @apiSuccess {Date} createdAt 导航创建时间
 * @apiSuccess {Date} updatedAt 导航修改时间
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 200,
 *       msg: '修改导航成功',
 *       data: {
 *        _id: '5tret4656557frt466',
 *        title: '首页',
 *        url: '/index',
 *        createdAt: '2018-5-2 0:0:0',
 *        updatedAt: '2018-5-2 0:0:0'
 *       }
 *     }
 *
 * @apiError 500 修改导航失败
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 500,
 *       msg: '修改导航失败'
 *     }
 */
  async update() {
    const { ctx, service } = this;
    const result = await service.navigation.update(ctx.query, ctx.reques.body);
    if (result) ctx.success(result, '修改导航成功'); else ctx.fail('修改导航失败');
  }

  /**
 * @api {delete} /navigation/:id 删除导航
 * @apiName navigation/delete
 * @apiGroup Navigation
 *
 * @apiParam {ObjectId} id 导航id required
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 200,
 *       msg: '删除导航成功',
 *       data: {}
 *     }
 *
 * @apiError 500 删除导航失败
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 500,
 *       msg: '删除导航失败'
 *     }
 */
  async destroy() {
    const { ctx, service } = this;
    const result = await service.navigation.destroy(ctx.query);
    if (result) ctx.success({}, '删除导航成功'); else ctx.fail('删除导航失败');
  }

  /**
 * @api {get} /navigation/list 查询所有导航栏
 * @apiName navigation/list
 * @apiGroup Navigation
 *
 * @apiSuccess {ObjectId} _id 导航id
 * @apiSuccess {String} title 导航标题
 * @apiSuccess {String} url 导航地址
 * @apiSuccess {Date} createdAt 导航创建时间
 * @apiSuccess {Date} updatedAt 导航修改时间
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 200,
 *       msg: '查询导航栏成功',
 *       data: [{
 *        _id: '5tret4656557frt466',
 *        title: '首页',
 *        url: '/index',
 *        createdAt: '2018-5-2 0:0:0',
 *        updatedAt: '2018-5-2 0:0:0'
 *       }]
 *     }
 *
 * @apiError 500 查询导航栏失败
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 500,
 *       msg: '查询导航栏失败'
 *     }
 */
  async list() {
    const { ctx, service } = this;
    const navigation = await service.navigation.list();
    if (navigation) ctx.success(navigation, '查询导航成功'); else ctx.fail('查询导航失败');
  }
}

module.exports = NavigationController;
