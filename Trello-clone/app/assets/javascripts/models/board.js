TrelloClone.Models.Board = Backbone.Model.extend({
	urlRoot: "api/boards",

	lists: function() {
		if (!this._lists) {
			this._lists = new TrelloClone.Collections.Lists([], { board: this });
		}
			
		return this._lists;
	},

	// this is how you extract lists out of board when you fetch board!
  parse: function (response) {
    if (response.lists) {
    	// key piece here!
      this.lists().set(response.lists, { parse: true });
      delete response.lists;
    }
    
    return response;
  }
});
