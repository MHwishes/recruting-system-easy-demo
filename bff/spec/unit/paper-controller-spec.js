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

    // it('POST All papers', (done) => {
    //     request
    //         .post('/paper-definitions')
    //         .send({
    //             "name": "9999999999999999999",
    //             "description": "4444888888",
    //             "sections": [{
    //                 "type": "logicPuzzle",
    //                 "definitions": {
    //                     "hard": 9,
    //                     "easy": 9,
    //                     "normal": 45
    //                 }
    //             }]
    //         })
    //         .expect(201)
    //         .end(done)
    // });

});

// http://back_end:8080/back_end/papers