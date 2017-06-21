require('should');
const config = require('config');
const express = require('express');
const app = require('../../app');
const request = require('supertest')(config.get('testApiService'));


describe('api-service', () => {

    it('GET All papers from mysql', (done) => {
        request
            .get('/papers')
            .expect(200)
            .expect((res)=> {
                res.body.length.should.equal(3)
            })
            .end(done)
    });

});