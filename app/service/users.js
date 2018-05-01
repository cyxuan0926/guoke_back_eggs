'use strict';
const Service = require('egg').Service;

class UsersService extends Service {
  async index() {
    const { ctx } = this;
    const users = await ctx.model.Users.find({});
    return users;
  }

  async create(user) {
    const { ctx } = this;
    const result = await ctx.model.Users.create(user, { password: 0 });
    return result;
  }

  async show(id) {
    const { ctx } = this;
    const user = await ctx.model.Users.findOne(id);
    return user;
  }

  async login(user) {
    const { ctx } = this;
    const result = await ctx.model.Users.findOne(user, { password: 0 });
    return result;
  }
}

module.exports = UsersService;
