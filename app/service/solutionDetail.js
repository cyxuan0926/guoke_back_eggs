'use strict';
const Service = require('egg').Service;

class SolutionDetailService extends Service {
  async index(pagination) {
    const { ctx } = this;
    const page = parseInt(pagination.page) || 1;
    const rows = parseInt(pagination.rows) || 10;
    const skip = (page - 1) * rows;
    const condition = { sysFlag: 1 };
    let solution = {};
    if (pagination.solutionId) {
      condition._id = pagination.solutionId;
      solution = await ctx.model.Solution.findOne(condition);
      delete condition._id;
    }
    const solutionDetail = await ctx.model.SolutionDetail.find(condition).populate(solution._id).skip(skip)
      .limit(rows);
    return solutionDetail;
  }

  async create(solutionDetail) {
    const { ctx } = this;
    // const condition = { sysFlag: 1 };
    const solutionId = solutionDetail.solutionId;
    const solution = await ctx.model.Solution.findOne({ _id: solutionId });
  }
}

module.exports = SolutionDetailService;
