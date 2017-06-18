const papers = require('./routers/papers');
const service = require('./routers/api-service');

module.exports = function (app) {
    app.use('/paper-definitions', papers);
    app.use('/papers',service);

};