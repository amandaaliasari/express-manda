var express = require ('express');
var app = express();

app.get('/', function(req, res){
res.send('hello mblo!');

});


//untuk menjalankan di web browser: localhost:400
var port = Number(process.env.PORT || 4000);
app.listen(port, function(){
  console.log("Listening on" +port);

});
