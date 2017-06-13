 var  request =require('superagent');


var express = require('express');
var app = express();

app.get('/', function (req, res) {

  request
  .get('http://back_end:8080/back_end/users/1')
    .set('Accept', 'application/json')
    .end(function(err,doc){
      if (doc) {
        // alert('yay got ' + JSON.stringify(res.body));
        res.send(JSON.stringify(doc.body));
      } else {
        res.send('Oh no! error ');
      }
    });

  // res.send('Hello World!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});


