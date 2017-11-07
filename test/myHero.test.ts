import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../src/App';

chai.use(chaiHttp);
const expect = chai.expect;

describe('GET api/v1/heroes/:name', () => {
    
      it('should return test', () => {
        return chai.request(app).get('/api/v1/heroes/name')
          .then(res => {
            expect(res.body.hero.name).to.equal('test');
          });
      });
    
    });