'use strict';
const Service = require('egg').Service;

class IntroductionService extends Service {
  async index(pagination) {
    const { ctx } = this;
    const page = parseInt(pagination.page) || 1;
    const rows = parseInt(pagination.rows) || 10;
    const skip = (page - 1) * rows;
    const condition = { sysFlag: 1 };
    pagination.title ? condition.title = pagination.title : '';
    const introduction = await ctx.model.Introduction.find(condition).skip(skip).limit(rows);
    const total = await ctx.model.Introduction.count(condition);
    return {
      introduction,
      total,
    };
  }

  async create(introduction) {
    const { ctx } = this;
    const result = await ctx.model.Introduction.create(introduction);
    return result;
  }

  async update(_id, introduction) {
    const { ctx } = this;
    const result = await ctx.model.Introduction.update({ _id }, Object.assign(introduction, { updatedAt: Date.now() }));
    return result;
  }

  async destroy(_id) {
    const { ctx } = this;
    const result = await ctx.model.Introduction.update({ _id }, { sysFlag: 0, updatedAt: Date.now() });
    return result;
  }

  async edit(_id) {
    const { ctx } = this;
    const introduction = await ctx.model.Introduction.findOne(Object.assign({ _id }, { sysFlag: 1 }));
    return introduction;
  }

  async list() {
    const { ctx } = this;
    const introduction = await ctx.model.Introduction.find({ sysFlag: 1 });
    return introduction;
  }
}

module.exports = IntroductionService;
