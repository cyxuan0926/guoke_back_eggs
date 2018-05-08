'use strict';
const Service = require('egg').Service;

class SolutionService extends Service {
  async index(pagination) {
    const { ctx } = this;
    const page = parseInt(pagination.page) || 1;
    const rows = parseInt(pagination.rows) || 10;
    const skip = (page - 1) * rows;
    const condition = { sysFlag: 1 };
    pagination.title && (condition.title = pagination.title);
    const solution = await ctx.model.Solution.find(condition).populate('solutionDetailId').skip(skip)
      .limit(rows);
    const total = await ctx.model.Solution.count(condition);
    return {
      solution,
      total,
    };
  }

  async create(solution) {
    const { ctx } = this;
    const result = await ctx.model.Solution.create(solution);
    return result;
  }

  async update(_id, solution) {
    const { ctx } = this;
    const result = await ctx.model.Solution.update({ _id }, Object.assign(solution, { updatedAt: Date.now() }));
    return result;
  }

  async destroy(_id) {
    const { ctx } = this;
    const result = await ctx.model.Solution.update({ _id }, { sysFlag: 0, updatedAt: Date.now() });
    if (result) {
      const solutionDetailResult = await ctx.model.SolutionDetail.findOneAndUpdate({ solutionId: _id }, { solutionId: null });
      if (solutionDetailResult) return result;
    } return '';
  }

  async list() {
    const { ctx } = this;
    const solution = await ctx.model.Solution.find({ sysFlag: 1 }).populate('solutionDetailId');
    return solution;
  }
}

module.exports = SolutionService;
