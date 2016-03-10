var MessageModel = Backbone.Model.extend({
  defaults: {
    author: '',
    messageContent: ''
  },
  initialize: function(){
    console.log('model initialized')
    this.on('change', this.notifyEachChange, this)
  },
  notifyEachChange: function (model) {
    console.log('There was a change to a model instance')
  }
});

//view
var MessageView = Backbone.View.extend({
  el: $('#messages'),
  events: {
    'click button#add-new-message': 'addNewMessage'
  },
  initialize: function () {
    alert('initializing')
    //this.addNewMessage();
  },
  addNewMessage: function (event) {
    event.preventDefault();
    var contentToPost = $('#m').val();
    alert(contentToPost)
    this.$el.append($('<li>').text(contentToPost));
    var newMessage = new MessageModel({messageContent: contentToPost
    })
});

firstModel = new MessageModel
firstView = new MessageView({model: firstModel})