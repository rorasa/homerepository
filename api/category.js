const mongoose = require('mongoose');

const Category = require('./models/Category');

function addNewCategory(req, res){
  res.sendStatus(200);
}

function getCategoryByName(req, res){
  res.sendStatus(200);
}

function updateCategoryByName(req, res){
  res.sendStatus(200);
}

function deleteCategoryByName(req, res){
  res.sendStatus(200);
}

function invalidRequest(req, res){
  res.sendStatus(400);
}

module.exports = {
  addNewCategory,
  getCategoryByName,
  updateCategoryByName,
  deleteCategoryByName,
  invalidRequest
};
