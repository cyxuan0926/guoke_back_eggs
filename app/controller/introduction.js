'use strict';
const Controller = require('egg').Controller;
const indexRule = {
  page: { type: 'number', required: false },
  rows: { type: 'nubmer', required: false },
  title: { type: 'string', required: false },
};
const createRule = {
  title: { type: 'string', required: true },
  content: { type: 'string', required: true },
  images: { type: 'array', required: true },
};

class IntroductionController extends Controller {
  /**
 * @api {get} /introduction 分页查询简介
 * @apiName introduction
 * @apiGroup Introduction
 *
 * @apiParam {Integer} page 起始页
 * @apiParam {Integer} rows 每页条数
 * @apiParam {String} title 公司简介标题
 *
 * @apiSuccess {ObjectId} _id 简介id
 * @apiSuccess {String} title 公司简介标题
 * @apiSuccess {String} content 公司简介内容
 * @apiSuccess {Array} images 公司简介图片数组
 * @apiSuccess {Date} createdAt 简介创建时间
 * @apiSuccess {Date} updatedAt 简介修改时间
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 200,
 *       msg: '查询简介成功',
 *       data: {
 *          introduction: [{
 *             _id: '5tret4656557frt466',
 *             title: '国科政信科技(北京)股份有限公司是一家大型软件研发企业',
 *             content: '主要从事与军政法系相关的管理和办公软件的开发,同时还负担国家国防科工局以及其他部分软件开发重任。',
 *             images: [{
 *               "fieldname": "file",
 *               "originalname": "default.jpg",
 *               "encoding": "7bit",
 *               "mimetype": "image/jpeg",
 *               "destination": "public/upload/2018-4-3",
 *               "filename": "file-1525241755117.jpg",
 *               "path": "public\\upload\\2018-4-3\\default-1525241755117.jpg",
 *               "size": 20267
 *              }]
 *             createdAt: '2018-5-2 0:0:0',
 *             updatedAt: '2018-5-2 0:0:0'
 *          }],
 *          total: 1
 *       }
 *     }
 *
 * @apiError 500 查询简介失败
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 500,
 *       msg: '查询简介失败'
 *     }
 */
  async index() {
    const { ctx, service } = this;
    ctx.validator.validate(indexRule, ctx.query);
    const result = await service.introduction.index(ctx.query);
    if (result) ctx.success(result, '查询简介成功'); else ctx.fail('查询简介失败');
  }

  /**
 * @api {post} /introduction 新增简介
 * @apiName introduction/new
 * @apiGroup Introduction
 *
 * @apiParam {String} title 公司简介标题
 * @apiParam {String} content 公司简介内容
 * @apiParam {Array} images 公司简介图片数组
 *
 * @apiSuccess {ObjectId} _id 简介id
 * @apiSuccess {String} title 公司简介标题
 * @apiSuccess {String} content 公司简介内容
 * @apiSuccess {Array} images 公司简介图片数组
 * @apiSuccess {Date} createdAt 简介创建时间
 * @apiSuccess {Date} updatedAt 简介修改时间
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 200,
 *       msg: '新增简介成功',
 *       data: {
 *         _id: '5tret4656557frt466',
 *         title: '国科政信科技(北京)股份有限公司是一家大型软件研发企业',
 *         content: '主要从事与军政法系相关的管理和办公软件的开发,同时还负担国家国防科工局以及其他部分软件开发重任。',
 *         images: [{
 *           "fieldname": "file",
 *           "originalname": "default.jpg",
 *           "encoding": "7bit",
 *           "mimetype": "image/jpeg",
 *           "destination": "public/upload/2018-4-3",
 *           "filename": "file-1525241755117.jpg",
 *           "path": "public\\upload\\2018-4-3\\default-1525241755117.jpg",
 *           "size": 20267
 *          }]
 *         createdAt: '2018-5-2 0:0:0',
 *         updatedAt: '2018-5-2 0:0:0'
 *       }
 *     }
 *
 * @apiError 500 新增简介失败
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 500,
 *       msg: '新增简介失败'
 *     }
 */
  async create() {
    const { ctx, service } = this;
    ctx.validate(createRule);
    const introduction = await service.introduction.create(ctx.request.body);
    if (introduction) ctx.success(introduction, '新增简介成功'); else ctx.fail('新增简介失败');
  }

  /**
 * @api {put} /introduction/:id 修改简介
 * @apiName introduction/update
 * @apiGroup Introduction
 *
 * @apiParam {String} id 简介id required
 * @apiParam {String} company 公司名称
 * @apiParam {String} shareCode 股票代码
 * @apiParam {String} address 公司地址
 * @apiParam {String} tel 公司电话
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
 * @apiSuccess {Date} createdAt 简介创建时间
 * @apiSuccess {Date} updatedAt 简介修改时间
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 200,
 *       msg: '修改简介成功',
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
 * @apiError 500 修改简介失败
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 500,
 *       msg: '修改简介失败'
 *     }
 */
  async update() {
    const { ctx, service } = this;
    ctx.validate(createRule);
    const result = await service.introduction.update(ctx.query, ctx.request.body);
    if (result) ctx.success(result, '修改简介成功'); else ctx.fail('修改简介失败');
  }

  /**
 * @api {delete} /introduction/:id 删除简介
 * @apiName introduction/delete
 * @apiGroup Introduction
 *
 * @apiParam {String} id 简介id required
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 200,
 *       msg: '删除简介成功',
 *       data: {}
 *     }
 *
 * @apiError 500 删除简介失败
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 500,
 *       msg: '删除简介失败'
 *     }
 */
  async destroy() {
    const { ctx, service } = this;
    const result = await service.introduction.destroy(ctx.query);
    if (result) ctx.success(result, '删除简介成功'); else ctx.fail('删除简介失败');
  }

  /**
 * @api {get} /introduction/:id 根据id查询简介
 * @apiName introduction/show
 * @apiGroup Introduction
 *
 * @apiParam {String} id 简介id required
 *
 * @apiSuccess {ObjectId} _id 标题id
 * @apiSuccess {String} company 公司名称
 * @apiSuccess {String} shareCode 股票代码
 * @apiSuccess {String} address 公司地址
 * @apiSuccess {String} tel 公司电话
 * @apiSuccess {String} fax 公司传真
 * @apiSuccess {String} email 公司邮箱
 * @apiSuccess {Date} createdAt 简介创建时间
 * @apiSuccess {Date} updatedAt 简介修改时间
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 200,
 *       msg: '查询简介成功',
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
 * @apiError 500 查询简介失败
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 500,
 *       msg: '查询简介失败'
 *     }
 */
  async show() {
    const { ctx, service } = this;
    const introduction = await service.introduction.show(ctx.query);
    if (introduction) ctx.success(introduction, '查询简介成功'); else ctx.fail('查询简介失败');
  }

  /**
 * @api {get} /introduction/list 查询所有简介
 * @apiName introduction/list
 * @apiGroup Introduction
 *
 * @apiParam {String} id 简介id required
 *
 * @apiSuccess {ObjectId} _id 标题id
 * @apiSuccess {String} company 公司名称
 * @apiSuccess {String} shareCode 股票代码
 * @apiSuccess {String} address 公司地址
 * @apiSuccess {String} tel 公司电话
 * @apiSuccess {String} fax 公司传真
 * @apiSuccess {String} email 公司邮箱
 * @apiSuccess {Date} createdAt 简介创建时间
 * @apiSuccess {Date} updatedAt 简介修改时间
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 200,
 *       msg: '查询简介成功',
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
 * @apiError 500 查询简介失败
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 500,
 *       msg: '查询简介失败'
 *     }
 */
  async list() {
    const { ctx, service } = this;
    const introduction = await service.introduction.list();
    if (introduction) ctx.success(introduction, '查询简介成功'); else ctx.fail('查询简介失败');
  }

}

module.exports = IntroductionController;
