//model
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

//collection
var MessageList = Backbone.Collection.extend({
  model: MessageModel
});

//Create a global collection of messages
var Messages = new MessageList({});

//view
var MessageView = Backbone.View.extend({
  el: $('#messages'),
  events: {
    'keypress #add-new-message': 'addNewMessage'
  },
  initialize: function () {
    alert('initializing');
    //this.listenTo(Messages, 'add', this.addNewMessage);
    Messages.fetch();
  },
  addNewMessage: function (event) {
    var contentToPost = $('#add-new-message').val();
    if (event.keyCode != 13) return;
    if (!this.contentToPost) return;
    var message = Messages.create({messageContent: this.contentToPost});
    var view = new MessageView({model: message});
    this.$el.append($('<li>').text(contentToPost));
    this.$('#add-new-message').val('');
  }
});

//firstModel = new MessageModel
firstView = new MessageView({collection: Messages})