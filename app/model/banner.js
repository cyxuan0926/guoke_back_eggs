'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const BannerSchema = new Schema({
    title: { type: String, default: '' },
    description: { type: String, default: '' },
    url: { type: String, default: '' },
    imgUrl: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    sysFlag: { type: Number, default: 1 },
  }, {
    versionKey: false,
  });
  return mongoose.model('Banner', BannerSchema);
};
