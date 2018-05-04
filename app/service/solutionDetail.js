'use strict';
const Service = require('egg').Service;

class SolutionDetailService extends Service {
  async index(pagination) {
    const { ctx } = this;
    const page = parseInt(pagination.page) || 1;
    const rows = parseInt(pagination.rows) || 10;
    const skip = (page - 1) * rows;
    const condition = { sysFlag: 1 };
    // let solution = {};
    // if (pagination.solutionId) {
    //   condition._id = pagination.solutionId;
    //   solution = await ctx.model.Solution.findOne(condition);
    //   delete condition._id;
    // }
    const solutionDetail = await ctx.model.SolutionDetail.find(condition).populate({ path: 'solution', select: '_id title description' }).skip(skip)
      .limit(rows);
    const total = await ctx.model.SolutionDetail.count(condition);
    return {
      solutionDetail,
      total,
    };
  }

  async create(solutionDetail) {
    const { ctx } = this;
    const condition = { sysFlag: 1 };
    condition._id = solutionDetail.solutionId;
    delete solutionDetail.solutionId;
    const solution = await ctx.model.Solution.findOne(condition);
    const solutionDe = await ctx.model.SolutionDetail.create(solutionDetail);
    solutionDe.solutionId = solution;
    const result = await solutionDe.save();
    return result;
  }

  async update(solutionDetail) {
    const { ctx } = this;
    const condition = { sysFlag: 1 };
    condition._id = solutionDetail.solutionId;
    const solution = await ctx.model.Solution.findOne(condition);
    solutionDetail.solutionId = solution;
    const result = await ctx.model.SolutionDetail.update(Object.assign(solutionDetail, { updatedAt: Date.now() }));
    return result;
  }

  async delete(_id) {
    const { ctx } = this;
    const result = await ctx.model.SolutionDetail.update({ _id }, { sysFlag: 0, updatedAt: Date.now() });
    return result;
  }

  async edit(_id) {
    const { ctx } = this;
    const condition = { sysFlag: 1 };
    condition.solutionId = _id;
    const solutionDetail = await ctx.model.SolutionDetail.findOne(condition).populate({ path: 'solution', select: '_id title description' });
    return solutionDetail;
  }
}

module.exports = SolutionDetailService;
