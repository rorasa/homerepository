const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let categorySchema = new Schema({
  name: String,
  type: String,
  children: [ Schema.Types.ObjectId ],
  numEntries: Number,
  entries: [{
    entry: Schema.Types.ObjectId,
    title: String,
    author: String,
    coverImage: String
  }]
});

let Category = mongoose.model('Category', categorySchema);
module.exports = Category;
