TrelloClone.Views.CardNew = Backbone.View.extend({
  template: JST['lists/newList'],
  
  events: {
  	"submit form": "create"
  },

  initialize: function (options) {
  },


  create: function(event) {
  	event.preventDefault();
    // var title = this.$('input').val();

    this.collection.create({
      title: title,
      boardId: this.boardId
    });

  },

  render: function() {
  	var content = this.template();
  	this.$el.html(content);
  	return this;
  },

});