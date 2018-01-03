const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
let db = mongoose.connection;

before(()=>{
  mongoose.connect('mongodb://localhost/homerepository');

  db.once('open', ()=>{
    console.log('Mongoose connected to db.');
  }).on('error', ()=>{
    console.log('Connection error!');
  });

  db.collections.entries.drop();
});

// beforeEach((done)=>{
//   mongoose.connection.collections.entries.drop(()=>{
//     done();
//   })
// });
