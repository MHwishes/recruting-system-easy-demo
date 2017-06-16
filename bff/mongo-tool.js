var mongoose = require('mongoose');
const config = require('config');
var mongoTools = require('./spec/support/fixture/mongo-tools');
mongoose.Promise = global.Promise;
mongoose.connect(config.get('mongoUri'));

mongoTools.refresh((err) => {
    if(err) {
        console.log(err);
    }

    mongoose.connection.close(function() {
        process.exit(0);
    });
});
