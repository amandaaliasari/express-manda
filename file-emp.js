var express = require('express');
var fs = require('fs');
var app = express();

app.get('/', function(req, res){
  var json = JSON.parse(fs.readFileSync('./employee.json','utf8'));
  res.send(json);
});

app.listen(2900);
console.log('Listening on port 2900');
