Pokedex.Router = Backbone.Router.extend({
  routes: {
    "": "pokemonIndex",
    "pokemon/:id": "pokemonDetail",
    "pokemon/:pokemonId/toys/:toyId" : "toyDetail"
  },

  pokemonDetail: function (id, callback) {
    if(!this._pokemonIndex){
      this.pokemonIndex(this.pokemonDetail.bind(this, id, callback));
      return;
    }

    var pokemon = this._pokemonIndex.collection.get(id);

    this._pokeDetailView = 
      new Pokedex.Views.PokemonDetail({ model: pokemon });
    $("#pokedex .pokemon-detail").html(this._pokeDetailView.$el);
    this._pokeDetailView.refreshPokemon({ success: callback });
  },

  pokemonIndex: function (callback) {
    this._pokemonIndex = new Pokedex.Views.PokemonIndex();
    $("#pokedex .pokemon-list").html(this._pokemonIndex.$el);
    this._pokemonIndex.refreshPokemon({ success: callback });
  },

  toyDetail: function (pokemonId, toyId) {
    if(!this._pokeDetailView){
      this.pokemonDetail(pokemonId, this.toyDetail.bind(this, pokemonId, toyId));
      return;
    }

    var toy = this._pokeDetailView.model.toys().get(toyId);

    var toyDetailView = new Pokedex.Views.ToyDetail({ model: toy });
    $("#pokedex .toy-detail").html(toyDetailView.$el);
    toyDetailView.render();
  }
});


$(function () {
  new Pokedex.Router();
  Backbone.history.start();
});