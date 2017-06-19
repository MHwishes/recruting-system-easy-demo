const async = require('async');
const constant = require('../config/constant');
const request = require('superagent');
const config = require('config');
const apiService = config.get('back_endApiService');

class ApiServiceController {


    getAllPapers(req, res, next) {
        request
            .get(apiService + "/papers")
            .set('Accept', 'application/json')
            .end((err, result) => {
                if (err) {
                    throw (err);
                } else {
                    return res.status(constant.httpCode.OK).send(result.body);
                }
            });

    }

    deletePaper(req, res, next) {
        const id = req.params.id;

        request
            .delete(apiService + `/papers/${id}`)
            .set('Accept', 'application/json')
            .end((err, request) => {
                if (err) {
                    throw (err);
                } else {
                    return res.sendStatus(constant.httpCode.NO_CONTENT);
                }
            })
    }

    savePaper(req, res, next) {
        console.log(req.body);
        request
            .post(apiService + '/papers')
            .send(req.body)
            .set('Accept', 'application/json')
            .end((err, request) => {
                if (err) {
                    throw (err);
                } else {
                    return res.sendStatus(constant.httpCode.CREATED);
                }
            })
    }


}

module.exports = ApiServiceController;