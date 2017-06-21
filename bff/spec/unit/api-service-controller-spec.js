require('should');
const config = require('config');
const supertest = require('supertest');
const express = require('express');
const app = require('../../app');
const request = supertest(app);
const superAgent = require('superagent');
const spyOn = require('jasmine');
const apiService = require('../../controller/api-service');
const mockServer = require('../support/moco-server.js');


describe('api-service', () => {

    before(function(done) {
        mockServer.start({}, (err) => {
            done(err,null)
        })
    });


    it("GET api-service get All papers", () => {
        request
            .get('/allpapers')
            .set('Content-Type', 'application/json')
            .expect(200);

    });

    after(function(done) {
        mockServer.stop(done);
    });

});