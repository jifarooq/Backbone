TrelloClone.Views.BoardNew = Backbone.View.extend({
  template: JST['boards/newBoard'],
  
  events: {
  	"submit form": "saveBoard"
  },

  saveBoard: function(event) {
  	event.preventDefault();
  	var attributes = $(event.currentTarget).serializeJSON();

  	this.model.save(attributes, {
  		success: function() {
  			_boards.add(this.model);
  		}.bind(this)
  	})
  },

  render: function() {
  	var content = this.template();
  	this.$el.html(content);
  	return this;
  },

});