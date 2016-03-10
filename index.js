var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Backbone = require('backbone');
app.set('view engine', 'ejs');

//model
var MessageModel = Backbone.Model.extend({
  initialize: function(){
    console.log('model initialized')
    this.on('change', this.notifyEachChange, this)
  },
  notifyEachChange: function (model, options) {
    if (options.unset) {
      console.log('model removed')
    } else {
      console.log('model was changed')
    }
  }
});

var firstMessage = new MessageModel({author: "Aristotle", messageContent:"Stay in School"});
console.log(firstMessage.get("author"));
//view
// var MyView = Backbone.View.extend({
//   el: '#messages',
//   initialize: function(options) {
//     this.model = new MyModel()
//     console.log('view initialized')
//   }
// })
// var MyView = Backbone.View.extend({
//   el: '#my-backbone-app',
//   events: {
//     'click button#add-new-message': 'addNewMessage'
//   },
//   initialize: function (options) {
//     var view = this
//     view.socket = io("http://pubsub-example-with-backbone.herokuapp.com/")
//     view.socket.emit('retrieve-all-nodes')
//     view.model = new MyModel()

//     view.socket.on('node-added', function (node) {
//       var $node = $(`
//         <li>
//           <span>${node.id}</span>
//           <button>x</button>
//         </li>
//       `)
//       view.model.set(node.id, $node)

//       view.$el.find("ul#nodes").append($node)
//       $node.on('click', function () {
//         view.socket.emit('remove-node', node)
//       })
//     })

//     view.socket.on('node-removed', function (node) {
//       view.model.get(node.id).remove()
//       view.model.unset(node.id, {})
//     })
//     console.log('view initialized')
//   },

//   addNewMessage: function () {
//     this.socket.emit('chat message', {}, function (obj) {
//       console.log(obj)
//     })
//   }
// })


// var view = new MyView()


// app.get('/', function(req, res){
//   res.render('index');
// });

// io.on('connection', function(socket){
//   socket.on('chat message', function(msg){
//       io.emit('chat message', msg);
//   });
//   socket.on('disconnect', function(){
//     console.log('user disconnected');
//   });
// });

http.listen(3000);
