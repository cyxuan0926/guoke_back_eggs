'use strict';
const path = require('path');

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
    maxAge: 1 * 3600 * 1000, // 1小时
    httpOnly: true,
    encrypt: true,
  };

  // csrf security
  config.security = {
    csrf: {
      // 判断是否需要 ignore 的方法，请求上下文 context 作为第一个参数
      ignore: ctx => ctx.ip === '127.0.0.1' || 'localhost',
    },
    domainWhiteList: [ 'http://localhost:8080', 'http://localhost:3000', 'http://10.10.10.208:3000' ],
    // domainWhiteList: [ '*' ],
  };

  config.cors = {
    credentials: true,
  };

  // config.cluster = {
  //   listen: {
  //     port: 7001,
  //     hostname: 'localhost',
  //     // path: '/var/run/egg.sock',
  //   },
  // };

  config.view = {
    // 如果还有其他模板引擎，需要合并多个目录
    root: path.join(appInfo.baseDir, 'app/assets'),
    mapping: {
      '.js': 'assets',
    },
  };

  // config.assets = {
  //   publicPath: '/public/',
  //   devServer: {
  //     debug: false,
  //     command: 'roadhog dev',
  //     port: 8000,
  //     env: {
  //       BROWSER: 'none',
  //       ESLINT: 'none',
  //       SOCKET_SERVER: 'http://127.0.0.1:8000',
  //       PUBLIC_PATH: 'http://127.0.0.1:8000',
  //     },
  //   },
  // };

  return config;
};
