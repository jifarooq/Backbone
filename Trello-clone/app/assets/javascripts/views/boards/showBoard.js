TrelloClone.Views.BoardShow = Backbone.View.extend({
  template: JST['boards/showBoard'],

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function() {
    // debugger
    // left off here!
  	var content = this.template({ 
      board: this.model,
      lists: this.collection 
    });
  	this.$el.html(content);
  	return this;
  },

});

//every view needs a template, initialize, and render