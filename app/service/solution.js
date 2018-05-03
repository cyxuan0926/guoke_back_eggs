'use strict';
const Service = require('egg').Service;

class SolutionService extends Service {
  async index(pagination) {
    const { ctx } = this;
    const page = pagination.page || 1;
    const rows = pagination.rows || 10;
    const skip = (page - 1) * rows;
    const condition = { sysFlag: 1 };
    pagination.title ? condition.title = pagination.title : '';
    const solution = await ctx.model.Solution.find(condition).skip(skip).limit(rows);
    const total = await ctx.model.Solution.count(condition);
    return {
      solution,
      total,
    };
  }

  async create(solution) {
    const { ctx } = this;
    const result = ctx.model.Solution.create(solution);
    return result;
  }

  async update(id, solution) {
    const { ctx } = this;
    const result = ctx.model.Solution.update(id, Object.assign(solution, { updatedAt: Date.now }));
    return result;
  }

  async destroy(id) {
    const { ctx } = this;
    const result = ctx.model.Solution.update(id, { sysFlag: 0, updatedAt: Date.now });
    return result;
  }

  async list() {
    const { ctx } = this;
    const solution = ctx.model.Solution.find({ sysFlag: 1 });
    return solution;
  }
}

module.exports = SolutionService;
