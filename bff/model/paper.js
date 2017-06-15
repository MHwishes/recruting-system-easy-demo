const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paperSchema = new Schema({
    name: String,
    description: String,
    sections: [
        {
            definition: Object,
            type: String
        }
    ]

}, {typeKey: '$type'});

const Paper = mongoose.model('Paper', paperSchema);

module.exports = Paper;