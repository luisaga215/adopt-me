const express = require('express')
const app = express();

app.use(express.static(__dirname + '/scripts'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

var server = app.listen(8081, function() {
  console.log("Server in port 8081");
});