'use strict';

var app = require('../..');
import request from 'supertest';

var newVendor;

describe('Vendor API:', function() {

  describe('GET /api/vendors', function() {
    var vendors;

    beforeEach(function(done) {
      request(app)
        .get('/api/vendors')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          vendors = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(vendors).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/vendors', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/vendors')
        .send({
          name: 'New Vendor',
          info: 'This is the brand new vendor!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newVendor = res.body;
          done();
        });
    });

    it('should respond with the newly created vendor', function() {
      expect(newVendor.name).to.equal('New Vendor');
      expect(newVendor.info).to.equal('This is the brand new vendor!!!');
    });

  });

  describe('GET /api/vendors/:id', function() {
    var vendor;

    beforeEach(function(done) {
      request(app)
        .get('/api/vendors/' + newVendor._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          vendor = res.body;
          done();
        });
    });

    afterEach(function() {
      vendor = {};
    });

    it('should respond with the requested vendor', function() {
      expect(vendor.name).to.equal('New Vendor');
      expect(vendor.info).to.equal('This is the brand new vendor!!!');
    });

  });

  describe('PUT /api/vendors/:id', function() {
    var updatedVendor;

    beforeEach(function(done) {
      request(app)
        .put('/api/vendors/' + newVendor._id)
        .send({
          name: 'Updated Vendor',
          info: 'This is the updated vendor!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedVendor = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedVendor = {};
    });

    it('should respond with the updated vendor', function() {
      expect(updatedVendor.name).to.equal('Updated Vendor');
      expect(updatedVendor.info).to.equal('This is the updated vendor!!!');
    });

  });

  describe('DELETE /api/vendors/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/vendors/' + newVendor._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when vendor does not exist', function(done) {
      request(app)
        .delete('/api/vendors/' + newVendor._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
