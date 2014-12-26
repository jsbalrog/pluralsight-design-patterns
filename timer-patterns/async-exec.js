// Split long-running code over setTImeout blocks to release the ui thread from time to time
var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.sendFile('index.html', {root: __dirname});
});

app.get('/data', function(req, res) {
  var data = [];
  for(var i = 0; i < 1001; i++) {
    data.push(i);
  }
  res.json(data);
});

app.listen(3000);
console.log('server started');
