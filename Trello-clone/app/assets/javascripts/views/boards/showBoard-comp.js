TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST['boards/showBoard'],

  events: {
    "click #new-list": "attachNewListForm",
  },

  initialize: function() {
    this.collection = this.model.lists();
    // this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.collection, "add", this.render)
  },

  render: function() {
  	var content = this.template({ board: this.model });
  	this.$el.html(content);
    this.addListViews();
    this.attachSubviews();
    debugger
  	return this;
  },

  // All list views --> using composite view
  addListViews: function() {
    this.collection.each(function(list) {
      var listView = new TrelloClone.Views.ListShow({ model: list });
      this.addSubview(this.$el, listView.render());
    }.bind(this));
  },

  attachListViews: function() {

  },

  // attachSubviews: function() {
  //   this.subviews.forEach(function(subview) {
  //     this.$el.append(subview.render().$el);
  //   }.bind(this));
  // },

  // New list forms
  // addNewListForm: function() {
  //   var newList = new TrelloClone.Models.List();
  //   debugger
  //   this.newListView = new TrelloClone.Views.ListNew({ 
  //     model: newList,
  //     boardId: this.model.id
  //   });
  // },

  // attachNewListForm: function(event) {
  //   event.preventDefault();
  //   this.addNewListForm();
  //   this.$el.append(this.newListView.render().$el);
  // },

});

// subViews pattern:
// 1) addView fn. if many, use array and loop, pushing each view to arr
// 2) attachView fn.  Loop through array built in 1, appending to $el

//every view needs a template, initialize, and render