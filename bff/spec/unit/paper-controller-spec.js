require('should');

const express = require('express');
const app = require('../../app').app;
const server=require('../../app').server;
// const request = supertest(app);
const request = require('supertest').agent(server);

const Paper = require('../../model/paper');

describe('PaperContronller', () => {

    after(function (done) {
        server.close();
        done();
    });

    it('POST /items should return uri', (done) => {
        const paper = {
            name: 'java',
            description: "java paper",
            sections: [{
                type:"logicPuzzle",
                definition:{
                    hard:2,
                    easy:2,
                    normal:1
                }
            }]
        };

        request
            .post('/paper-definitions')
            .send(paper)
            .expect(201)
            .expect((res) => {
                Paper.findOne(paper, (err, doc) => {
                    res.body.uri.should.equal(`paper/${doc._id}`);
                })
            })
            .end(done);
    });

});