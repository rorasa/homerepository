const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let entrySchema = new Schema({
  title: String,
  author: String,
  coverImage: String,
  description: String,
  type: String,
  category: Schema.Types.ObjectId,
  links: [{
            name: String,
            url: String
          }],
  files: [{
            filename: String,
            path: String,
            size: Number,
            type: String,
            added: Date,
            modified: Date
          }],
  customFields: []
});

let Entry = mongoose.model('Entry', entrySchema);
module.exports = Entry;
