TrelloClone.Views.ListNewLink = Backbone.View.extend({
  template: JST['lists/newListLink'],
  
  events: {
  },

  initialize: function (options) {
  },

  render: function() {
  	var content = this.template();
  	this.$el.html(content);
  	return this;
  },

});