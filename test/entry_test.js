const assert = require('assert');
const Entry = require('../src/Entry');

describe('Testing Entry class', ()=>{
  it('Emptying the entries collection', (done)=>{
    Entry.find({})
      .then((entries)=>{
        assert(entries.length === 0);
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
        assert(entries.length > 0);
        done();
      });
  });

  it('Creating another entry', (done)=>{
    let entry = new Entry;
    entry.title = "Test Title 2";
    entry.author = "Unknown";
    entry.type = "Book";
    entry.description = "This book's author was Unknown";
    entry.save()
      .then(()=>Entry.find({}))
      .then((entries)=>{
        assert(entries.length === 2);
        done();
      })
  });

  it('Read the first entry', (done)=>{
    Entry.findOne({title: "Test Title 1"})
      .then((entry)=>{
          assert(entry!=null);
          // console.log(entry);
          done();
      });
  });

  it('Modify the second entry', (done)=>{
    Entry.update({ title: "Test Title 2" }, { author: "John Doe" })
      .then(()=>Entry.findOne({title:"Test Title 2"}))
      .then((entry)=>{
        assert(entry.author==="John Doe");
        // console.log(entry);
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
        assert(entries.length === 2);
        done();
      });
  });
});
