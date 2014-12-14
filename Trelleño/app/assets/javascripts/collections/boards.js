TrelloClone.Collections.Boards = Backbone.Collection.extend({
  model: TrelloClone.Models.Board,

  url: "api/boards",

  getOrFetch: function (id) {
  	var boards = this, board = this.get(id)

  	if (!board) {
  		board = new TrelloClone.Models.Board({ id: id });
      board.fetch({
        success: function() { boards.add(board); }
      });
    } else {
      board.fetch();
    }

  	return board;
  },

  // 1) get board from collection
	// 2) if board doesn't exist, create new board with the id
  //    fetch board, on success adding it to the collection (this)
	// 3) return board
});
