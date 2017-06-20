const mogoose = require('mongoose');
const config = require('config');
const refreshMongo = require('./refresh-mongo');

mogoose.connect(config.get('mongoUri'), (err) => {
    if (err) {
        console.log('connect error');
    } else {
        console.log('connect success');
    }
});

refreshMongo(() => {
    process.exit(0);
});
