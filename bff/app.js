var mongoose = require('mongoose');
var express = require('express');
var config = require('config');
var router = require('./router');
const bodyParser = require('body-parser');

mongoose.connect(config.get('mongoUri'));

var app = express();

// app.get('/', function (req, res) {
//
//   // request
//   // .get('http://back_end:8080/back_end/users/1')
//   //   .set('Accept', 'application/json')
//   //   .end(function(err,doc){
//   //     if (doc) {
//   //       // alert('yay got ' + JSON.stringify(res.body));
//   //       res.send(JSON.stringify(doc.body));
//   //     } else {
//   //       res.send('Oh no! error ');
//   //     }
//   //   });
//
//    res.send('Hello World!');
// });
app.use(bodyParser.json());

router(app);

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});


