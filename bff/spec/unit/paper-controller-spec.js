require('should');
const supertest = require('supertest');
const config = require('config');
const apiService = config.get('back_endApiService');
const express = require('express');
const app = require('../../app');
const request = supertest(app);

const Paper = require('../../model/paper');

describe('PaperContronller', () => {

    // it('POST /items should return uri', (done) => {
    //     const paper = {
    //         name: 'java',
    //         description: "java paper",
    //         sections: [{
    //             type: "logicPuzzle",
    //             definition: {
    //                 hard: 2,
    //                 easy: 2,
    //                 normal: 1
    //             }
    //         }]
    //     };
    //
    //     request
    //         .post('/paper-definitions')
    //         .set('Content-Type', 'application/json')
    //         .send(paper)
    //         .expect(201)
    //         .end(done)
    // });

    it('GET All papers',(done)=>{
        request
            .get('/paper-definitions')
            .expect(200)
            .end(done)
    })



});