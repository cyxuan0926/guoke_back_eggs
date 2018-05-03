'use strict';
const Service = require('egg').Service;

class InformationService extends Service {
  async index(pagination) {
    const { ctx } = this;
    const page = pagination.page || 1;
    const rows = pagination.rows || 10;
    const skip = (page - 1) * rows;
    const condition = { sysFlag: 1 };
    const information = await ctx.model.Information.find(condition).skip(skip).limit(rows);
    const total = await ctx.model.Information.count(condition);
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

  async update(_id, information) {
    const { ctx } = this;
    const result = await ctx.model.Information.update({ _id }, Object.assign(information, { updatedAt: Date.now() }));
    return result;
  }

  async destroy(_id) {
    const { ctx } = this;
    const result = await ctx.model.Information.update({ _id }, { sysFlag: 0, updatedAt: Date.now() });
    return result;
  }

  async show(_id) {
    const { ctx } = this;
    console.log('id', _id);
    const information = await ctx.model.Information.findOne(Object.assign({ _id }, { sysFlag: 1 }));
    return information;
  }

  async list() {
    const { ctx } = this;
    const information = await ctx.model.Information.find({ sysFlag: 1 });
    return information;
  }
}

module.exports = InformationService;
