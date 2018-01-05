const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;

const app = require('../app.js');

chai.use(chaiHttp);

describe('Backend API Test', ()=>{
  describe('Test Mocha API calls', ()=>{
    it('Get /test ', (done)=>{
      chai.request(app)
        .get('/test')
        .end((err,res)=>{
          assert.strictEqual(res.status, 200);
          assert.strictEqual(res.text, "Test page");
          done();
        })
    });
  });

});
