require('should');
const supertest = require('supertest');
const express = require('express');
const app = require('../../app');
const request = supertest(app);


describe('PaperContronller', () => {

    it('GET All papers from mysql', (done) => {
        request
            .get('/papers')
            .expect(200)
            .end(done)
    });

    it('POST All papers', (done) => {
        request
            .post('/papers')
            .send({
                "name": "9999999999999999999",
                "description": "4444888888",
                "sections": [{
                    "type": "logicPuzzle",
                    "definitions": {
                        "hard": 9,
                        "easy": 9,
                        "normal": 45
                    }
                }]
            })
            .expect(201)
            .end(done)
    });

    it('PUT send papers from mysql', (done) => {
        request
            .put('/papers/2')
            .send({
                "id": 2,
                "name": "test",
                "description": "4444888888",
                "sections": [{
                    "type": "logicPuzzle",
                    "definitions": {
                        "hard": 9,
                        "easy": 9,
                        "normal": 0
                    }
                }]
            })
            .expect(204)
            .end(done)
    });

    it('DELETE send papers from mysql', (done) => {
        request
            .delete('/papers/2')
            .expect(204)
            .end(done)
    })


});
