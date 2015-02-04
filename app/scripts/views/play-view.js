/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    Barjeel.Views.PlayView =  Backbone.Marionette.CompositeView.extend({

    		initialize : function () {
    				console.log ('initialise - fetching collection from PlayView');
            this.listenTo(this.collection, "reset", this.render);
            this.collection.fetch();
            this.currentView = null;
            this.count = 0;
        },

        template: JST['app/scripts/templates/play-view.hbs'],
    		childView: Barjeel.Views.PlaySingleView,
    		childViewContainer: "#question",
    		tagName : 'div',
        className: 'play',

        onRender: function(){

			  },

			  events: {
				  'touchend #playBack': 'backHome'
				},

        backHome: function(){
					var homeView = new Barjeel.Views.HomeView(); 
					Barjeels.allRegion.show(homeView);
				}

        

    });

})();
