'use strict';
const Service = require('egg').Service;

class IntroductionService extends Service {
  async index(pagination) {
    const { ctx } = this;
    const page = pagination.page || 1;
    const rows = pagination.rows || 10;
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

  async update(id, introduction) {
    const { ctx } = this;
    const result = await ctx.model.Introduction.update(id, Object.assign(introduction, { updatedAt: Date.now() }));
    return result;
  }

  async destroy(id) {
    const { ctx } = this;
    const result = await ctx.model.Introduction.update(id, { sysFlag: 0, updatedAt: Date.now() });
    return result;
  }

  async show(id) {
    const { ctx } = this;
    console.log('id', id);
    const introduction = await ctx.model.Introduction.findOne(Object.assign(id, { sysFlag: 1 }));
    return introduction;
  }

  async list() {
    const { ctx } = this;
    const introduction = await ctx.model.Introduction.find({ sysFlag: 1 });
    return introduction;
  }
}

module.exports = IntroductionService;
