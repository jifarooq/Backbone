/*global Pokedex, JST */

Pokedex.Views = {};

// Index View
Pokedex.Views.PokemonIndex = Backbone.View.extend({
  events: {
    "click li": "selectPokemonFromList"
  },

  initialize: function () {
    this.collection = new Pokedex.Collections.Pokemon()
  },

  addPokemonToList: function (pokemon) {
    var shortInfo = ['name', 'poke_type'];
    var content = JST["pokemonListItem"]({ pokemon: pokemon,  shortInfo: shortInfo});
    this.$el.append(content);
  },

  refreshPokemon: function (options) {
    var indexView = this;

    this.collection.fetch({
      success: function(){
        indexView.render();
      }
    });
  },

  render: function () {
    this.$el.empty();
    this.collection.each(function(pokemon){
      this.addPokemonToList(pokemon);
    }.bind(this))
  },

  selectPokemonFromList: function (event) {
    var $target = $(event.target);
    var pokeId = $target.data('id');
    Backbone.history.navigate("/pokemon/" + pokeId, { trigger: true });
  }
});

// Detail View
Pokedex.Views.PokemonDetail = Backbone.View.extend({
  events: {
    "click .toys li": "selectToyFromList" 
  },

  refreshPokemon: function (options) {
    var detailView = this;
    this.model.fetch({
      success: function () {
        detailView.render();
      }
    });
  },

  render: function () {
    var attrs = ["name", "attack", "defense", "poke_type", "moves"];
    var toyInfo = ['name', 'happiness', 'price'];
    var toyContent = "";

    var pokeContent = JST['pokemonDetail']({
      pokemon: this.model, attrs: attrs });
    
    this.model.toys().each(function (toy) {
       toyContent += JST['toyListItem']({ 
        toy: toy, shortInfo: toyInfo });
    });
    
    this.$el.html(pokeContent);
    this.$el.find('.toys').append(toyContent);
  },

  selectToyFromList: function (event) {
    var toyId = $(event.currentTarget).data('id');

    Backbone.history.navigate(
      "/pokemon/" + this.model.id + "/toys/" + toyId, 
      { trigger: true }
    );
  }
});

Pokedex.Views.ToyDetail = Backbone.View.extend({
  render: function () {
    var toyProps = ['name', 'happiness', 'price'];

    var content = JST['toyDetail']({ 
      toy: this.model, 
      pokes: [],
      shortInfo: toyProps
    });
    this.$el.html(content);
  }
});

