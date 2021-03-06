'use strict';
const Service = require('egg').Service;

class SolutionDetailService extends Service {
  async index(pagination) {
    const { ctx } = this;
    const page = parseInt(pagination.page) || 1;
    const rows = parseInt(pagination.rows) || 10;
    const skip = (page - 1) * rows;
    const condition = { sysFlag: 1 };
    pagination.introduction && (condition.introduction = pagination.introduction);
    const solutionDetail = await ctx.model.SolutionDetail.find(condition).populate('solutionId').skip(skip)
      .limit(rows);
    const total = await ctx.model.SolutionDetail.count(condition);
    return {
      solutionDetail,
      total,
    };
  }

  async create(solutionDetail) {
    const { ctx } = this;
    const solutionId = solutionDetail.solutionId;
    delete solutionDetail.solutionId;
    const solutionDetails = await ctx.model.SolutionDetail.findOne({ solutionId, sysFlag: 1 });
    if (!solutionDetails) {
      const solution = await ctx.model.Solution.findOne({ _id: solutionId, sysFlag: 1 });
      const solutionDe = await ctx.model.SolutionDetail.create(solutionDetail);
      solutionDe.solutionId = solution._id;
      const result = await solutionDe.save();
      if (result) {
        solution.solutionDetailId = solutionDe._id;
        if (solution.save()) return result;
      }
    } return '';
  }

  async update(_id, solutionDetail) {
    const { ctx } = this;
    const condition = { sysFlag: 1 };
    condition._id = solutionDetail.solutionId;
    const solution = await ctx.model.Solution.findOne(condition);
    if (solution) {
      const result = await ctx.model.SolutionDetail.findOneAndUpdate({ _id }, Object.assign(solutionDetail, { updatedAt: Date.now() }));
      return result;
    } return '';
  }

  async destroy(_id) {
    const { ctx } = this;
    const result = await ctx.model.SolutionDetail.update({ _id }, { sysFlag: 0, updatedAt: Date.now() });
    if (result) {
      const solutionResult = await ctx.model.Solution.findOneAndUpdate({ solutionDetailId: _id }, { solutionDetailId: null });
      if (solutionResult) return result;
    } return '';
  }

  async edit(_id) {
    const { ctx } = this;
    const condition = { sysFlag: 1 };
    condition.solutionId = _id;
    const solutionDetail = await ctx.model.SolutionDetail.findOne(condition).populate('solutionId');
    return solutionDetail;
  }

  async show(_id) {
    const { ctx } = this;
    const condition = { sysFlag: 1 };
    condition._id = _id;
    const solutionDetail = await ctx.model.SolutionDetail.findOne(condition).populate('solutionId');
    return solutionDetail;
  }
}

module.exports = SolutionDetailService;
