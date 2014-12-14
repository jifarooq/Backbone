TrelloClone.Routers.AppRouter = Backbone.Router.extend({
	routes: {
		"": "boardIndex",
		"boards/:id": "boardShow"
	},
 
	initialize: function($rootEl) {
		this.$rootEl = $rootEl;
	},

	boardIndex: function() {
		// need to fetch boards
		_boards.fetch();
		var indexBoardView = new TrelloClone.Views.BoardsIndex({ collection: _boards });
		this._swapView(indexBoardView);
	},

	boardShow: function(id) {
		var board = _boards.getOrFetch(id);
		var showBoardView = new TrelloClone.Views.BoardShow({ model: board });
		this._swapView(showBoardView);
	},

	_swapView: function(view) {
		this._curView && this._curView.remove();
		this._curView = view;
		this.$rootEl.html(view.render().$el);
	}

});
