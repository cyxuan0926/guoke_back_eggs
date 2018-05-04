'use strict';
const Controller = require('egg').Controller;
const createRule = {
  solutionId: 'string',
};

class SolutionDetailController extends Controller {
  async index() {
    const { ctx, service } = this;
    const solutionDetail = await service.solutionDetail.index(ctx.query);
    if (solutionDetail) ctx.success(solutionDetail, '查询解决方案详情成功'); else ctx.fail('查询解决方案详情失败');
  }

  async create() {
    const { ctx, service } = this;
    ctx.validate(createRule);
    const solutionDetail = await service.solutionDetail.create(ctx.request.body);
    if (solutionDetail) ctx.success(solutionDetail, '新增解决方案详情成功'); else ctx.fail('新增解决方案详情失败');
  }
}

module.exports = SolutionDetailController;
