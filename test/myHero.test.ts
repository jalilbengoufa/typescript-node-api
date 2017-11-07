import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../src/App';

chai.use(chaiHttp);
const expect = chai.expect;

describe('GET api/v1/heroes/:id', () => {
    
      it('should return test', () => {
        return chai.request(app).get('/api/v1/heroes/6')
          .then(res => {
            expect(res.body.hero.name).to.equal('test');
          });
      });

      it('should return gender : male',() => {
        return chai.request(app).get('/api/v1/heroes/6')
        .then(res => {
          expect(res.body.hero.gender).to.equal('male');
        });
      });
    
    });