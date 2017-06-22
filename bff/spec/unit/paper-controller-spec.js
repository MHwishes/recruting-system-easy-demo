require('should');
const supertest = require('supertest');
const express = require('express');
const app = require('../../app');
const request = supertest(app);


describe('PaperContronller', () => {

    it('GET All papers', (done) => {
        request
            .get('/paper-definitions')
            .expect(200)
            .end(done)
    });

});
