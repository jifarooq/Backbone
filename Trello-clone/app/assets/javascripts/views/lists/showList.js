TrelloClone.Views.ListShow = Backbone.View.extend({
  template: JST['lists/showList'],

  initialize: function() {
  	this.listenTo(this.model, "sync", this.render)
  },

  render: function() {
  	var content = this.template({ list: this.model });
  	this.$el.append(content);
  	return this;
  },

});

