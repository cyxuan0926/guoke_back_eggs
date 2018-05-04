'use strict';
const Controller = require('egg').Controller;
const createRule = {
  company: { type: 'string', required: true },
  shareCode: { type: 'string', required: false },
  address: { type: 'string', required: true },
  tel: { type: 'string', required: true },
  fax: { type: 'string', required: false },
  email: { type: 'string', required: false },
};

class InformationController extends Controller {
  /**
 * @api {get} /information 分页查询基本信息
 * @apiName information
 * @apiGroup Information
 *
 * @apiParam {Integer} page 起始页
 * @apiParam {Integer} rows 每页条数
 *
 * @apiSuccess {ObjectId} _id 基本信息id
 * @apiSuccess {String} company 公司名称
 * @apiSuccess {String} shareCode 股票代码
 * @apiSuccess {String} address 公司地址
 * @apiSuccess {String} tel 公司电话
 * @apiSuccess {String} fax 公司传真
 * @apiSuccess {String} email 公司邮箱
 * @apiSuccess {Date} createdAt 信息创建时间
 * @apiSuccess {Date} updatedAt 信息修改时间
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 200,
 *       msg: '查询基本信息成功',
 *       data: {
 *          information: [{
 *             _id: '5tret4656557frt466',
 *             company: '国科股份有限公司',
 *             shareCode: '834465',
 *             address: '北京市海淀区西三旗昌临813号A11号楼',
 *             tel: '010-82911260',
 *             fax: '010-62160556',
 *             email: 'Service@sinog2c.com',
 *             createdAt: '2018-5-2 0:0:0',
 *             updatedAt: '2018-5-2 0:0:0'
 *          }],
 *          total: 1
 *       }
 *     }
 *
 * @apiError 500 查询基本信息失败
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 500,
 *       msg: '查询基本信息失败'
 *     }
 */
  async index() {
    const { ctx, service } = this;
    const query = ctx.query;
    const result = await service.information.index(query);
    if (result) ctx.success(result, '查询基本信息成功'); else ctx.fail('查询基本信息失败');
  }

  /**
 * @api {post} /information 新增基本信息
 * @apiName information/new
 * @apiGroup Information
 *
 * @apiParam {String} company 公司名称 required
 * @apiParam {String} shareCode 股票代码
 * @apiParam {String} address 公司地址 requred
 * @apiParam {String} tel 公司电话 required
 * @apiParam {String} fax 公司传真
 * @apiParam {String} email 公司邮箱
 *
 * @apiSuccess {ObjectId} _id 标题id
 * @apiSuccess {String} company 公司名称
 * @apiSuccess {String} shareCode 股票代码
 * @apiSuccess {String} address 公司地址
 * @apiSuccess {String} tel 公司电话
 * @apiSuccess {String} fax 公司传真
 * @apiSuccess {String} email 公司邮箱
 * @apiSuccess {Date} createdAt 信息创建时间
 * @apiSuccess {Date} updatedAt 信息修改时间
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 200,
 *       msg: '新增基本信息成功',
 *       data: {
 *          _id: '5tret4656557frt466',
 *          company: '国科股份有限公司',
 *          shareCode: '834465',
 *          address: '北京市海淀区西三旗昌临813号A11号楼',
 *          tel: '010-82911260',
 *          fax: '010-62160556',
 *          email: 'Service@sinog2c.com',
 *          createdAt: '2018-5-2 0:0:0',
 *          updatedAt: '2018-5-2 0:0:0'
 *       }
 *     }
 *
 * @apiError 500 新增基本信息失败
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 500,
 *       msg: '新增基本信息失败'
 *     }
 */
  async create() {
    const { ctx, service } = this;
    ctx.validate(createRule);
    const information = await service.information.create(ctx.request.body);
    if (information) ctx.success(information, '新增基本信息成功'); else ctx.fail('新增基本信息失败');
  }

  /**
 * @api {put} /information/:id 修改基本信息
 * @apiName information/update
 * @apiGroup Information
 *
 * @apiParam {String} company 公司名称 required
 * @apiParam {String} shareCode 股票代码
 * @apiParam {String} address 公司地址 required
 * @apiParam {String} tel 公司电话 required
 * @apiParam {String} fax 公司传真
 * @apiParam {String} email 公司邮箱
 *
 * @apiSuccess {ObjectId} _id 标题id
 * @apiSuccess {String} company 公司名称
 * @apiSuccess {String} shareCode 股票代码
 * @apiSuccess {String} address 公司地址
 * @apiSuccess {String} tel 公司电话
 * @apiSuccess {String} fax 公司传真
 * @apiSuccess {String} email 公司邮箱
 * @apiSuccess {Date} createdAt 信息创建时间
 * @apiSuccess {Date} updatedAt 信息修改时间
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 200,
 *       msg: '修改基本信息成功',
 *       data: {
 *         "ok": 1,
 *         "nModified": 1,
 *         "n": 1
 *       }
 *     }
 *
 * @apiError 500 修改基本信息失败
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 500,
 *       msg: '修改基本信息失败'
 *     }
 */
  async update() {
    const { ctx, service } = this;
    ctx.validate(createRule);
    const result = await service.information.update(ctx.params.id, ctx.request.body);
    if (result) ctx.success(result, '修改基本信息成功'); else ctx.fail('修改基本信息失败');
  }

  /**
 * @api {delete} /information/:id 删除基本信息
 * @apiName information/delete
 * @apiGroup Information
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 200,
 *       msg: '删除基本信息成功',
 *       data: {
 *         "ok": 1,
 *         "nModified": 1,
 *         "n": 1
 *       }
 *     }
 *
 * @apiError 500 删除基本信息失败
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 500,
 *       msg: '删除基本信息失败'
 *     }
 */
  async destroy() {
    const { ctx, service } = this;
    const result = await service.information.destroy(ctx.params.id);
    if (result) ctx.success(result, '删除基本信息成功'); else ctx.fail('删除基本信息失败');
  }

  /**
 * @api {get} /information/:id/edit 根据id查询基本信息
 * @apiName information/edit
 * @apiGroup Information
 *
 * @apiSuccess {ObjectId} _id 标题id
 * @apiSuccess {String} company 公司名称
 * @apiSuccess {String} shareCode 股票代码
 * @apiSuccess {String} address 公司地址
 * @apiSuccess {String} tel 公司电话
 * @apiSuccess {String} fax 公司传真
 * @apiSuccess {String} email 公司邮箱
 * @apiSuccess {Date} createdAt 信息创建时间
 * @apiSuccess {Date} updatedAt 信息修改时间
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 200,
 *       msg: '查询基本信息成功',
 *       data: {
 *          _id: '5tret4656557frt466',
 *          company: '国科股份有限公司',
 *          shareCode: '834465',
 *          address: '北京市海淀区西三旗昌临813号A11号楼',
 *          tel: '010-82911260',
 *          fax: '010-62160556',
 *          email: 'Service@sinog2c.com',
 *          createdAt: '2018-5-2 0:0:0',
 *          updatedAt: '2018-5-2 0:0:0'
 *       }
 *     }
 *
 * @apiError 500 查询基本信息失败
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 500,
 *       msg: '查询基本信息失败'
 *     }
 */
  async edit() {
    const { ctx, service } = this;
    const information = await service.information.edit(ctx.params.id);
    if (information) ctx.success(information, '查询基本信息成功'); else ctx.fail('查询基本信息失败');
  }

  /**
 * @api {get} /information/list 查询所有基本信息
 * @apiName information/list
 * @apiGroup Information
 *
 * @apiSuccess {ObjectId} _id 标题id
 * @apiSuccess {String} company 公司名称
 * @apiSuccess {String} shareCode 股票代码
 * @apiSuccess {String} address 公司地址
 * @apiSuccess {String} tel 公司电话
 * @apiSuccess {String} fax 公司传真
 * @apiSuccess {String} email 公司邮箱
 * @apiSuccess {Date} createdAt 信息创建时间
 * @apiSuccess {Date} updatedAt 信息修改时间
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 200,
 *       msg: '查询基本信息成功',
 *       data: [{
 *          _id: '5tret4656557frt466',
 *          company: '国科股份有限公司',
 *          shareCode: '834465',
 *          address: '北京市海淀区西三旗昌临813号A11号楼',
 *          tel: '010-82911260',
 *          fax: '010-62160556',
 *          email: 'Service@sinog2c.com',
 *          createdAt: '2018-5-2 0:0:0',
 *          updatedAt: '2018-5-2 0:0:0'
 *       }]
 *     }
 *
 * @apiError 500 查询基本信息失败
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 500,
 *       msg: '查询基本信息失败'
 *     }
 */
  async list() {
    const { ctx, service } = this;
    const information = await service.information.list();
    if (information) ctx.success(information, '查询基本信息成功'); else ctx.fail('查询基本信息失败');
  }

}

module.exports = InformationController;
