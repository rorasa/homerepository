const assert = require('assert');
const Category = require('../src/Category');

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
                  assert(category.children.length === 1);
                  done();
                });
              });
          });
      });
  });
});
