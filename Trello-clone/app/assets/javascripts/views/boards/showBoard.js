TrelloClone.Views.BoardShow = Backbone.View.extend({
  template: JST['boards/showBoard'],

  events: {
    "click #new-list": "attachNewListForm",
  },

  initialize: function() {
    this.collection = this.model.lists();
    // this.listenTo(this.model, "sync", this.render);
    // need this key piece!
    this.listenTo(this.collection, "add", this.render)
  },

  render: function() {
  	var boardContent = this.template({ board: this.model });
  	this.$el.html(boardContent);
    // this.addListViews();
    // this.attachListViews();
  	return this;
  },

  // All list views
  addListViews: function() {
    this.listViews = [];

    this.collection.each(function(list) {
      var listView = new TrelloClone.Views.ListShow({ model: list });
      this.listViews.push(listView);
    }.bind(this));
  },

  attachListViews: function() {
    this.listViews.forEach(function(listView) {
      this.$el.append(listView.render().$el);
    }.bind(this));
  },

  // New list forms
  addNewListForm: function() {
    var newList = new TrelloClone.Models.List();
    this.newListView = new TrelloClone.Views.ListNew({ model: newList });
  },

  attachNewListForm: function(event) {
    event.preventDefault();
    this.addNewListForm();
    this.$el.append(this.newListView.render().$el);
  },

});

// subViews pattern:
// 1) addView fn. if many, use array and loop, pushing each view to arr
// 2) attachView fn.  Loop through array built in 1, appending to $el

//every view needs a template, initialize, and render