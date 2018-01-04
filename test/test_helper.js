const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
let db = mongoose.connection;

before((done)=>{
  mongoose.connect('mongodb://localhost/homerepository');

  db.once('open', ()=>{
    console.log('Mongoose connected to db.');
  }).on('error', ()=>{
    console.log('Connection error!');
  });

  db.collections.entries.drop(()=>{
    db.collections.categories.drop(()=>{
      db.collections.storages.drop(()=>{
        done();
      });
    });
  });
});

// beforeEach((done)=>{
//   mongoose.connection.collections.entries.drop(()=>{
//     done();
//   })
// });
