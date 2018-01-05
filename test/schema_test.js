const chai = require('chai');
const assert = chai.assert;

const Entry = require('../src/Entry');
const Category = require('../src/Category');
const Storage = require('../src/Storage');

describe('Mongoose Schema Test', ()=>{
  describe('Testing Entry class', ()=>{
    it('Emptying the entries collection', (done)=>{
      Entry.find({})
        .then((entries)=>{
          assert.lengthOf(entries, 0);
          done();
        })
    });

    it('Creating an entry', (done)=>{
      let entry = new Entry;
      entry.title = "Test Title 1";
      entry.author = "Unknown";
      entry.type = "Book";
      entry.description = "This is just a test entry";
      entry.save()
        .then(()=>Entry.find({}))
        .then((entries)=>{
          assert.isAtLeast(entries.length, 1);
          done();
        });
    });

    it('Read the first entry', (done)=>{
      Entry.findOne({title: "Test Title 1"})
        .then((entry)=>{
          assert.isNotNull(entry);
          done();
        });
    });

    it('Modify the first entry', (done)=>{
      Entry.update({ title: "Test Title 1" }, { author: "John Doe" })
        .then(()=>Entry.findOne({title:"Test Title 1"}))
        .then((entry)=>{
          assert.strictEqual(entry.author, "John Doe");
          done();
        })
    });

    it('Add another entry', (done)=>{
      let entry = new Entry;
      entry.title = "Even better title";
      entry.author = "DaVinci";
      entry.type = "Book";
      entry.description = "The book with the best title in here!";
      entry.save()
        .then(()=>{
          assert(!entry.isNew);
          done();
        })
    });

    it('Remove the first entry', (done)=>{
      Entry.remove({title: "Test Title 1"})
        .then(()=>Entry.find({}))
        .then((entries)=>{
          assert.lengthOf(entries, 1);
          done();
        });
    });
  });

  describe('Testing Category class', ()=>{
    it('Creating a Collection category', (done)=>{
      let collection = new Category({type: "Collection"});
      collection.name="A";
      collection.save()
        .then(()=>{
          assert(!collection.isNew);
          done();
        });
    });

    it('Creating a Subcollection category', (done)=>{
      let subcol = new Category({type: "Subcollection"});
      subcol.name="A1";
      subcol.save()
        .then(()=>{
          assert(!subcol.isNew);
          done();
        })
    });

    it('Linking the Subcollection to the Collection', (done)=>{
      Category.findOne({name: "A1"})
        .then((child)=>{
          Category.findOne({name: "A"})
            .then((parent)=>{
              parent.children.push(child._id);
              parent.save()
                .then(()=>{
                  Category.findOne({name: "A"})
                  .then((category)=>{
                    assert.lengthOf(category.children, 1)
                    done();
                  });
                });
            });
        });
    });
  });

  describe('Testing Storage class', ()=>{
    it('Emptying the storages collections', (done)=>{
      Storage.find({})
        .then((storages)=>{
          assert.lengthOf(storages, 0);
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

});
