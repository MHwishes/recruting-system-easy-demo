const papers = require('./routers/papers');

module.exports = function (app) {
    app.use('/paper-definitions', papers);

};