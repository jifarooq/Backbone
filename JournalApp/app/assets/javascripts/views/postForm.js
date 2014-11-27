JournalApp.Views.PostForm = Backbone.View.extend({
  template: JST['post_form'],

  events: { 'submit #post-form': 'commitPost' },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    },

  commitPost: function (event) {
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON();

    this.model.save(params, {
      success: function() {
        posts.add(this.model); 
        Backbone.history.navigate("", { trigger: true } )
      }.bind(this),
      error: function() {
        var postForm = new JournalApp.Views.PostForm({ model: this.model });
        postForm.render();
      }.bind(this)
    });
  },
  
  render: function() {
    var content = this.template({ post: this.model });
    this.$el.html(content);
    return this;
  }
});