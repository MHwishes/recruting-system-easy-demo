const async = require('async');
const constant = require('../config/constant');
const request=require('superagent');
var config = require('config');
const apiService=config.get('back_endApiService');

class ApiServiceController {


    getAllPapers(req,res,next){
        request
            .get(apiService+"/papers")
            .set('Accept', 'application/json')
            .end((err, result) => {
                if (err) {
                    throw (err);
                } else {
                  return  res.status(constant.httpCode.OK).send(result.body);
                }
            });

    }


}

module.exports = ApiServiceController;