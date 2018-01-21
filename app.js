const express = require('express')
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const entry = require('./api/entry');
const category = require('./api/category');
const storage = require('./api/storage');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));

/* Connect Mongoose to MongoDB */
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/homerepository');

mongoose.connection.once('open', ()=>{
  console.log('Connected to MongoDB.');
}).on('error', ()=>{
  console.log('Failed to connect to MongoDB.');
});

/* Routes */

app.get('/', (req, res)=>{
  res.send('Hello World!');
});

app.get('/test', (req, res)=>{
  res.send('Test page');
})

app.route("/api/category/:categoryname")
  .get(category.getCategoryByName)
  .post(category.invalidRequest)
  .put(category.updateCategoryByName)
  .delete(category.deleteCategoryByName);
app.route("/api/category")
  .get(category.invalidRequest)
  .post(category.addNewCategory)
  .put(category.invalidRequest)
  .delete(category.invalidRequest);

app.route("/api/entry/:id")
  .get(entry.getEntryById)
  .post(entry.invalidRequest)
  .put(entry.updateEntryById)
  .delete(entry.deleteEntryById);
app.route("/api/entry")
  .get(entry.invalidRequest)
  .post(entry.createAnEntry)
  .put(entry.invalidRequest)
  .delete(entry.invalidRequest);

app.route("/api/storage/:collectionname")
  .get(storage.getStorageOfCollection)
  .post(storage.invalidRequest)
  .put(storage.invalidRequest)
  .delete(storage.invalidRequest);
app.route("/api/storage")
  .get(storage.invalidRequest)
  .post(storage.addNewStorage)
  .put(storage.invalidRequest)
  .delete(storage.invalidRequest);


app.listen(3000, ()=>{
  console.log('Express server listening on port 3000.')
});

module.exports = app;
