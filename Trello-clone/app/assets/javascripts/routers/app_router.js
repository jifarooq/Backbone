TrelloClone.Routers.AppRouter = Backbone.Router.extend({
	routes: {
		"": "boardIndex",
		"boards/:id": "boardShow"
	},
 
	initialize: function($rootEl) {
		this.$rootEl = $rootEl;
	},

	boardIndex: function() {
		// create new view and any vars needed to pass into view
		// need to fetch boards
		_boards.fetch();
		var indexBoardView = new TrelloClone.Views.BoardsIndex({ collection: _boards });
		this.$rootEl.html(indexBoardView.render().$el);
	},

	boardShow: function(id) {
		var board = _boards.getOrFetch(id);
		var showBoardView = new TrelloClone.Views.BoardShow({ model: board });
		this.$rootEl.html(showBoardView.render().$el);
	},

});
