TrelloClone.Collections.Lists = Backbone.Collection.extend({
	model: TrelloClone.Models.List,
  url: 'api/lists',
  //function() { return this.board.url(); },

  initialize: function(model, options) {
  	this.board = options.board
  }

  // getOrFetch: function(id){}
});

