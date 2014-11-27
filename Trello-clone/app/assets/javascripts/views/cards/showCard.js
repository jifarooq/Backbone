TrelloClone.Views.CardShow = Backbone.View.extend({
  template: JST['cards/showCard'],

  initialize: function() {
  	this.listenTo(this.model, "sync", this.render)
  },

  render: function() {
  	var content = this.template({ card: this.model });
  	this.$el.append(content);
  	return this;
  },

});

