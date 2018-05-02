'use strict';
const multer = require('koa-multer');

module.exports = () => {
  const date = new Date();
  const storage = multer.diskStorage({
    destination: `app/public/upload/${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`,
    filename: (req, file, cb) => {
      const fileFormat = (file.originalname).split('.');
      cb(null, file.fieldname + '-' + date.getTime() + '.' + fileFormat[fileFormat.length - 1]);
    },
  });
  const upload = multer({
    storage,
    limits: {},
  });
  return upload;
};
