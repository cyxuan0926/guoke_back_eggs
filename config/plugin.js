'use strict';

// had enabled by egg
exports.static = true;
exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};

exports.validate = {
  enable: true,
  package: 'egg-validate',
};

exports.passport = {
  enable: true,
  package: 'egg-passport',
};

exports.cors = {
  enable: true,
  package: 'egg-cors',
};

// exports.view = {
//   enable: true,
//   package: 'egg-view',
// };

exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};
