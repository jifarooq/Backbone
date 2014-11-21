Pokedex.RootView.prototype.renderPokemonDetail = function (pokemon) {
	var $div = $("<div class='detail'></div>");
	var $image = $("<img src=" + pokemon.get("image_url") + ">");
	var $attr_ul = $("<ul></ul>");
	
	// append pokemon attributes
	var keys = ["name", "attack", "defense", "poke_type", "moves"];

	for (var i = 0; i < keys.length; i++) {
		var keyName = keys[i].substring(0, 1).toUpperCase() 
			+ keys[i].substring(1);
		var attr = pokemon.attributes[keys[i]];
		$attr_ul.append($("<li>" + keyName + ": " + attr + "</li>"));
	}

	$div.append($image, $attr_ul);
	this.$pokeDetail.html($div);

	//clear screen of toys
	this.$toyDetail.empty();

	// append pokemon's toys
	var $toys = $("<ul class='toys'></ul>");
	this.$pokeDetail.append($toys);

	var view = this;
	pokemon.fetch({
		success: function () {
			pokemon.toys().each(function (toy) {
				view.addToyToList(toy);
			});
		}
	})
	
};

Pokedex.RootView.prototype.selectPokemonFromList = function (event) {
	var id = $(event.target).data('id');
	this.renderPokemonDetail(this.pokes.get(id).bind(this));
};


