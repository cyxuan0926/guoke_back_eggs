'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1524993676801_8724';

  // add your config here
  config.middleware = [ 'verify' ];

  // mongodb
  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1/guoke',
      options: {},
    },
    app: true,
  };

  // session
  config.session = {
    key: 'EGG_SESS',
    maxAge: 1 * 3600 * 1000, // 半小时
    httpOnly: true,
    encrypt: true,
  };

  // csrf security
  config.security = {
    csrf: {
      // 判断是否需要 ignore 的方法，请求上下文 context 作为第一个参数
      ignore: ctx => ctx.ip === '127.0.0.1' || 'localhost',
    },
    domainWhiteList: [ 'http://localhost:8080', 'http://localhost:3000', 'http://localhost:9528' ],
  };

  config.cors = {
    credentials: true,
  };

  return config;
};
