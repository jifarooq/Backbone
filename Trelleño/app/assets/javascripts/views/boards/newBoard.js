TrelloClone.Views.BoardNew = Backbone.View.extend({
  template: JST['boards/newBoard'],
  
  events: {
  	"submit form": "saveBoard"
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  saveBoard: function(event) {
  	event.preventDefault();
  	var attributes = $(event.target).serializeJSON();

  	this.model.save(attributes, {
  		success: function() {
  			_boards.add(this.model);
        var id = this.model.id;
        Backbone.history.navigate("boards/" + id, { trigger: true } )
  		}.bind(this)
  	})
  },

  render: function() {
  	var content = this.template();
  	this.$el.html(content);
  	return this;
  },

});