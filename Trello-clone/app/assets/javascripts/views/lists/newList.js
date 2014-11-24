TrelloClone.Views.ListNew = Backbone.View.extend({
  template: JST['lists/newList'],
  
  events: {
  	"submit form": "saveList"
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  saveList: function(event) {
    // put hidden tag in form for board id and data-board-id tag
    // use data-board-id tag to get board and add list to collection

    // left off here

  	event.preventDefault();
  	var attributes = $(event.target).serializeJSON();
    debugger
  	this.model.save(attributes, {
  		success: function() {
    		// debugger
        // _boards.get()
        // Backbone.history.navigate(, { trigger: true })
  		}.bind(this)
    })
  },

  render: function() {
  	var content = this.template();
  	this.$el.html(content);
  	return this;
  },

});