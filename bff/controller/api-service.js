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
            .end((err, doc) => {
                if (err) {
                    throw (err);
                } else {
                    return res.sendStatus(constant.httpCode.CREATED);
                }
            })
    }

    getOnePaper(req, res, next) {
        const id = req.params.id;
        request
            .get(apiService + `/papers/${id}`)
            .set('Accept', 'application/json')
            .end((err, docPaper) => {
                if (err) {
                    throw(err);
                } else {
                    const paper = docPaper.body;
                    request
                        .get(apiService + `/sections/${paper.id}`)
                        .set('Accept', 'application/json')
                        .end((err, docSection) => {
                            if (err) {
                                throw (err)
                            } else {
                                const section = docSection.body;
                                request
                                    .get(apiService + `/definitions/${section.id}`)
                                    .set('Accept', 'application/json')
                                    .end((err, docDefinition) => {
                                        if (err) {
                                            throw (err)
                                        } else {
                                            const definitions = docDefinition.body;
                                            let logicPaper = Object.assign({}, paper);
                                            logicPaper.sections = [];
                                            logicPaper.sections.push({
                                                type: 'logicPuzzle',
                                                definitions: {
                                                    normal: definitions.normal,
                                                    easy: definitions.easy,
                                                    hard: definitions.hard
                                                }
                                            });
                                            return res.status(constant.httpCode.OK).send(logicPaper);
                                        }
                                    })
                            }
                        })

                }
            })

    }

    updateOnePaper(req, res, next) {
        const id=req.params.id;
        request
            .put(apiService + `/papers/${id}`)
            .send(req.body)
            .set('Accept', 'application/json')
            .end((err, doc) => {
                if (err) {
                    throw (err);
                } else {
                    return res.sendStatus(constant.httpCode.NO_CONTENT)
                }
            })

    }


}

module.exports = ApiServiceController;