'use strict';
const Service = require('egg').Service;

class UsersService extends Service {
  async index() {
    const { ctx } = this;
    const users = await ctx.model.Users.find({});
    return users;
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

  async resetPwd(password) {
    const { ctx } = this;
    const _id = ctx.session.userId;
    password.newPassword = ctx.helper.md5(password.newPassword);
    password.oldPassword = ctx.helper.md5(password.oldPassword);
    const result = await ctx.model.Users.findOneAndUpdate({ _id, password: password.oldPassword }, { password: password.newPassword, updatedAt: Date.now() }, { password: 0 });
    return result;
  }

  async register(user) {
    const { ctx } = this;
    user.password = ctx.helper.md5(user.password);
    const result = await ctx.model.Users.create(user);
    return result;
  }
}

module.exports = UsersService;
