TrelloClone.Views.BoardsIndex = Backbone.View.extend({
  template: JST['boards/indexBoard'],

  events: {
  	"click #new-board": "attachNewBoardView"
  },

  initialize: function() {
  	this.addNewBoardView();
  	this.listenTo(this.collection, "sync", this.render);
  },

  render: function() {
  	var content = this.template({ boards: this.collection });
  	this.$el.html(content);
  	return this;
  },

  addNewBoardView: function() {
  	 var newBoard = new TrelloClone.Models.Board();
  	 this.newBoardView = new TrelloClone.Views.BoardNew({ model: newBoard });
  },

  attachNewBoardView: function(event) {
    event.preventDefault();   //forgot to do this at first!
  	this.$el.append(this.newBoardView.render().$el);
  	this.newBoardView.delegateEvents();
  },

});

// eventually need to be able to click link and have form render
// need click event