import chai from 'chai';
import chaiHttp from 'chai-http';
import { app } from '../src/index.mjs';
const { expect } = chai;

chai.use(chaiHttp);

describe('Toolbox-api Tests', () => {
  describe('GET /', () => {
    it('should return a message', (done) => {
      chai
        .request(app)
        .get('/')
        .end((_err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.message).to.equal('Hello Toolbox!');
          done();
        });
    });
  });

  describe('GET /files/list', () => {
    it('should return an object with a list of file names', (done) => {
      chai
        .request(app)
        .get('/files/list')
        .end((_err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          done();
        });
    });
  });

  describe('GET /files/data', () => {
    it('should return formatted file data when fileName is provided', (done) => {
      const fileName = 'test3.csv';
      chai
        .request(app)
        .get(`/files/data?fileName=${fileName}`)
        .end((_err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          expect(res.body.file).to.equal(fileName);
          done();
        });
    });

    it('It should return a status of 500 when searching for the file in the external api', (done) => {
      const fileName = 'test4.csv';
      chai
        .request(app)
        .get(`/files/data?fileName=${fileName}`)
        .end((_err, res) => {
          expect(res).to.have.status(500);
          expect(res.body).to.be.an('object');
          expect(res.body.message).to.equal('status_code:500');
          done();
        });
    });

    it('It should return a status 404 when the file is not found', (done) => {
      const fileName = 'test5.csv';
      chai
        .request(app)
        .get(`/files/data?fileName=${fileName}`)
        .end((_err, res) => {
          expect(res).to.have.status(404);
          expect(res.body).to.be.an('object');
          expect(res.body.message).to.equal('status_code:404');
          done();
        });
    });

    it('should return an array of formatted file data when no fileName is provided', (done) => {
      chai
        .request(app)
        .get('/files/data')
        .end((_err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');
          done();
        });
    });
  });
});
