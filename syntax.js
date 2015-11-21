var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage

  // respond with "Hello World!" on the homepage
  app.get('/', function (req, res) {
    res.send('Hello Mblo!');
  });

  // accept POST request on the homepage
  app.post('/', function (req, res) {
    res.send('Got a POST request');
  });

  // accept PUT request at /user
  app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user');
  });

  // accept DELETE request at /user
  app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user');
  });

  var port = Number(process.env.PORT || 1400);
  app.listen(port, function(){
    console.log("Listening on" +port);

  });
