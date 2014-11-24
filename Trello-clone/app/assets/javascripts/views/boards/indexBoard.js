TrelloClone.Views.BoardsIndex = Backbone.View.extend({
  template: JST['boards/indexBoard'],

  events: {
  	"click #new-board": "attachNewBoardView",
    "click #delete": "destroy"
  },

  initialize: function() {
  	this.addNewBoardView();
  	this.listenTo(this.collection, "sync remove", this.render);
  },

  addNewBoardView: function() {
     var newBoard = new TrelloClone.Models.Board();
     this.newBoardView = new TrelloClone.Views.BoardNew({ model: newBoard });
  },

  attachNewBoardView: function(event) {
    event.preventDefault();   //forgot to do this at first!
    this.$el.append(this.newBoardView.render().$el);
    // this.newBoardView.delegateEvents();
  },

  destroy: function(event) {
    var id = $(event.target).data('id');
    var board = this.collection.get(id);
    board.destroy();
  },

  render: function() {
  	var content = this.template({ boards: this.collection });
  	this.$el.html(content);
  	return this;
  },

});