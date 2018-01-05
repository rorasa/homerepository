const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let storageSchema = new Schema({
  collectionName: String,
  basepaths: [
    {
      basepath: String,
      pathuri: String
    }
  ]
});

let Storage = mongoose.model('Storage', storageSchema);
module.exports = Storage;
