'use strict';

module.exports = {
  success(data = {}, msg = '') {
    this.body = {
      code: 200,
      msg,
      data,
    };
  },
  fail(msg = '') {
    this.body = {
      code: 500,
      msg,
    };
  },
};
