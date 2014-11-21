JournalApp.Routers.PostsRouter = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },
  
  routes: {
    "": "postsIndex",
    "posts/new": "postNew",
    "posts/:id": "postShow",
    "posts/:id/edit": "postEdit"
  },
  
  postNew: function(){
    var post = new JournalApp.Models.Post();
    var postForm = new JournalApp.Views.PostForm({ model: post });
    
    postForm.render();
    this.$rootEl.html(postForm.$el);
  },
  
  postEdit: function (id) {
    var post = posts.getOrFetch(id);
    var postForm = new JournalApp.Views.PostForm({ model: post });
    
    postForm.render();
    this.$rootEl.html(postForm.$el);
  },
  
  postsIndex: function () {
    var postsIndex = new JournalApp.Views.PostsIndex({ collection: posts });
    postsIndex.render();
    this.$rootEl.html(postsIndex.$el);
  },
  
  postShow: function (id) {
    var post = posts.getOrFetch(id);
    var postShow = new JournalApp.Views.PostShow({ model: post });
    postShow.render();
    this.$rootEl.html(postShow.$el);
  },

});