const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let storageSchema = new Schema({
  storageName: String,
  basepath: String,
  totalSize: Number,
  freeSize: Number,
});

let Storage = mongoose.model('Storage', storageSchema);
module.exports = Storage;
