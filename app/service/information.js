'use strict';
const Service = require('egg').Service;

class InformationService extends Service {
  async index(pagination) {
    const { ctx } = this;
    const page = pagination.page || 1;
    const rows = pagination.rows || 10;
    const skip = (page - 1) * rows;
    const information = ctx.model.Information.find({ sysFlag: 1 }).skip(skip).limit(rows);
    const total = ctx.model.Information.count();
    return {
      information,
      total,
    };
  }

  async create(information) {
    const { ctx } = this;
    const result = await ctx.model.Information.create(information);
    return result;
  }
}

module.exports = InformationService;
