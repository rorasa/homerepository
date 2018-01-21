const mongoose = require('mongoose');
const disk = require('diskusage');

const Storage = require('../api/models/Storage');

function setupTestDatabase(req, res){

  storageName = "testdrive"
  storagePath = "/testdump";

  disk.check(storagePath, (err, info)=>{
    let storage = new Storage;
    storage.storageName = storageName;
    storage.basepath = storagePath;
    storage.totalSize = info.total;
    storage.freeSize = info.free;

    console.log(storage);
    storage.save()
      .then(()=>{
        console.log("Created a test storage: testdrive" );
        res.sendStatus(201);
       });
  });
}

function teardownTestDatabase(req, res){
  Storage.remove({ storageName: "testdrive" })
    .then(()=>{
      console.log("Removed all test database entries.");
      res.sendStatus(200);
    })
}

module.exports = {
  setupTestDatabase,
  teardownTestDatabase
};
