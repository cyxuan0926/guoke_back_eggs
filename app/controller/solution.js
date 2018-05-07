'use strict';
const Controller = require('egg').Controller;
const createRule = {
  title: 'string',
  url: 'string',
  imgUrl: 'string',
};

class SolutionController extends Controller {
  /**
 * @api {get} /solution 分页查询解决方案
 * @apiName solution
 * @apiGroup Solution
 *
 * @apiParam {Int} page 起始页
 * @apiParam {Int} rows 每页条数
 * @apiParam {String} title 解决方案标题
 *
 * @apiSuccess {ObjectId} _id 解决方案id
 * @apiSuccess {String} title 解决方案标题
 * @apiSuccess {String} description 解决方案描述
 * @apiSuccess {String} imgUrl 图片路径
 * @apiSuccess {String} url 解决方案地址
 * @apiSuccess {Date} createdAt 解决方案创建时间
 * @apiSuccess {Date} updatedAt 解决方案修改时间
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 200,
 *       msg: '查询解决方案成功',
 *       data: {
 *          solution: [{
 *             _id: '5tret4656557frt466',
 *             title: '企业移动平台APP开发',
 *             description: '专注APP开发三十年',
 *             url: '/solution',
 *             imgUrl: 'public/upload/2018-5-2/default.jpg',
 *             createdAt: '2018-5-2 0:0:0',
 *             updatedAt: '2018-5-2 0:0:0'
 *          }],
 *          total: 1
 *       }
 *     }
 *
 * @apiError 500 查询解决方案失败
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 500,
 *       msg: '查询解决方案失败'
 *     }
 */
  async index() {
    const { ctx, service } = this;
    const query = ctx.query;
    const result = await service.solution.index(query);
    if (result) ctx.success(result, '查询解决方案成功'); else ctx.fail('查询解决方案失败');
  }

  /**
 * @api {post} /solution 新增解决方案
 * @apiName solution/new
 * @apiGroup Solution
 *
 * @apiParam {String} title 解决方案标题 required
 * @apiParam {String} description 解决方案描述
 * @apiParam {String} url 解决方案地址 required
 * @apiParam {String} imgUrl 图片路径 required
 *
 * @apiSuccess {ObjectId} _id 解决方案id
 * @apiSuccess {String} title 解决方案标题
 * @apiSuccess {String} description 解决方案描述
 * @apiSuccess {String} url 解决方案地址
 * @apiSuccess {String} imgUrl 图片路径
 * @apiSuccess {Date} createdAt 解决方案创建时间
 * @apiSuccess {Date} updatedAt 解决方案修改时间
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 200,
 *       msg: '新增解决方案成功',
 *       data: {
 *        _id: '5tret4656557frt466',
 *        title: '企业移动平台APP开发',
 *        description: '专注APP开发三十年',
 *        url: '/solution',
 *        imgUrl: 'public/upload/2018-5-2/default.jpg',
 *        createdAt: '2018-5-2 0:0:0',
 *        updatedAt: '2018-5-2 0:0:0'
 *       }
 *     }
 *
 * @apiError 500 新增解决方案失败
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 500,
 *       msg: '新增解决方案失败'
 *     }
 */
  async create() {
    const { ctx, service } = this;
    ctx.validate(createRule);
    const solution = await service.solution.create(ctx.request.body);
    if (solution) ctx.success(solution, '新增解决方案成功'); else ctx.fail('新增解决方案失败');
  }

  /**
 * @api {put} /solution/:id 修改解决方案
 * @apiName solution/update
 * @apiGroup Solution
 *
 * @apiParam {String} title 解决方案标题 required
 * @apiParam {String} url 解决方案地址 required
 * @apiParam {String} description 解决方案描述
 * @apiParam {String} imgUrl 图片路径 required
 *
 * @apiSuccess {ObjectId} _id 解决方案id
 * @apiSuccess {String} title 解决方案标题
 * @apiSuccess {String} url 解决方案地址
 * @apiSuccess {String} description 解决方案描述
 * @apiSuccess {String} imgUrl 图片路径
 * @apiSuccess {Date} createdAt 解决方案创建时间
 * @apiSuccess {Date} updatedAt 解决方案修改时间
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 200,
 *       msg: '修改解决方案成功',
 *       data: {
 *         "ok": 1,
 *         "nModified": 1,
 *         "n": 1
 *       }
 *     }
 *
 * @apiError 500 修改解决方案失败
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 500,
 *       msg: '修改解决方案失败'
 *     }
 */
  async update() {
    const { ctx, service } = this;
    ctx.validate(createRule);
    const result = await service.solution.update(ctx.params.id, ctx.request.body);
    if (result) ctx.success(result, '修改解决方案成功'); else ctx.fail('修改解决方案失败');
  }

  /**
 * @api {delete} /solution/:id 删除解决方案
 * @apiName solution/delete
 * @apiGroup Solution
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 200,
 *       msg: '删除解决方案成功',
 *       data: {
 *         "ok": 1,
 *         "nModified": 1,
 *         "n": 1
 *       }
 *     }
 *
 * @apiError 500 删除解决方案失败
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 500,
 *       msg: '删除解决方案失败'
 *     }
 */
  async destroy() {
    const { ctx, service } = this;
    const result = await service.solution.destroy(ctx.params.id);
    if (result) ctx.success(result, '删除解决方案成功'); else ctx.fail('删除解决方案失败');
  }

  /**
 * @api {get} /solution/list 查询所有解决方案
 * @apiName solution/list
 * @apiGroup Solution
 *
 * @apiSuccess {ObjectId} _id 解决方案id
 * @apiSuccess {String} title 解决方案标题
 * @apiSuccess {String} url 解决方案地址
 * @apiSuccess {String} description 解决方案描述
 * @apiSuccess {String} imgUrl 图片路径
 * @apiSuccess {Date} createdAt 解决方案创建时间
 * @apiSuccess {Date} updatedAt 解决方案修改时间
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 200,
 *       msg: '查询解决方案成功',
 *       data: [
 *        [{
 *          _id: '5tret4656557frt466',
 *          title: '企业移动平台APP开发',
 *          description: '专注APP开发三十年',
 *          url: '/solution',
 *          imgUrl: 'public/upload/2018-5-2/default.jpg',
 *          createdAt: '2018-5-2 0:0:0',
 *          updatedAt: '2018-5-2 0:0:0'
 *        }, {
 *          _id: '5tret4656557frt467',
 *          title: '企业移动平台APP开发',
 *          description: '专注APP开发三十年',
 *          url: '/solution',
 *          imgUrl: 'public/upload/2018-5-2/default.jpg',
 *          createdAt: '2018-5-2 0:0:0',
 *          updatedAt: '2018-5-2 0:0:0'
 *        }, {
 *          _id: '5tret4656557frt468',
 *          title: '企业移动平台APP开发',
 *          description: '专注APP开发三十年',
 *          url: '/solution',
 *          imgUrl: 'public/upload/2018-5-2/default.jpg',
 *          createdAt: '2018-5-2 0:0:0',
 *          updatedAt: '2018-5-2 0:0:0'
 *        }]
 *       ]
 *     }
 *
 * @apiError 500 查询解决方案失败
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 500,
 *       msg: '查询解决方案失败'
 *     }
 */
  async list() {
    const { ctx, service } = this;
    const solutionList = [];
    let solutionItem = [];
    const solution = await service.solution.list();
    if (solution) {
      solution.forEach((sol, index, arr) => {
        solutionItem.push(sol);
        if ((index + 1) % 3 === 0 || index === arr.length - 1) {
          solutionList.push(solutionItem);
          solutionItem = [];
        }
      });
      ctx.success(solutionList, '查询解决方案成功');
    } else ctx.fail('查询解决方案失败');
  }
}

module.exports = SolutionController;
