const async = require('async');
const request = require('superagent');
const Paper = require('../model/paper');
const constant = require('../config/constant');
const config = require('config');
const apiService = config.get('back_endApiService');

class PaperController {
    getAll(req, res, next) {
        async.series({
            papers: (done) => {
                Paper.find({})
                    .exec(done)
            },
            totalCount: (done) => {
                Paper.count(done);
            }
        }, (err, result) => {
            if (err) {
                return next(err);
            }
            return res.status(constant.httpCode.OK).send(result);
        });
    }

    create(req, res, next) {
        Paper.create(req.body, (err, doc) => {
            if (err) {
                return next(err);
            } else {
                request
                    .post(apiService + '/papers')
                    .send(req.body)
                    .set('Accept', 'application/json')
                    .end((err, doc) => {
                        if (err) {
                            throw (err);
                        } else {
                            return res.sendStatus(constant.httpCode.CREATED);
                        }
                    });
            }

        });
    }


}

module.exports = PaperController;