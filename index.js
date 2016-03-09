var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
      io.emit('chat message', msg);
  });
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(3000);
