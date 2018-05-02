'use strict';
const Service = require('egg').Service;

class NavigationService extends Service {
  async index(pagination) {
    const { ctx } = this;
    const page = pagination.page || 1;
    const rows = pagination.rows || 10;
    const skip = (page - 1) * rows;
    const condition = { sysFlag: 1 };
    pagination.title ? condition.title = pagination.title : '';
    const navigation = await ctx.model.Navigation.find(condition).skip(skip).limit(rows);
    const total = await ctx.model.Navigation.count(condition);
    return {
      navigation,
      total,
    };
  }

  async create(navigation) {
    const { ctx } = this;
    const result = ctx.model.Navigation.create(navigation);
    return result;
  }

  async update(id, navigation) {
    const { ctx } = this;
    const result = ctx.model.Navigation.update(id, Object.assign(navigation, { updatedAt: Date.now }));
    return result;
  }

  async destroy(id) {
    const { ctx } = this;
    const result = ctx.model.Navigation.update(id, { sysFlag: 0, updatedAt: Date.now });
    return result;
  }

  async list() {
    const { ctx } = this;
    const navigation = ctx.model.Navigation.find({ sysFlag: 1 });
    return navigation;
  }
}

module.exports = NavigationService;