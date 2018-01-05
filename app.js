const express = require('express')
const app = express();
const bodyParser = require('body-parser');


const entry = require('./api/entry');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));

/* Routes */

app.get('/', (req, res)=>{
  res.send('Hello World!');
});

app.get('/test', (req, res)=>{
  res.send('Test page');
})

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


app.listen(3000, ()=>{
  console.log('Express server listening on port 3000.')
});

module.exports = app;
