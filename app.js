var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
require("jsdom").env("", function(err, window) {
  if (err) {
    console.error(err);
    return;
  }

  var $ = require("jquery")(window);
});
var Backbone = require('backbone');
var path = require("path")

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname+'/views/index.html'));
});

app.get('/views.js', function(req, res){
  console.log(__dirname + '/views.js')
  res.sendFile(__dirname + '/views/views.js');
});

http.listen(3000);



