TrelloClone.Views.ListNew = Backbone.View.extend({
  template: JST['lists/newList'],
  
  events: {
  	"submit form": "saveList"
  },

  initialize: function (options) {
    this.boardId = options.boardId;
    this.listenTo(this.collection, "sync", this.render);
  },

  // here need to use collection.create
  // not model.save!
  saveList: function(event) {
  	event.preventDefault();
    var title = this.$('input').val();

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