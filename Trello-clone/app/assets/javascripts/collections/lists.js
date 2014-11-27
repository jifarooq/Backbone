TrelloClone.Collections.Lists = Backbone.Collection.extend({
	model: TrelloClone.Models.List,
  comparator: function(list) {
  	list.get('ord')
  },
  
  url: 'api/lists',

  initialize: function(model, options) {
  	this.board = options.board
  }

  // getOrFetch: function(id){}
});

