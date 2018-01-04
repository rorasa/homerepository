const assert = require('assert');
const Storage = require('../src/Storage');

describe('Testing Storage class', ()=>{
  it('Emptying the storages collections', (done)=>{
    Storage.find({})
      .then((storages)=>{
        assert(storages.length === 0);
        done();
      })
  });

  it('Creating a new storage', (done)=>{
    let storage = new Storage;
    storage.collectionName = "A";
    storage.basepaths.push({basepath: "root", pathuri: "/"});
    storage.save()
      .then(()=>{
        assert(!storage.isNew);
        done();
      })
  });
});
