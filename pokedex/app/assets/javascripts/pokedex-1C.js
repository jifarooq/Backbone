Pokedex.RootView.prototype.createPokemon = function (attrs, callback) {
	var pokemon = new Pokedex.Models.Pokemon(attrs.pokemon);
	var view = this;
	
	pokemon.save({}, { 
		success: function (){
			view.pokes.add(pokemon);
			view.addPokemonToList(pokemon);
			callback(pokemon);
		}
	})
};

Pokedex.RootView.prototype.submitPokemonForm = function (event) {
	var view = this;
	event.preventDefault();
	
	$form = view.$el.find('.new-pokemon')
	var params = $form.serializeJSON();
	
	view.createPokemon(params, view.renderPokemonDetail.bind(view));
};
