Pokedex.RootView.prototype.addPokemonToList = function (pokemon) {
	var $li = $("<li>");
	//use debugger to check out methods on $li!

	$li.data("id", pokemon.id);
	$li.text(pokemon.get("name"));
	this.$pokeList.append($li)
};

Pokedex.RootView.prototype.refreshPokemon = function (callback) {
	var pokes = this.pokes.fetch({
		success: function () {
			this.pokes.each( function(poke) {
				this.addPokemonToList(poke);
			}.bind(this));
		}.bind(this)
	});
};