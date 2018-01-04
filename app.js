const express = require('express')
const app = express();

app.get('/', (req, res)=>{
  res.send('Hello World!');
});

app.get('/test', (req, res)=>{
  res.send('Test page');
})

app.listen(3000, ()=>{
  console.log('Express server listening on port 3000.')
});
