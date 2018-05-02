'use strict';
const Controller = require('egg').Controller;
const indexRule = {
  page: { type: 'number', required: false },
  rows: { type: 'nubmer', required: false },
};
const createRule = {
  company: 'string',
  shareCode: 'string',
  address: 'string',
  tel: 'string',
  fax: 'string',
  email: 'string',
};

class InformationController extends Controller {
  async index() {
    const { ctx, service } = this;
    ctx.validator.validate(indexRule, ctx.query);
    const result = await service.information.index(ctx.query);
    if (result) ctx.success(result, '查询基本信息成功'); else ctx.fail('查询基本信息失败');
  }

  async create() {
    const { ctx, service } = this;
    ctx.validate(createRule);
    const information = await service.information.create(ctx.request.body);
    if (information) ctx.success(information, '新增基本信息成功'); else ctx.fail('新增基本信息失败');
  }
}

module.exports = InformationController;
