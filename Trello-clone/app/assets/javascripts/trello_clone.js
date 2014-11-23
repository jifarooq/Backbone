window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    _boards = new TrelloClone.Collections.Boards();
    // pass in a rootEl to router, not as an object
  	new TrelloClone.Routers.AppRouter($("#main"));
  	Backbone.history.start();
    console.log("meh"); //delete me
  }
};