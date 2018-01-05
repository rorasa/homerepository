const mongoose = require('mongoose');

const Entry = require('./models/Entry');

function createAnEntry(req, res){
  res.sendStatus(200);
}

/* POST methods */

function getEntryById(req, res){
  res.send('Entry by id');
}

function updateEntryById(req, res){
  res.sendStatus(200);
}

function deleteEntryById(req, res){
  res.sendStatus(200);
}

function invalidRequest(req, res){
  res.sendStatus(400);
}

module.exports = { createAnEntry,
  getEntryById,
  updateEntryById,
  deleteEntryById,
  invalidRequest
};
