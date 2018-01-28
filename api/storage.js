const mongoose = require('mongoose');
const disk = require('diskusage');

const Storage = require('./models/Storage');

function addNewStorage(req, res){

  disk.check(req.body.storagePath, (err, info)=>{
    let storage = new Storage;
    storage.storageName = req.body.storageName;
    storage.basepath = req.body.storagePath;
    storage.totalSize = info.total;
    storage.freeSize = info.free;

    console.log(storage);
    storage.save()
      .then(()=>{ res.sendStatus(201) });
  });
}

function getAllStorages(req, res){
  Storage.find({},(err, storages)=>{
    res.json(storages);
  }).catch((err)=>{
    res.sendStatus(500);
  });
}

function getStorageOfCollection(req, res){
  res.sendStatus(200);
}

function invalidRequest(req, res){
  res.sendStatus(400);
}

module.exports = {
  addNewStorage,
  getAllStorages,
  getStorageOfCollection,
  invalidRequest
};
