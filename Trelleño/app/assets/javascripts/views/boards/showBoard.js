TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST['boards/showBoard'],

  events: {
    "click #new-list": "attachNewListForm",
  },

  // header disappears after rendering

  initialize: function() {
    this.collection = this.model.lists();
    // when already fetched, need to loop through and add them
    // if (this.collection) { this.addListViews(); };

    // this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addList)
  },

  render: function() {
  	var content = this.template({ board: this.model });
  	this.$el.html(content);
    this.attachLists();
    this.addListForm();
  	return this;
  },

  addList: function() {
    var listView = new TrelloClone.Views.ListShow({ 
      model: this.model
    });
    this.addSubview('.list-gutter', listView);
  },

  // All list views
  attachLists: function() {
    this.collection.each(this.addList.bind(this));
  },

  addNewListLink: function() {
    // left off here
    var newListLink = new TrelloClone.Views.ListNewLink();
    this.addSubview('.list-gutter', newListLink);
  },

  addListForm: function () {
    var view = new TrelloClone.Views.ListNew({
      collection: this.collection,
      boardId: this.model.id
    });
    this.addSubview('#list-form', view);
  },

  // link to new list as subvie
  // New list forms
  // addNewListForm: function() {
  //   var newList = new TrelloClone.Models.List();
  //   this.newListView = new TrelloClone.Views.ListNew({ 
  //     collection: this.collection,
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