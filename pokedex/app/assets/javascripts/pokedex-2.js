Pokedex.RootView.prototype.addToyToList = function (toy) {
	var $li = $("<li class='toy-list-item'>")
	$li.data('id', toy.id);
	$li.data('pokemon-id', toy.get('pokemon_id'));

	$li.append(toy.get("name"));
	this.$pokeDetail.find(".toys").append($li);
};

Pokedex.RootView.prototype.renderToyDetail = function (toy) { // III
	var $div = $("<div class='detail'></div>");
	var $image = $("<img src='" + toy.get("image_url") + "''>");

	$div.append($image);
	$div.append("<br>Price: " + toy.get("price"));
	$div.append("<br>Happiness: " + toy.get("happiness"))

	this.$toyDetail.html($div);
};

Pokedex.RootView.prototype.selectToyFromList = function (event) {
	var toyId = $(event.target).data('id');
	
	//want the data key, not the value!
	var pokeId = $(event.target).data('pokemon-id');

	// var toy = this.pokes.get(pokeId).toys(toyId);
	// need to fetch toys, then use get! above line doesn't work
	var toy = this.pokes.get(pokeId).toys().get(toyId);
	this.renderToyDetail(toy);
};