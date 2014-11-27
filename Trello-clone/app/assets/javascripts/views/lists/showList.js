TrelloClone.Views.ListShow = Backbone.CompositeView.extend({
  template: JST['lists/showList'],

  initialize: function() {
  	this.collection = this.model.cards();
  	this.listenTo(this.model, "sync", this.render);
  	this.listenTo(this.collection, "add", this.addCard);
    // this.listenTo(this.collection, "sync", this.render);
  },

  render: function() {
  	var content = this.template({ list: this.model });
  	this.$el.html(content);
    this.$el.data('list-id', this.model.id);
    this.attachCards();
    this.renderFooter();
  	return this;
  },

  addCard: function(card) {
    // needed to define card here
    var view = new TrelloClone.Views.CardShow({ 
      model: card
    });
    this.addSubview('.cards', view);
  },

  attachCards: function () {
    this.model.cards().each(this.addCard.bind(this));
    // this.$('.list-cards').sortable({connectWith: '.list-cards'});
  },

  // All cards
  // addCardViews: function() {
  // 	this.collection.each(function(card) {
  // 		debugger
  //     var cardView = new TrelloClone.Views.CardShow({ model: card });
  //     this.addSubview(this.$el, listView);
  //   }.bind(this));
  // },

  // attachCardViews: function() {
  //   _(this.cardViews).each(function(cardView) {
  //     this.$el.append(cardView.render().$el);
  //   }.bind(this));
  // },

});

