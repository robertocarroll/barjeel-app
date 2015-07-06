/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    Barjeel.Views.DiscoverView = Backbone.Marionette.CompositeView.extend({

    		initialize : function () {
    				console.log ('initialise - fetching collection from DiscoverView');
            this.listenTo(this.collection, "reset", this.render);
            this.collection.fetch();
        },

    		template: JST['app/scripts/templates/discover-view.hbs'], 	
    		childView: Barjeel.Views.DiscoverListSingleView,
    		childViewContainer: "#list-discover",
    		tagName : 'div',
        className: 'wrapper',

        events: {
				  'touchend #discoverBack': 'backHome'
				},

        backHome: function(){
        	console.log ("Back Home tap fired");
					var homeView = new Barjeel.Views.HomeView(); 
					BarjeelApp.allRegion.showAnimated(homeView, { animationType: 'slideRight' });
				}

    });

})();
