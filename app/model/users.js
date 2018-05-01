'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const UserSchema = new Schema({
    userName: { type: String, default: '', required: true, unique: true },
    password: { type: String, default: '', required: true },
    createdAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
  }, {
    versionKey: false,
  });
  return mongoose.model('Users', UserSchema);
};
