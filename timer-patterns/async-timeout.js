// Split long-running code over setTImeout blocks to release the ui thread from time to time
var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.sendFile('interval.html', {root: __dirname});
});

app.get('/data', function(req, res) {
  var sleep = Math.round(Math.random() * (8000 - 500)) + 500; // Random between 8 seconds and a half second response time
  var data = {};
  data.date = new Date();
  // Add artificial latency
  setTimeout(function() {
    res.json(data);
  }, sleep);
});

app.listen(3000);
console.log('server started');

