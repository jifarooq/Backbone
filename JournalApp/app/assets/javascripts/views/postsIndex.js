JournalApp.Views.PostsIndex = Backbone.View.extend({
  template: JST['index'],
  events: { 'click .delete-button': 'destroyPost' },
  
  initialize: function() {
    this.listenTo(
      this.collection, 
      'sync destroy remove add change:title remove reset', 
      this.render
    )
  },

  destroyPost: function (event) {
    var postId = $(event.target).data('id');
    var post = this.collection.get(postId);
    post.destroy();
  },
  
  render: function () {
    var content = this.template({ posts: this.collection });
    this.$el.html(content);
    return this;
  },
  
});