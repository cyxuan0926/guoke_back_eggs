'use strict';
const Service = require('egg').Service;

class BannerService extends Service {
  async index(pagination) {
    const { ctx } = this;
    const page = pagination.page || 1;
    const rows = pagination.rows || 10;
    const skip = (page - 1) * rows;
    const condition = { sysFlag: 1 };
    pagination.title ? condition.title = pagination.title : '';
    const banner = await ctx.model.Banner.find(condition).skip(skip).limit(rows);
    const total = await ctx.model.Banner.count(condition);
    return {
      banner,
      total,
    };
  }

  async create(banner) {
    const { ctx } = this;
    const result = ctx.model.Banner.create(banner);
    return result;
  }

  async update(id, banner) {
    const { ctx } = this;
    const result = ctx.model.Banner.update(id, Object.assign(banner, { updatedAt: Date.now }));
    return result;
  }

  async destroy(id) {
    const { ctx } = this;
    const result = ctx.model.Banner.update(id, { sysFlag: 0, updatedAt: Date.now });
    return result;
  }

  async list() {
    const { ctx } = this;
    const banner = ctx.model.Banner.find({ sysFlag: 1 });
    return banner;
  }
}

module.exports = BannerService;
