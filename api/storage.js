const mongoose = require('mongoose');

const Storage = require('./models/Storage');

function addNewStorageToCollection(req, res){
  res.sendStatus(200);
}

function getStorageOfCollection(req, res){
  res.sendStatus(200);
}

function invalidRequest(req, res){
  res.sendStatus(400);
}

module.exports = {
  addNewStorageToCollection,
  getStorageOfCollection,
  invalidRequest
};
