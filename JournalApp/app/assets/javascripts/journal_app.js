window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  
  initialize: function() {
    posts.fetch();
    this.installSidebar();
    router = new JournalApp.Routers.PostsRouter({ $rootEl: $('.content') });
    Backbone.history.start();
  },
  
  installSidebar: function (attribute) {
    postsIndex = new JournalApp.Views.PostsIndex({
      collection: posts
    });
    $('.sidebar').html(postsIndex.render().$el);
  },
};

$(document).ready(function(){
  JournalApp.initialize();
});