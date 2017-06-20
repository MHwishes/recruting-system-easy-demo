const mogoose = require('mongoose');
const rawData = require('./fixture/raw-data');
const Paper = require('../model/paper');

const modelMap = {
    Paper
};

let docs = Object.keys(rawData);

module.exports = function refresh(done) {

    Object.keys(rawData).forEach((v) => {
        modelMap[v].remove(() => {
            modelMap[v].create(rawData[v], () => {
                docs = docs.filter(doc => doc !== v);
                if (docs.length === 0) {
                    done();
                    // console.log('refreshMongo success')
                    //  process.exit(0);
                }
            })
        });
    });

};