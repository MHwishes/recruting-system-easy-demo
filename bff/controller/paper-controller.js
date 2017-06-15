const async = require('async');

const Paper = require('../model/paper');
const constant = require('../config/constant');

class PaperController {
    getAll(req, res, next){
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
            console.log(req.body,"huhuhuhu");
            console.log(req.body.sections[0],"huhuhuhu");
            if (err) {
                return next(err);
            }
            return res.status(constant.httpCode.CREATED).send({uri: `paper/${doc._id}`});
        });
    }



}

module.exports = PaperController;