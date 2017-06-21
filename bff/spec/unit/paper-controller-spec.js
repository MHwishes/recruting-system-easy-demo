require('should');
const supertest = require('supertest');
const express = require('express');
const app = require('../../app');
const request = supertest(app);
// const mockServer = require('../support/moco-server.js');
//
// const Paper = require('../../model/paper');

describe('PaperContronller', () => {


    it('GET All papers', (done) => {
        request
            .get('/paper-definitions')
            .expect(200)
            .end(done)
    });

});

// http://back_end:8080/back_end/papers